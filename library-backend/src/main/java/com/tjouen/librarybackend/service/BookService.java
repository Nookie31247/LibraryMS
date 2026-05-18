package com.tjouen.librarybackend.service;

import com.tjouen.librarybackend.dto.BookRequestDTO;
import com.tjouen.librarybackend.dto.BookResponseDTO;
import com.tjouen.librarybackend.entity.Book;
import com.tjouen.librarybackend.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
    private final BookRepository repository;

    /// 전체 도서를 반환합니다.
    public List<BookResponseDTO> getAllBooks() {
        List<Book> books = repository.findAll();
        List<BookResponseDTO> bookResponseDTOList = new ArrayList<>();
        books.forEach(book -> {
            bookResponseDTOList.add(
                    BookResponseDTO.builder()
                        .id(book.getId())
                        .title(book.getTitle())
                        .author(book.getAuthor())
                        .price(book.getPrice())
                        .available(book.getAvailable())
                        .build()
            );
        });
        return bookResponseDTOList;
    }

    /// id를 기반으로 도서를 찾아서 반환합니다.
    public BookResponseDTO getBookById(Long id) {
        Book book = repository.findById(id).orElse(null);
        if (book == null) {
            return null;
        }
        return BookResponseDTO.builder()
                .id(book.getId())
                .title(book.getTitle())
                .author(book.getAuthor())
                .price(book.getPrice())
                .available(book.getAvailable())
                .build();
    }

    /// 새로운 책을 추가합니다.
    public Long registerBook(BookRequestDTO bookRequestDTO) {
        Book book = new Book(
                bookRequestDTO.getTitle(),
                bookRequestDTO.getAuthor(),
                bookRequestDTO.getPrice(),
                bookRequestDTO.getAvailable()
        );
        return repository.save(book).getId();
    }

    /// 책을 삭제합니다.
    public boolean deleteBookById(Long id) {
        if(!repository.existsById(id))
            return false;
        repository.deleteById(id);
        return true;
    }

    /// 책 정보를 수정합니다.
    public boolean updateBook(Long id, BookRequestDTO bookRequestDTO) {
        if(!repository.existsById(id)) {
            return false;
        }

        Book book = new Book(
                id,
                bookRequestDTO.getTitle(),
                bookRequestDTO.getAuthor(),
                bookRequestDTO.getPrice(),
                bookRequestDTO.getAvailable()
        );
        repository.save(book);
        return true;
    }
}
