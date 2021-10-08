const http = require("http");
var fs = require("fs");

const hostname = "localhost";

const port = 8000;
var solan = 0;

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        //res.end("{ 'message' : 'Hello' , 'Num.' : " + solan + "}");
        console.log("--- request !!!", solan++, req.url);
        switch (req.url) {
            case "/home":
                res.writeHead(200);
                res.end("<h1>This is Home page</h1>");
                
                break;
            case "/about":
                res.writeHead(200);
                res.end("<h1>This is About page</h1>");
                break;
            case "/login":
                res.writeHead(200);
                res.end("<h1>This is Login page</h1>");
                break;
            case "/logout":
                res.writeHead(200);
                res.end("<h1>This is Logout page</h1>");
                break;
            case "/contact":
                res.writeHead(200);
                res.end("<h1>This is Contact page</h1>");
                break;
            case "/order":
                res.writeHead(200);
                res.end("<h1>This is Order page</h1>");
                break;
            default:
                res.writeHead(200);
                res.end("<h1>.....Error!!!</h1>");
                break;
        }
        
    }
)
function XuLyThongTinServerDuocBat() {
    console.log("Listen !!!" , hostname , port );
}

server.listen( port, hostname, XuLyThongTinServerDuocBat)
   

