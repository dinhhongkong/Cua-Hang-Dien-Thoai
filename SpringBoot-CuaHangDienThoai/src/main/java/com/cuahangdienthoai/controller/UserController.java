package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.entity.User;
import com.cuahangdienthoai.entity.giohang.GioHang;

import com.cuahangdienthoai.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired
    private PasswordEncoder passwordEncoder;

     @PostMapping("Admin/ban")
    public ResponseEntity<String> ban(@RequestParam String userName, Authentication authentication){
        User user = userService.findByUsername(userName);
        user.setEnable(false);
        userService.save(user);
        return ResponseEntity.ok("success");
    }
    @PostMapping("Admin/unlock")
    public ResponseEntity<String> unlock(@RequestParam String userName, Authentication authentication){
        User user = userService.findByUsername((userName));
        user.setEnable(true);
        userService.save((user));
        return ResponseEntity.ok("success");
    }

    @PostMapping("Admin/create")
    public ResponseEntity<User> createAdmin(@RequestBody User newUser){
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));
        userService.save(newUser);
         return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("Admin/changpass")
    public  ResponseEntity<String> changPass(@RequestParam String userName, @RequestParam String pass, Authentication authentication){
        User user = userService.findByUsername((userName));
        user.setPassword(passwordEncoder.encode((pass)));
        userService.save(user);
        return ResponseEntity.ok("success");
    }

    @PostMapping("Admin/user/ban")
    public  ResponseEntity<String> userBan(@RequestParam String userName, Authentication authentication){
         User user = userService.findByUsername(userName);
         user.setEnable(false);
         userService.save(user);
         return ResponseEntity.ok("success");
    }

    @PostMapping("Admin/user/unlock")
    public  ResponseEntity<String> userUnlock(@RequestParam String userName, Authentication authentication){
        User user = userService.findByUsername(userName);
        user.setEnable(true);
        userService.save(user);
        return ResponseEntity.ok("success");
    }
}
