package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.User;

import java.util.List;

public interface UserService {
    User findByUsername(String username);

    List<User> findAllByRole (String role);
    void save(User user);
}
