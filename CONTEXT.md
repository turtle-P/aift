# 프로젝트 컨텍스트: 가상 게임 사전예약 페이지 (에테르 워커)

## 1. 개요
- **목적**: GitHub, Render, Neon을 활용한 5페이지 구성의 게임 사전예약 랜딩 페이지 제작 예제.
- **상태**: 기본 기능(백엔드 API, 프론트엔드 UI, DB 스키마) 구현 완료.

## 2. 기술 스택
- **Frontend**: Vanilla HTML5, CSS3, JS (Single Page Scroll Layout).
- **Backend**: Node.js (Express).
- **Database**: Neon (PostgreSQL).
- **Deployment**: GitHub (Repo), Render (Web Service).

## 3. 페이지 구성 (5 Sections)
1. **Home**: 메인 포스터(Placeholder) 및 "에테르 워커" 캐치프라이즈.
2. **Pre-reg**: 이메일 입력 폼 및 사전예약 신청 버튼 (API 연동).
3. **Characters**: 캐릭터 카드 2종 (Placeholder 이미지 포함).
4. **World**: 세계관 소개 및 컨셉 아트 (Placeholder 이미지 포함).
5. **Footer**: 약관, 개인정보 방침, 문의하기, 언어 선택, 저작권 고지.

## 4. 파일 구조 (`Desktop\game`)
- `server.js`: Express 서버 및 API 엔드포인트 (`/api/register`).
- `public/index.html`: 메인 UI 및 클라이언트 스크립트.
- `package.json`: `express`, `pg`, `cors`, `dotenv` 등 의존성 정의.
- `schema.sql`: Neon DB용 `registrations` 테이블 생성 쿼리.
- `.env.example`: 환경 변수 설정 가이드.

## 5. 다음 단계 (To-Do)
- [ ] GitHub 리포지토리 생성 및 푸시.
- [ ] Neon DB 프로젝트 생성 및 `schema.sql` 실행.
- [ ] Render에 웹 서비스 배포 및 `DATABASE_URL` 환경 변수 설정.
- [ ] (추후) Placeholder 이미지("test images")를 실제 리소스로 교체.
