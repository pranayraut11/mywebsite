package com.mywebsite.blog.controller;


import com.mywebsite.common.security.dto.JwtAuthenticationResponse;
import com.mywebsite.common.security.dto.SignUpRequest;
import com.mywebsite.common.security.dto.SigninRequest;
import com.mywebsite.common.security.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationService service;

    @PostMapping("signup")
    public JwtAuthenticationResponse signup(@RequestBody SignUpRequest signUpRequest) throws Exception {
       return service.signup(signUpRequest);
    }

    @PostMapping("signin")
    public JwtAuthenticationResponse signin(@RequestBody SigninRequest signinRequest) throws Exception {
        return service.signin(signinRequest);
    }


}
