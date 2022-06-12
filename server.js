require("dotenv").config();
const app = require("./app");
const {createServer} = require("http");
const PORT = process.env.PORT;

createServer(app).listen(PORT,()=>console.log(`Server running on port :${PORT}`));