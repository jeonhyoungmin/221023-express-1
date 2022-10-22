// 0. 새 프로젝트 만들기. 에디터 프로젝트 열기
// 1. command : npm init - package.json 생성
// 2. command : npm install express - express 프로젝트 로컬 설치
// 3. index.js 파일 생성
// 4. index.js 파일 내부 코드 작성

const express = require('express');
const app = express();
app.get('/', function(req, res) {
  res.send('K-Digital Training!');
})
app.listen(4321, function() {
  console.log('Server listening on port 4321!');
})

// 5. command : node index.js
// 6. 브라우저 소프트웨어 실행
// 7. URL 입력란 : http://localhost:4321/ 입력