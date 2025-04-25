package com.app.backend.service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.app.backend.model.User;
import com.app.backend.repositories.UserRepository;
import com.app.backend.util.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    public String login(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return jwtUtil.generateToken(user.get().getId());
        }
        return null;
    }

    public User getUserFromToken(String token) {
        Long userId = jwtUtil.validateTokenAndGetUserId(token);
        return userId == null ? null : userRepository.findById(userId).orElse(null);
    }
}
