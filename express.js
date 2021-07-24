/*
express helps us in request to object
match request
deciding
lib------>our
framework------->others
*/

//npm init -y
//npm i express
// in older versions npm i express --save was used to save but now no need

const express = require('express');
const app = express();
console.dir(app)
//so
app.use(() =>{
    console.log('hi')       //nothing there but terminal has hi after hello
})

app.listen(3000, () => {        //port - 3000
    console.log('hello')        //print but cursor change for execution we type on google (localhost:3000) rest value no work------->
})

app.use(( req , res) =>{
    console.log('hi')       //nothing there but terminal has hi after hello
    res.send('{color: red}')        //change their in postman and work in site
})

///////////////////////////////////////////////routing//////////////////////////////////////////

// /cats => 'meow'
// /dogs => 'woof'
// '/' =>   'afsd'

app.get('/cats',(req,res)=>{
    console.log('cat request')  // when type localhost:3000 nothing happen 
    //but if we type localhost:3000/cats   we get 'cat request' on terminal
})

app.get('/dogs',(req,res)=>{
    console.log('dog request')  
})

app.get('/',(req,res)=>{
    console.log('homepage request')
    //if we type  localhost:3000/  or localhost:3000  same output
})

//in postman if we use post instead of get it says cant post because of get so use

app.post('/cats',(req,res)=>{
    console.log('cat post request/diff from get')      //is printed there at post in postman
})

app.get('*' , (req,res) =>{
    //should be at last and print for all remain
    //but if placed at top than do it for all including the defined ones
    console.log("i dont know the path")
})

// if multiples than use 
app.get('/r/:subreddit/:postId',(req,res)=>{
    console.log('subreddit is here')        //write anything after (/r/.....) than it will print acc same line
    const {subreddit,postId} = (req.params);//prin the required format {subreddit:.....} after /r/..... 
    res.send(`hi with postId = ${postId} of ${subreddit} subreddit`)
})

/////////////////////////////////////////////querystring//////////////////////////////////////////

//after ?  eg. 

app.post('/cats',(req,res)=>{
    console.log("res.query")        // prints  {}   if simple
    //but if in postman write key and values it print them
})

//nodemon       ----->  helps in restarting server(no more enters after npm express.js)    ----->  like npm and used in file name
//npm i -g nodemon
//nodemon index.js  ----->   give config

///////////////////////////////////////////////templating///////////////////////////////////////
//it helps us in creatimg templates and work on them for multiple
//like if we do   hi i am _________ and doing ________
//kind of fill in tthe blanks
//tool ----->embedded java script EJS  or  pug   or nunjucks
