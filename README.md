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
