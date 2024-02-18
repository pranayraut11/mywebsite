package com.mywebsite.common.security.services;

import com.mywebsite.common.security.dto.JwtAuthenticationResponse;
import com.mywebsite.common.security.dto.SignUpRequest;
import com.mywebsite.common.security.dto.SigninRequest;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request) throws Exception;

    JwtAuthenticationResponse signin(SigninRequest request);
}