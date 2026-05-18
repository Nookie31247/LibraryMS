# 시연 영상
https://drive.google.com/file/d/1iaW1kPsjBTzsECAwE_Gs7x4XW3U1CtX9/view?usp=sharing

# 도서 관리 프로그램
도서를 손쉽게 관리할 수 있는 프로그램입니다.

## 기술 스택
- Frontend: Next.js, Tailwind CSS
- Backend: Spring Boot, JPA
- Database: H2

## 실행 방법
1. library-backend 경로에 있는 Spring Application 실행 (http://localhost:8080)
2. library-frontend에서 npm run dev 실행 (http://localhost:3000)

**로컬에서만 동작합니다.**

## 주요 기능

- 전체 책 목록 조회
- 키워드로 책 검색
- 책 상세 조회
- 책 등록
- 책 수정
- 책 삭제

## API 명세

| Method | URL | 설명 |
|--------|-----|------|
| GET | /api/books | 전체 목록 조회 |
| GET | /api/books/{id} | 단건 조회 |
| GET | /api/books?q={keyword} | 키워드 검색 |
| POST | /api/books | 책 등록 |
| PUT | /api/books/{id} | 책 수정 |
| DELETE | /api/books/{id} | 책 삭제 |