import Express  from "express";
import cors from "cors";
// const {readdirSync} = require("fs")
const app = Express();

app.use(cors());

// readdirSync("./api").map((file)=>app.use("/",require("./api/"+file)))

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
})