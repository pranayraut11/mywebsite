package com.mywebsite.common.security.dto;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
public class JwtAuthenticationResponse {

    private String token;

}
