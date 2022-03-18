const express = require("express"); // express 모듈을 가져와서 사용한다
const app = express(); // 모듈을 함수로 지정해서 app 에 담아둔다.
var multer = require ('multer'); // multer 모듈을 가져와서 사용한다.
var upload = multer({ dest : 'uploads/'}); // 입력한 파일이 uploads/ 폴더 내에 저장된다.

app.set('view engine','ejs'); // ejs 모듈 사용
app.set('views',__dirname+'/views'); // __dirname(현재 js 가 있는 폴더 경로) + /views (폴더 명) 으로 기본 경로 셋팅
app.engine('html',require('ejs').renderFile); // html 파일을 읽어오겠다고 선언 / ejs 모듈 사용해서 파일을 불러온다.

app.get('/upload',function(req,res) // localhost:3000/upload 로 접속 하면 화면을 보여주도록 연결
    {res.render('file.html');
});

app.post('/upload', upload.none('input_txt_area'),function(req, res){
    console.log(req.file);
    res.send('uploaded!' + req.file);
});

var storage = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, 'uploads')
    },
    filename: function (req, file, cd) {
        cd(null, req.body)
    }
});
var upload = multer({ storage: storage });

app.listen(3000, ()=> {
    console.log('Example app listening on port',3000);
    console.log(__dirname,__filename);
})