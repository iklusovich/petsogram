package com.example.petsogram.authservice.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String username;
    private String password; // Пароль будет зашифрован перед сохранением
}
