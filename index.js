const app = require('./app');

const db = require('./config/db');

const usermodel  = require('./user.model')

const port = process.env.port || 3000;


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

app.post("/",(req,res,next)=>{
    //console.log(res.body);
    var imgurl = req.body.imgurl;

    var myobj = { imgurl: imgurl };
    console.log("1");
    db.collection("images").insertOne(myobj, function(err, res) {  
        console.log(res);
        if (err) throw err;
        console.log("1 record inserted");  
        });
    console.log("2");

    res.json({requestBody: req.body});
    console.log("all done");
}
)


app.listen(port,()=>{
    console.log(`server is listening on port http://localhost:${port}`);
})