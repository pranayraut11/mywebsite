package com.mywebsite.blog.security;

import com.mywebsite.blog.dto.JwtAuthenticationResponse;
import com.mywebsite.blog.dto.SignUpRequest;
import com.mywebsite.blog.dto.SigninRequest;
import com.mywebsite.blog.entity.User;
import com.mywebsite.blog.mapper.UserMapper;
import com.mywebsite.blog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    private UserMapper userMapper;

    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) throws Exception {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new Exception("Username already exist.");
        }
        User user = userRepository.save(userMapper.toUser(request));
        String token = service.generateToken(user);
        return JwtAuthenticationResponse.builder().token(token).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        User user = userRepository.findByEmail(request.getUsername()).orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        String token = service.generateToken(user);
        return JwtAuthenticationResponse.builder().token(token).build();
    }
}
