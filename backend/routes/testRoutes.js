import express from "express";

const router = express.Router();

router.post("/", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Data received successfully",
    });
});

router.get("/", (req, res) => {

    res.json({
        message: "Backend connected successfully",
    });
});

export default router;