import db from "../models/index"
import CRUDservices from "../services/CRUDservices"
let getHomePage =async (req,res) =>{
    try{
        let data = await db.User.findAll()
        return res.render("homePage.ejs", {
            data : JSON.stringify(data)
        })
    }catch(e){
        console.log(e)
    }
}

let getAboutPage = (req,res) =>{
    return res.render("test/about.ejs")
}
let getCrud = (reg,res) =>{
    return res.render("test/crud.ejs")
}
let postCRUD = async(req,res) =>{
    let message = await CRUDservices.createNewUser(req.body)
    console.log(message)
    // console.log(req.body)
    
    return res.send("Đã gửi")
}
let displaygetCRUD = async(req,res)=>{
    let data = await CRUDservices.getAllUser()
    
    console.log(data)
    // res.send("Thanh công")
    return res.render('displayCRUD.ejs',{
        dataTable:data
    })
}
module.exports ={
    getHomePage : getHomePage,
    getAboutPage : getAboutPage,
    getCrud:getCrud,
    postCRUD:postCRUD,
    displaygetCRUD:displaygetCRUD,
}