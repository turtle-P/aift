<<<<<<< HEAD
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
=======
# 프로젝트 컨텍스트: 가상 게임 사전예약 페이지 (에테르 워커)

## 1. 개요
- **목적**: GitHub, Render, Neon을 활용한 5페이지 구성의 게임 사전예약 랜딩 페이지 제작 예제.
- **상태**: UI 디자인 고도화 및 캐릭터 슬라이더 기능 구현 완료. (백엔드 API 및 DB 스키마 준비됨)

## 2. 기술 스택
- **Frontend**: Vanilla HTML5, CSS3, JS (Single Page Scroll Layout).
- **Backend**: Node.js (Express).
- **Database**: Neon (PostgreSQL) - 연동 대기 중.
- **Deployment**: GitHub (Repo), Render (Web Service) - 예정.

## 3. 주요 페이지 및 디자인 특징
1. **Home**: 다크 테마와 탄소 섬유 패턴이 적용된 히어로 섹션. "ETHER WALKER" 캐치프라이즈.
2. **Pre-reg**: 화이트 톤의 클린한 등록 폼. 'TOP SECRET' 태그와 각진 버튼 디자인.
3. **Characters (The Chosen Walkers)**: 
   - **5인 슬라이더 시스템**: 엘라, 카이, 루나, 지크, 아리아 5인의 캐릭터 카드 구성.
   - **기술적 해결**: 슬라이더 이동 시 미세하게 밀리는 버그를 `flex: 0 0 100%`, `gap: 0`, `box-sizing: border-box` 설정을 통해 완벽히 수정.
   - **게임 UI 스타일**: 화살표 버튼에 `clip-path`를 적용하여 날카롭고 세련된 느낌 강조.
4. **World**: 세계관 '아르카디아' 소개 및 컨셉 아트 섹션.
5. **Footer**: 지원 센터, 약관, 저작권 고지 및 언어 선택 기능.

## 4. 파일 구조 (`Desktop\game`)
- `server.js`: Express 서버 및 `/api/register` 엔드포인트.
- `public/index.html`: 고도화된 게임 UI 스타일 및 슬라이더 로직 포함.
- `package.json`: `express`, `pg`, `cors`, `dotenv` 등 의존성 정의.
- `schema.sql`: Neon DB용 `registrations` 테이블 생성 쿼리.
- `.env.example`: 환경 변수 설정 가이드.

## 5. 다음 단계 (To-Do)
- [ ] **GitHub 리포지토리 연동**: 로컬 폴더를 GitHub 리포지토리에 푸시.
- [ ] **Neon DB 연동**: `schema.sql`을 실행하여 원격 DB 테이블 생성.
- [ ] **Render 배포**: 웹 서비스를 생성하고 `DATABASE_URL` 환경 변수 설정.
- [ ] **최종 검수**: 배포된 URL에서 사전예약 기능 및 슬라이더 동작 확인.

## 6. 진행 기록 (Update: 2026-04-09)
- 캐릭터 소개 섹션을 2명에서 5명으로 확장.
- 사이트 전체 디자인을 하얀색/하늘색 바탕의 날카롭고 세련된 게임 UI로 전면 개편.
- 슬라이더 이동 시 좌우 간격이 어긋나던 버그를 정밀 레이아웃 계산을 통해 최종 해결.
>>>>>>> 54ec56d (Initial commit: ETHER WALKER Project Setup)
