const express = require('express');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db.js');
const {notFound,errorHandler} = require('./middleware/errorMiddleware.js');
const productRoute = require('./routes/productRoute.js');
const userRoute = require('./routes/userRoute.js');

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "john Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rebaka Asha",
    email: "rebaka@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];

const port = process.env.PORT;

connectDB(); // connect to MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("API runninng....");
});

app.use('/api/products',productRoute);
app.use('/api/users',userRoute);



app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));
