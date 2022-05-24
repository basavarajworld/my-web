const express=require("express");
const bodyparser=require("body-parser");
const { response } = require("express");
const { json } = require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extends:true}));
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/index.html");

// });

app.post('/',(req,res)=>{
  
    const url="https://api.openweathermap.org/data/2.5/weather?q=bengaluru&appid=fe4025fe9659743fcc58e1c31ac7edd3"

    https.get(url,function(response){
        console.log(response.statuscode);
    });
    response.on("data",function(data){
        const wheatherdata=JSON.parse(data);
        response.send(wheatherdata);
    })
})

app.listen(3000,function(){
    console.log("running on 3000...");
});

// fe4025fe9659743fcc58e1c31ac7edd3

const express=require("express");
const { date } = require("joi");
const { captureRejections } = require("form-data");
const app=express();
app.use(express.static('public'));

const course=[
  {id:1,name:'course1'},
  {id:2,name:'course2'},
];
app.get('/course',(req,res)=>{
  res.sendFile(__dirname+'/index.html');

})

app.get('/course/:id',(req,res)=>{
  const cor=course.find(c=>c.id===parseInt(req.params.id));
  if(!cor){
    res.status(400).send("i think you are lost");
  }
  else{
    res.send(course);
  }
})
app.post('/course',(req,res)=>{
  const cors={
    id:course.length+1,
    name:req.body.name
  };
  course.push(cors);
  res.send(cors);

});

app.listen(3000,function(){
    console.log("running on 3000...");
});