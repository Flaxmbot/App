package com.app.backend.util;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256); // Generate a secure key

    // Generate JWT token
    public String generateToken(Long userId) {
        return Jwts.builder()
                .claim("userId", userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 hour expiration
                .signWith(SECRET_KEY) // Use the generated secure key
                .compact();
    }

    // Validate token and get userId
    public Long validateTokenAndGetUserId(String token) {
        try {
            Claims claims = Jwts.parserBuilder() // Use parserBuilder (recommended for 0.12.0+)
                    .setSigningKey(SECRET_KEY) // Use the same secure key for validation
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return claims.get("userId", Long.class);
        } catch (io.jsonwebtoken.ExpiredJwtException | io.jsonwebtoken.MalformedJwtException | io.jsonwebtoken.security.SignatureException e) {
            return null; // Return null if token is invalid or expired
        }
    }
}
