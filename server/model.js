//API methods are included
const listschemma =require('./schemma')


const getlist=('/',async (req,res)=>{
    const saveddata=await listschemma.find()
    return res.json(saveddata)
})

const addlist=('/',async (req,res)=>{
  try {
    const repeateddata= await listschemma.findOne({listing:req.body.listing})
    if(repeateddata){
     return   res.status(400).send("same data already given")
    }
    const data = new listschemma({listing:req.body.listing})    
    const savedata = await data.save();
    res.json(savedata)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create item' });
  } 
})  

const deletelist=('/',async(req,res)=>{
    try{
        const ids=req.params.id
        console.log(req)
       const  deletedata= await listschemma.findByIdAndDelete(ids)
       //if there is no id matched
       if (!deletedata) {
           res.status(404).json({ error: 'Data not found.' });
           return;
        }
          res.json({message:"data is deleted successfully"})
    }
    catch(err){
         res.status(500).send(err.message)
    }
})

const updatedata=('/',async(req,res)=>{
  try{
    const itemId = req.params.id;
    const updatedData = req.body;

    const updatedItem = await listschemma.findByIdAndUpdate(itemId, updatedData, {
      new: true // Return the modified document
    });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    return res.json(updatedItem);
  }
  catch(err){
    res.status(500).send(err.message)
  }

})

module.exports ={
    getlist,
    addlist,
    deletelist,
    updatedata,
}