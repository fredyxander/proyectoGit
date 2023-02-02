import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


app.get("/",(req,res)=>{
    res.sendFile("index.html");
});

app.get("/user",(req,res)=>{
    res.json({name:"fredy", email:"fredy@gmail.com"})
});