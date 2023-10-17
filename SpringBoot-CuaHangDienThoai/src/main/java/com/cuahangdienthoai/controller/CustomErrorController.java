package com.cuahangdienthoai.controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class CustomErrorController  implements ErrorController {
    @RequestMapping(value = "/error")
    public String renderErrorPage( HttpServletRequest request,  Model model) {
        String errorMsg ="";
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        if (status != null) {
            int statusCode = Integer.parseInt(status.toString());
            if(statusCode == HttpStatus.BAD_REQUEST.value()) {
                errorMsg = "Http Error Code: 400. Bad Request";
            }
            else if(statusCode == HttpStatus.UNAUTHORIZED.value()) {
                errorMsg = "Http Error Code: 401. Unauthorized";
            }
            else if(statusCode == HttpStatus.NOT_FOUND.value()) {
                errorMsg = "Http Error Code: 404. Resource not found";
            }
            else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
                errorMsg = "Http Error Code: 500. Internal Server Error";
            }
        }

        model.addAttribute("errorMsg",errorMsg);
        model.addAttribute("errorCode", HttpStatus.NOT_FOUND.value());
        return "error-page";
    }




}
