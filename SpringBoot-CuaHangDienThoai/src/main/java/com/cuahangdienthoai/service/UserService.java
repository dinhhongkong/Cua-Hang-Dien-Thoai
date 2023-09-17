package com.cuahangdienthoai.service;

import com.cuahangdienthoai.entity.User;

public interface UserService {
    User findByUsername(String username);

}
