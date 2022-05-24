const express=require("express");
const Joi=require("joi");
const app=express();
app.use(express.json());
app.use(express.static("public"));
courses=[
    { id:1,name:'course1'},
    { id:2,name:'course2'},
    { id:3,name:'course3'},
];

app.get('/courses',(req,res)=>{
   res.send(courses);
});
app.get('/course/:id',(req,res)=>{
    res.send(`course id is ${req.params.id}`);
});

app.listen(3000,function(req,res){
    console.log("you are in 3000....");
});

app.post('/api/courses',function(req,res){
    const schema={
        name:Joi.string().min(3).required()
    };
    const result=Joi.validate(req.body,schema);
    console.log(result);
    if(!req.body.name||req.body.name.length<3){
        res.status(400).send("name should be greater than 3 charecters");
        return;
    };
   const couress={
       id:courses.length+1,
       name:req.body.name
   };
   courses.push(couress);
   res.send(couress);
});