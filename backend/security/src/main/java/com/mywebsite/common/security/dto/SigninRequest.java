package com.mywebsite.common.security.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Builder
public class SigninRequest {
    private String username;
    private String password;
}
