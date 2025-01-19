const validationMw = (req,res,next)=>{
    if(req.method=="POST" && req.path == "/add_author"){
        req.body.name?req.body.email?next():res.send("email is required"):res.send("name is required")
        return
    }
    if(req.method=="POST" && req.path == "/new_post"){
        const {title,content, author} = req.body;
        if(title === undefined){return res.send({
            msg: "a title is required to create a post", 
            example_JSON_content: {
                "title":"This is an example title",
                "content" : " this field is optional",
                "author" : "requires an string format Author ObjectId"
            }
        })}
        if(author === undefined){return res.send({
            msg: "an author ObjectId is required to create a post", 
            example_JSON_content: {
                "title":"Mandatory, This is an example title",
                "content" : " this field is optional",
                "author" : "Mandatory, requires an string format Author ObjectId"
            }
        })}
        next()
    }
    next()
}

module.exports = {validationMw}