const app = require('./app');

const db = require('./config/db');

const usermodel  = require('./user.model')

const cors = require('cors');

app.use(cors());
const PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.get("/getter",(req,res)=>{
    console.log("woriking");
    usermodel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
            console.log(err)
        })
});



app.listen(PORT,()=>{
    console.log(`server is listening on port http://localhost:${PORT}`);
})