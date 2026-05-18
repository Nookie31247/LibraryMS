package com.tjouen.librarybackend.controller;

import com.tjouen.librarybackend.dto.BookRequestDTO;
import com.tjouen.librarybackend.dto.BookResponseDTO;
import com.tjouen.librarybackend.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<List<BookResponseDTO>> getBooks() {
        List<BookResponseDTO> bookResponseDTOList = bookService.getAllBooks();
        if (bookResponseDTOList.isEmpty())
            return ResponseEntity.noContent().build();
        else
            return ResponseEntity.ok().body(bookResponseDTOList);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<BookResponseDTO> getBookById(@PathVariable Long id) {
        BookResponseDTO bookResponseDTO = bookService.getBookById(id);
        if (bookResponseDTO == null)
            return ResponseEntity.notFound().build();
        else
            return ResponseEntity.ok().body(bookService.getBookById(id));
    }

    @PostMapping("/books")
    public ResponseEntity<Long> registerBook(@RequestBody BookRequestDTO bookRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(bookService.registerBook(bookRequestDTO));
    }

    @DeleteMapping("/books/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        if(bookService.deleteBookById(id))
            return ResponseEntity.noContent().build();
        else
            return ResponseEntity.notFound().build();
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<Void> updateBook(@PathVariable Long id, @RequestBody BookRequestDTO bookRequestDTO) {
        if (bookService.updateBook(id, bookRequestDTO))
            return ResponseEntity.ok().build();
        else
            return ResponseEntity.notFound().build();
    }
}
