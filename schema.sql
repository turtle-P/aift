<<<<<<< HEAD
-- Neon PostgreSQL용 테이블 생성 쿼리
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
=======
-- Neon PostgreSQL용 테이블 생성 쿼리
CREATE TABLE IF NOT EXISTS registrations (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
>>>>>>> 54ec56d (Initial commit: ETHER WALKER Project Setup)
