"use strict"

//모듈
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/login", ctrl.login);
router.get("/", ctrl.hello);


module.exports = router;