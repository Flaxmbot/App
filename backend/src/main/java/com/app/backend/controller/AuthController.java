package com.app.backend.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.backend.model.User;
import com.app.backend.repositories.UserRepository;
import com.app.backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthService authService;

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    // Login a user and generate a JWT token
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        // Log the incoming credentials for debugging (be cautious with sensitive data in production)
        System.out.println("Attempting login for email: " + email);

        String token = authService.login(email, password);

        if (token != null) {
            return ResponseEntity.ok(Map.of("message", "Login successful", "token", token));
        }
        return ResponseEntity.status(401).body("Invalid email or password");
    }

    // Get user information based on JWT token
    @GetMapping("/me")
    public ResponseEntity<?> getUser(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Missing or invalid token");
        }

        String token = authHeader.substring(7);
        User user = authService.getUserFromToken(token);
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid token");
        }

        return ResponseEntity.ok(user);
    }

    // Logout a user
    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader(value = "Authorization", required = false) String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(400).body("No token provided");
        }

        String token = authHeader.substring(7);

        // Optional: You could store this token in a blacklist (DB or cache) if you want true invalidation
        // Logging or session tracking logic could go here
        System.out.println("User token logged out: " + token);

        // Client should handle removing token from storage
        return ResponseEntity.ok("Logout successful");
    }

}
