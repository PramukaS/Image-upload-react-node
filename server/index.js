const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models')

//Routers
const imageRouter = require("./routes/images");
app.use("/images", imageRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running port 3001");
    });
});
