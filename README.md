# Node.js study

22.03.09

var http = require('http');
> require = node.js 기능 내 집합소에서 "http 라이브러리"를 가져와라

var fs = require('fs');
> node.js 기능 내 집합소에서 file system에 접근 및 제어 할 수 있도록 도와주는 모듈(기능의 집합체)을 가져와라

var app = http.createServer(function(request,response){
> http 내에 서비스 구축 기능 가져와서 '()'안의 내용을 실행한다
> request 에서 받고 response 에서 반환 한다.


22.03.14
```
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;

rl.on('line', (input) => {
    console.log(`Recived : ${input}`);
    count += 1;
    if (count === 3) {
        rl.close();
    }
});

---

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('what do you think of node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
});
```
22.03.16

EJS 모듈
> Embedded JavaScript Template
> 특정 형식의 파일로부터 html페이지를 생성하는 템플릿 엔진

설치 
> npm istall ejs

express 모듈
> html 모듈보다 많은 기능을 내장하고 있음

설치
> npm istall express
