package com.example.petsogram.authservice.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtils {

    @Value("${JWT_SECRET}")
    private String secret;

    @Value("${JWT_EXPIRATION}")
    private long expiration;


    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .setSubject(userDetails.getUsername()) // Устанавливаем имя пользователя
                .setIssuedAt(new Date()) // Время создания
                .setExpiration(new Date(System.currentTimeMillis() + expiration)) // Время истечения
                .signWith(SignatureAlgorithm.HS512, secret) // Алгоритм подписи
                .compact();// Собираем токен
    }

    public boolean validateToken(String token) {
        try {
            SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
            Jwts.parser()
                    .verifyWith(secretKey)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
            return true;
        } catch (MalformedJwtException e) {
            System.err.println("Некорректный токен: " + e.getMessage());
        } catch (ExpiredJwtException e) {
            System.err.println("Токен просрочен: " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            System.err.println("Неподдерживаемый токен: " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.err.println("Пустой токен: " + e.getMessage());
        }
        return false;
    }

    // Получение имени пользователя из токена
    public Claims getUsernameFromToken(String token) {

        SecretKey secretKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));
        return Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
