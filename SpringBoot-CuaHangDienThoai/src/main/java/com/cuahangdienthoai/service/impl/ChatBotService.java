package com.cuahangdienthoai.service.impl;

import com.cuahangdienthoai.dto.ChatContentDTO;
import com.nimbusds.jose.shaded.gson.Gson;
import com.nimbusds.jose.shaded.gson.JsonObject;
import com.nimbusds.jose.shaded.gson.JsonParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ChatBotService {

    public String getResponseChat(ChatContentDTO chatContent) {
        final String uri = "http://localhost:5000/webhook";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Tạo dữ liệu JSON
//        String jsonBody = "{\"sender\": \"test_user\", \"message\": \"giá của điện thoại đó là bao nhiêu\"}";
        Gson gson = new Gson();
        String json = gson.toJson(chatContent);

        // Đóng gói dữ liệu JSON vào HttpEntity
        HttpEntity<String> requestEntity = new HttpEntity<>(json, headers);

        JsonObject jsonObject = JsonParser.parseString(restTemplate.postForObject(uri, requestEntity, String.class)).getAsJsonObject();
        String response = jsonObject.get("response").getAsString();

        // Gọi API và nhận kết quả
        return jsonObject.toString();


    }


}
