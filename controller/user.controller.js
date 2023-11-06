

const db = require('../config/db')

exports.register = async(req,res,next)=>{
    //console.log(res.body);
    var imgurl = req.body.imgurl;

    var myobj = { imgurl: imgurl };
    console.log("1");
    dsknf(myobj);
    console.log("2");

    res.json({requestBody: req.body});
    console.log("all done");
    
}

async function dsknf(myobj){
    await db.collection("images").insertOne(myobj, function(err, res) {  
        console.log(res);
        if (err) throw err;
        console.log("1 record inserted");  
        });
}