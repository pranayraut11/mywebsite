package com.mywebsite.blog.security;

import com.mywebsite.blog.dto.JwtAuthenticationResponse;
import com.mywebsite.blog.dto.SignUpRequest;
import com.mywebsite.blog.dto.SigninRequest;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request) throws Exception;

    JwtAuthenticationResponse signin(SigninRequest request);
}