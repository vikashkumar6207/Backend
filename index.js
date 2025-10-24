const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
        const log = `${Date.now()}: ${req.url} New Req Received\n`;

        const myUrl = url.parse(req.url, true);
        console.log(myUrl);
        

        fs.appendFile("log.txt", log, (err, data)=>{


            // res.end(`Hello from server...`);
            // res.end(log);

            switch ( myUrl.pathname ) {
                case "/":
                    res.end("Home Page");
                    break;
                case "/about":
                    const username = myUrl.query.myname;
                    res.end(`hi my name id ${username}. what can i do for you..`);
                    break;
                case "/search":
                    const search = myUrl.query.search_query;
                    res.end("Here are your results for " + search)
                break;
                default:
                    res.end("404 Not Found");
            }
        })
        // fs.unlinkSync("log.html");
        console.log("New request recive : ");
        
})

myServer.listen(8000, ()=>{
    console.log("Server started..");
    
})