import express, { Router } from "express"
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/about", homeController.getAboutPage)
    router.get("/crud", homeController.getCrud)

    router.post("/post-crud",homeController.postCRUD)
    router.get("/get-crud",homeController.displaygetCRUD)
    // router.get("/TsonDev", (reg,res) => {
    //     return res.send("Start with TsonDev")
    // });
    return app.use("/", router)
}
module.exports=initWebRoutes