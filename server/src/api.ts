import express from "express";
const logger = require("pino")();

const router = express.Router();

router.get("/hello", (req, res) => {
  res.send({ message: "Hi!" });
});

export default router;
