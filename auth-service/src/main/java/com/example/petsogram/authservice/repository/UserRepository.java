package com.example.petsogram.authservice.repository;

import com.example.petsogram.authservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username); // Поиск пользователя по логину
    boolean existsByUsername(String username);
}
