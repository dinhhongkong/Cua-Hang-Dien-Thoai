package com.cuahangdienthoai.repository;

import com.cuahangdienthoai.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByUserName(String username);

    List<User> findAllByRole(String role);
}
