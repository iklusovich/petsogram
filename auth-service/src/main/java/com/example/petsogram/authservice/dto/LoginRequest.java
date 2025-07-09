package com.example.petsogram.authservice.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String username; // Логин пользователя
    private String password; // Пароль в открытом виде (передается при аутентификации)
}
