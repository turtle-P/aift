# 프로젝트 컨텍스트: 가상 게임 사전예약 페이지 (망향 | Re:verie)

## 1. 개요
- **목적**: GitHub, Render, Neon을 활용한 5페이지 구성의 게임 사전예약 랜딩 페이지 제작 예제.
- **상태**: UI 디자인 고도화 및 5인 캐릭터 슬라이더 구현 완료. 백엔드 API 및 DB 연동 준비 완료.

## 2. 기술 스택
- **Frontend**: Vanilla HTML5, CSS3, JS (Single Page Scroll Layout).
- **Backend**: Node.js (Express).
- **Database**: Neon (PostgreSQL).
- **Deployment**: GitHub (Repo), Render (Web Service).

## 3. 주요 페이지 및 디자인 특징
1. **Home**: "망향 | Re:verie" 메인 타이틀과 감성적인 캐치프라이즈가 적용된 히어로 섹션.
2. **Pre-reg**: 화이트 톤의 클린한 등록 폼. 사전예약 시 '꿈의 파편' 아바타 지급 강조.
3. **Characters (The Dreamers)**: 
   - **5인 슬라이더 시스템**: 엘라, 카이, 루나, 지크, 아리아 5인의 캐릭터 카드 구성 완료.
   - **기술적 해결**: `flex: 0 0 100%` 설정을 통해 슬라이더 레이아웃 버그 수정 완료.
4. **World**: 세계관 'Re:verie' 소개 및 컨셉 아트 섹션.
5. **Footer**: 지원 센터, 약관, 저작권 고지 및 다국어 선택(KOR/ENG/JPN) 기능.

## 4. 파일 구조 (`Desktop\game - 복사본`)
- `server.js`: Express 서버 및 `/api/register` 엔드포인트.
- `public/index.html`: 5인 캐릭터 슬라이더가 포함된 최종 UI.
- `package.json`: `express`, `pg`, `cors`, `dotenv` 등 의존성 정의.
- `schema.sql`: Neon DB용 `registrations` 테이블 생성 쿼리.
- `.env`: `DATABASE_URL` 및 `PORT` 설정.

## 5. 다음 단계 (To-Do)
- [x] **캐릭터 확장**: 3인에서 5인으로 캐릭터 카드 추가 완료.
- [ ] **로컬 테스트**: `npm start`를 통해 로컬 환경에서 정상 작동 여부 확인.
- [ ] **GitHub 푸시**: 변경 사항을 원격 리포지토리에 반영.
- [ ] **최종 배포 확인**: Render URL에서 실제 작동 확인.

## 6. 진행 기록 (Update: 2026-04-16)
- 사용자의 요청에 따라 `CONTEXT.md` 기반으로 프로젝트 상태 복원 완료.
- 프로젝트 명칭을 '에테르 워커'에서 '망향 | Re:verie'로 최종 통일.
- 누락되었던 지크, 아리아 캐릭터 정보를 `index.html`에 추가하여 5인 체제 완성.
