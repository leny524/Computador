const express=require("express");
const router = express.Router();
const  {nanoid}=require("nanoid");

const idLegeth =8;
//obteenr lista de articulos
router.get("/",(request,response)=>{
    const articulos =request.app.db.get("articulos");
    response.send("En plena clase METODO GET");
});
//obtrener una rticulo desde la ID
router.get("/:id", (req,resp)=>{
    const articulo =req.app.db.get("articulos")
                     .find({id:req.params.id}).value();

    if(!articulo){
      res.sendStatus(404)      
    }
    res.send(articulo);

});
//crear nuevo articulo
router.post("/",(req,res)=>{
    try{
        const articulo = {
            id:nanoid(idLength),
            ...req.body,
        };
        req.app.db.get("articulos").push(articulo).write();

      return  res(articulo);

    } catch(error){
        return res.status(500).send(error);
    } 
});



module.exports =router;