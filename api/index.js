import Express  from "express";
import cors from "cors";
const app = Express();

app.use(cors());

app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});
