const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
//let __dirname = path.resolve();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

const authRoute = require("./backend/src/routes/authRoute");
const productRoute = require("./backend/src/routes/productRoute");
const userRoute = require("./backend/src/routes/userRoute");
const orderRoute = require("./backend/src/routes/orderRoute");
const stripeCheckoutRoute = require("./backend/src/routes/stripeCheckoutRoute");
const paypalCheckoutRoute = require("./backend/src/routes/paypalCheckoutRoute");
const cartRoute = require("./backend/src/routes/cartRoute");

app.use(cors());

// Connect to MongoDB
require("./backend/src/db/mongoose");

// connect routes
app.use(authRoute);
app.use(productRoute);
app.use(userRoute);
app.use(orderRoute);
app.use(cartRoute);
app.use(stripeCheckoutRoute);
app.use(paypalCheckoutRoute);

module.exports = app;
