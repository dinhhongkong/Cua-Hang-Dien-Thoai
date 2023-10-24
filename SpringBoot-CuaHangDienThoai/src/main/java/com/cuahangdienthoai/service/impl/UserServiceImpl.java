package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.repository.UserRepository;
import com.cuahangdienthoai.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserDetailsService, UserService {
    private UserRepository userRepository;
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username);
        if(user ==null) {
            throw new UsernameNotFoundException("User Not Found");
        }
        return new CustomUserDetails(user);
    }

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUserName(username);
    }

    @Override
    public List<User> findAllByRole(String role) {
        return userRepository.findAllByRole(role);
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }
}
