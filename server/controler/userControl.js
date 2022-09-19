import User from "../schema/schema.js";

export const addUser=async(req,res)=>{
    const user=req.body
    const newuser=new User(user)
    console.log(newuser);

    try {
        await newuser.save();
        res.status(201).json(newuser)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const allUser=async(req,res)=>{
  try {
    const users= await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({message:error.message})
  }
}

export const editUser=async(req,res)=>{
    let user=req.body;
    const editUser=new User(user)
    try {
        await User.updateOne({_id:req.params.id},editUser)
      res.status(200).json(editUser)
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  }

  export const deleteUser=async(req,res)=>{
console.log(req.params.id);
    try {
        await User.deleteOne({_id:req.params.id})
      res.status(200).json({message:'successfully deleted'})
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  }