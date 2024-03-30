const db = require('../config/db')

exports.register = async(req,res,next)=>{
    
    var imgurl = req.query.imgurl;
    console.log(req.query.imgurl);


    var myobj = { imgurl: imgurl };
    
    db.collection("images").insertOne(myobj, function(err, res) {  
        if (err) throw err;
        console.log("1 record inserted");  
        });


    res.json({requestBody: res.req.query.imgurl});
    console.log("all done");
    
}