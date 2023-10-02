const http=require('http');
const fs=require('fs');

const home=fs.readFileSync('home.html');
const contact=fs.readFileSync('contact.html');
const service=fs.readFileSync('service.html');
const login=fs.readFileSync('login.html');
const server=http.createServer((req,res)=>{

        res.setHeader('Content-Type','text/html');
        res.statusCode=200;
        
        if(req.url==='/'){
                res.write(home)
        }

        else if (req.url==='/contact'){
                res.write(contact)
        }

        else if (req.url==='/service'){
                res.write(service)
        }

        else if (req.url==='/login'){
                res.write(login)
        }

        if((req.url==='/login')&&(req.method==='POST')){

                const body=[];
                req.on('data',(data)=>{

                        body.push(data)
                })

                req.on('end',()=>{
                       
                     const reqbody=Buffer.concat(body).toString()
                     console.log(reqbody) 
                     fs.writeFileSync('data.txt',reqbody)  
                })
        }

        res.end();
})

server.listen(3000)