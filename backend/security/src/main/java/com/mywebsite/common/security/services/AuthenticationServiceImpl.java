package com.mywebsite.common.security.services;

import com.mywebsite.common.security.constants.enums.Role;
import com.mywebsite.common.security.dto.JwtAuthenticationResponse;
import com.mywebsite.common.security.dto.SignUpRequest;
import com.mywebsite.common.security.dto.SigninRequest;
import com.mywebsite.common.security.entity.User;
import com.mywebsite.common.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTService service;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) throws Exception {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new Exception("Username already exist.");
        }
        var user = User.builder().email(request.getEmail()).role(Role.USER).
                firstName(request.getFirstName()).lastName(request.getLastName()).password(passwordEncoder.encode(request.getPassword())).build();
        userRepository.save(user);
        return JwtAuthenticationResponse.builder().token(service.generateToken(user)).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        User user = userRepository.findByEmail(request.getUsername()).orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        String token = service.generateToken(user);
        return JwtAuthenticationResponse.builder().token(token).build();
    }
}
