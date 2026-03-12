const express = require('express');
const { Pool } = require('pg');
require('dotenv').config(); // 로컬 테스트용 (Render에서는 환경변수를 직접 읽음)

const app = express();
const port = process.env.PORT || 3000;

// 1. Neon DB 연결 설정
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Neon 접속 시 SSL 설정 필수
  },
});

app.get('/', async (req, res) => {
  try {
    // 2. 'test' 테이블에서 'name' 컬럼 하나 가져오기
    // LIMIT 1을 써서 레코드 하나만 가져옵니다.
    const result = await pool.query('SELECT name FROM test LIMIT 1');

    if (result.rows.length > 0) {
      const userName = result.rows[0].name;
      res.send(`<h1>HELLO ${userName}</h1>`);
    } else {
      res.send('<h1>데이터가 없습니다.</h1>');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('DB 연결 오류 발생');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
