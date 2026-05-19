# 시연 영상
로컬 시연: https://drive.google.com/file/d/1iaW1kPsjBTzsECAwE_Gs7x4XW3U1CtX9/view?usp=sharing
AWS 설정 및 시연 1: https://drive.google.com/file/d/1xzNTIrXp5D7Bk5Bjep24jWFGFS_qhuu1/view?usp=sharing
AWS 설정 및 시연 2: https://drive.google.com/file/d/1wznZSZct9Nmae-d3xTVdohcOJoiw9D7f/view?usp=sharing

실제 접속해보기: https://nookie-server.store/

# 도서 관리 프로그램
도서를 손쉽게 관리할 수 있는 프로그램입니다.

## 기술 스택
- Frontend: Next.js, Tailwind CSS
- Backend: Spring Boot, JPA
- Database: MySQL, H2(테스트용)

## 실행 방법(로컬)
1. library-backend 경로에 있는 Spring Application 실행 - 프로파일 test로 설정 (http://localhost:8080)
2. library-frontend에서 npm run dev 실행 (http://localhost:3000)


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


## AWS 설정
- 데이터베이스: MySQL 8.4.8 (AWS RDS 사용)
- Elastic Beanstalk(프론트엔드, 백엔드) 사용해서 고가용성, 오토 스케일링 구현 
- CodeDeploy&CodePipeline 사용해서 CI/CD 구현(buildspec.yaml 참고)
- Cafe 24 도매인 -> 네임서버 Route53에서 AWS로 변경 후 사용, HTTPS 인증서 발급 완료