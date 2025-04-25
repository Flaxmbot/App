package com.app.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.backend.model.User;
import com.app.backend.service.AuthService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private AuthService authService;

    // Get user information based on the JWT token
    @GetMapping("/me")
    public ResponseEntity<?> getUser(@RequestHeader("Authorization") String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Missing or invalid token");
        }

        String token = authHeader.substring(7);  // Extract the token
        User user = authService.getUserFromToken(token);  // Retrieve user from token
        if (user == null) {
            return ResponseEntity.status(401).body("Invalid token");
        }

        return ResponseEntity.ok(user);  // Return user info if token is valid
    }
}
