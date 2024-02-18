package com.mywebsite.blog.mapper;

import com.mywebsite.blog.dto.SignUpRequest;
import com.mywebsite.blog.entity.User;
import org.mapstruct.Mapper;

@Mapper
public interface UserMapper {
    User toUser(SignUpRequest signUpRequest);
}
