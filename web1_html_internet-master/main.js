var http = require('http'); // require = node.js 기능 내 집합소에서 특정 기능을 가져와라
var fs = require('fs'); // node.js 에서 file system에 접근 및 제어 할 수 있도록 도와주는 모듈(기능의 집합체)
var app = http.createServer(function(request,response){ // request 에서 받고 response 에서 반환 한다.
  var url = request.url; // http://localhost:3000/   "/"를 포함해서 뒤에 오는 내용을 뜻함
  if(request.url == '/'){ // "/" 뒤에 내용없이 '/'만 가지고 있다면
    url = '/index.html'; // url 에 index.html을 넣어라
  } // 그게 아니라면 '/'뒤에 작성된 링크로 가라

  // url요청이 온게 fs에 있는지 먼저 확인을 해라
  // 그 코드가 참이면 정상적으로 실행을 하고
  // 거짓이면 404 에러를 띄워라 라고 설정 할 수 있다.

  if(request.url == '/favicon.ico'){
    response.writeHead(500); // 내가 불러온 페이지와 맞지않을때 뜨는 에러 코드에 따라 기본적으로 브라우저가 처리를 해준다.
    response.end(); // 전달 할 내용이 없다는 뜻이다.
    return; // 여기서 끝내고 처음으로 돌아가라.
  }

  response.writeHead(200); // 정상 작동 했을 때 뜨는 http status code
  console.log(fs.readFileSync(__dirname + url))
  response.end( // 유저에게 전달하다.
    fs.readFileSync(  // '()'안에 있는 데이터를 참고하여 file system 권한으로 데이터를 찾는다.
      __dirname + url // 해당 파일이 저장되어있는 폴더의 경로 + 사용자가 넘겨준 데이터 ( 위 if 문 참고 )
      )
    );

});

app.listen(3000); //포트 ( http = 80 / https = 443 / ssh = 22 )