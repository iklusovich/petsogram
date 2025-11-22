package com.example.petsogram.authservice.controller;

import com.example.petsogram.authservice.dto.JwtResponse;
import com.example.petsogram.authservice.dto.LoginRequest;
import com.example.petsogram.authservice.dto.RegisterRequest;
import com.example.petsogram.authservice.jwt.JwtUtils;
import com.example.petsogram.authservice.model.ExistsType;
import com.example.petsogram.authservice.model.Role;
import com.example.petsogram.authservice.model.User;
import com.example.petsogram.authservice.repository.RoleRepository;
import com.example.petsogram.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("auth/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateToken((UserDetails) authentication.getPrincipal());
        return ResponseEntity.ok(new JwtResponse(jwt));
    }

    @PostMapping("auth/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByUsername(registerRequest.getUsername())) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        if (userRepository.existsByPhone(registerRequest.getPhone())) {
            return ResponseEntity.badRequest().body("Phone already registry");
        }

        User user = new User();
        user.setUsername(registerRequest.getUsername());
        user.setPhone(registerRequest.getPhone());
        user.setSex(registerRequest.getSex());
        user.setSex(registerRequest.getCountryCode());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));

        Role userRole = roleRepository.findByName("ROLE_USER")
                .orElseThrow(() -> new RuntimeException("Error: Role USER not found.1"));

        user.setRoles(Collections.singleton(userRole));
        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");

    }

    @GetMapping("/exists")
    public boolean existsUser(@RequestParam("type") ExistsType type,
                              @RequestParam("value") String value) {
        return switch (type) {
            case USERNAME -> userRepository.existsByUsername(value);
            case PHONE -> userRepository.existsByPhone(value);
            default -> throw new IllegalArgumentException("Invalid type: " + type);
        };
    }

    @GetMapping("/protected")
    public String protectedEndpoint() {
        return "This is protected data!";
    }
}
