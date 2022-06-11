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
> 
> 특정 형식의 파일로부터 html페이지를 생성하는 템플릿 엔진

설치 
> npm istall ejs

express 모듈
> html 모듈보다 많은 기능을 내장하고 있음

설치
> npm istall express

22.03.17
>node --inspect : 작성하면 서버 껐다켰다 안해도 됨
>
>git reset HEAD file명 : git add 잘못하면 쓰도록 함
>
>.gitignore 안에 add 하고싶지 않은 파일 이름 쓰면 add 안됨


22.03.18

multer 
> 파일 업로드를 위해 multipart/form-data 를 다루기 위한 미들웨어
> 
> multipart가 아닌 폼에서는 동작하지 않음

설치 
> npm istall multer   

22.03.22 

> js 공부

22.03.23~03.25

> js / swiper 공부

22.03.28
>IONIC 모듈 설치

알수없는 오류로 계속된 설치 실패
계속된 에러로 결국 경로따라 가서 모듈 전체를 삭제하고 재설치를 진행했음
버전 확인을 했지만 ERR! 발생

>npm ls -g --depth=0

설치된 전역모듈 확인

'--depth=0' 옵션을 쓰지 않으면 의존성트리 전체가 출력된다고 한다.

원하는 모듈의 내용과 버전이 확인

**CategoryInfo          : 보안 오류: (:) [], PSSecurityException**

1. 관리자권한으로 PowerShell 실행
2. ExecutionPolicy 를 검색하여 Restricted 가 떠있는지 확인
3. Unrestricted 혹은 RemoteSigned 사용

**Unrestricted 서명되지 않은 스크립트를 실행할 수 있음**

**RemoteSigned 악의적인 스크립트를 실행할 위험이 있음**


스크립트를 실행 가능,

이미 실행한 스크립트와 로컬 컴퓨터에 작성한 스크립트에는 디지털 서명이 필요 없음

22.04.04
react 로 선택해서 project 를 만들었음.

cordova를 설치하려고 보니 지원하지않는다고 써있음

[ERROR] Ionic doesn't support using Cordova with @ionic/react projects.





2022.06.11
회사일로 react 보다 react native를 먼저 배우게 되었다.
책에 있는 내용을 바탕으로 공부해본다.
**window 기준**

[1] 설치
1 - node.js 공식 홈페이지 https://nodejs.org/ko - LTS 다운로드
    설치 후 cmd를 열어 node -v 를 입력해서 버전이 뜨는지 확인한다
    node.js를 설치하면 npm도 설치되기때문에 npm -v 를 입력하여 버전이 뜨는지 확인한다.
    
2 - yarn 을 깔아준다 = yarn ( npm과 같은 패키지 관리도구로 npm보다 패키지를 더 빨리 설치함 : 페이스북에서 만든 도구 )
    npm install --global yarn
    
3 - JDK(java Development Kit) 설치 = 윈도우 : Chocolatey 패키지 매니저 사용 권장 
    만약 Chocolatey가 설치되어 있지 않다면 **Powershell**을 **관리자 권한**으로 실행 후 아래 명령어 입력
    **Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('http://internal/odata/repo/ChocolateyInstall.ps1'))**
    Chocolatey를 설치한 뒤 JDK 설치
    choco install -y openjdk8
    설치 후 javac -version 을 입력해 버전이 뜨는지 확인한다.
    
4 - 
    
    





