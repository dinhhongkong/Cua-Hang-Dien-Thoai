package com.cuahangdienthoai.controller;

import com.cuahangdienthoai.dto.ChatContentDTO;
import com.cuahangdienthoai.entity.CustomUserDetails;
import com.cuahangdienthoai.service.impl.ChatBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ChatBotController {
    private ChatBotService chatBotService;

    @Autowired
    public void setChatBotService(ChatBotService chatBotService) {
        this.chatBotService = chatBotService;
    }

    @PostMapping("/chat-bot")
    public ResponseEntity<String> handleChatRequest(@RequestParam String chatContent, Authentication authentication) {
        UserDetails userDetails = authentication == null ? null :(CustomUserDetails) authentication.getPrincipal();
        ChatContentDTO chatContentDTO = new ChatContentDTO(userDetails == null? "null": userDetails.getUsername()  ,chatContent);
        String a = chatBotService.getResponseChat(chatContentDTO);
        System.out.println(a);
        return ResponseEntity.ok(a);
    }





}
