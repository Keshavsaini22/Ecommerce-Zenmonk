const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')

const UsersModel = require('./models/Users')
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser')


const app = express()

app.use(express.text())
app.use(express.urlencoded({extended: true})); 
app.use(cors({
    origin: ["http://localhost:3000"],
    methods:  ['POST','GET'],
    credentials: true
}));
app.use(cookieParser());


app.use(express.json()); 

const url="mongodb+srv://keshavsainikesu:Imhater369@mycluster.qertmlr.mongodb.net/?retryWrites=true&w=majority"
try {
    mongoose.connect(url);
    console.log("connected to mongodb")
}
catch (error) {
    console.error(error);
}


const authenticateJWT =(req,res,nect)=>{
    const token = req.cookies.token;
    
    if(!token){
        return res.sendStatus(401);
        jwt.verify(token, 'jwy-key',(err,user)=>{
            if(err){
                res.sendStatus(403);
            }
            req.user=user;
            next();
        });
    }
}


app.post('/usersinfo', async (req, res) => {
    const { firstname, lastname, email, password ,role } = req.body;
    console.log(req.body.role)
    
    try {
        const existingUser = await UsersModel.findOne({ email })

        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json("Email already exist");
        }
        const newuser = await UsersModel.create({ firstname,lastname, email, password,role })
        console.log('newuser', newuser)
        res.status(200).json(newuser)
    }


    catch (err) { res.status(500).json(err) }
  
})

app.post('/logininfo', async (req, res) => {
    const { email, password } = req.body;
    console.log("req.body", req.body);
    await UsersModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    console.log(user)
                    const firstname = user.firstname;
                    const token = jwt.sign({ID: user._id}, 'jwt-key'); 
                    res.cookie('token' , token , {httpOnly: true});

                    res.json("success")
                }
                else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("no record existed")
            }
        })
})

app.post('/logout' , (req,res)=>{
    res.clearCookie('token');
    res.json({message: 'logout successful'});
})

app.get('/home',authenticateJWT, async(req,res)=>{
    try {
        const userid =req.user.id;
        const user = await UsersModel.findById(userid);
        if(!user){
            return res.status(404).json({error:'user not found'});
        }
        res.json(user)
    } catch (error){
        console.error(error);
        res.status(500).json({error:'internal server'})
    }
})



app.listen(5000, () => {
    console.log('server at port 5000')
})