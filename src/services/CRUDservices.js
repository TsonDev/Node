import bcrypt from 'bcryptjs'
import db from "../models/index"

const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcryptjs = await hashPassword(data.password)
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcryptjs,
                firstName: data.firstname,
                lastName: data.lastname,
                address:data.address,
                phonenumber: data.phonenumber,
                gender: data.gender ==1 ? true: false ,
                roleId:data.roleId
                
            })
            resolve('Ok create a new user')
        } catch (e) {
            reject(e)
        }
    })
}
let hashPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}
let getAllUser=()=>{
    return new Promise(async(resolve,reject )=>{
        try {
            let users = db.User.findAll({
                    raw:true
            })
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    hashPassword: hashPassword,
    getAllUser:getAllUser
} 