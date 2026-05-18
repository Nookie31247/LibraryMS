package com.tjouen.librarybackend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Entity
@Getter
@NoArgsConstructor
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;          // 자동 생성 PK

    @Column(nullable = false)
    private String title;      // 도서 제목 (NOT NULL)

    @Column(nullable = false)
    private String author;     // 저자명 (NOT NULL)

    private Integer price;     // 가격

    private Boolean available = true; // 대출 가능 여부 (default: true)

    public Book(String title, String author, Integer price, Boolean available) {
        this.title = title;
        this.price = price;
        this.author = author;
        this.available = Objects.requireNonNullElse(available, true);
    }

    public Book(Long id, String title, String author, Integer price, Boolean available) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.author = author;
        this.available = Objects.requireNonNullElse(available, true);
    }
}