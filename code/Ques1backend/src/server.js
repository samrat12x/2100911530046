const { log } = require('console')
const express = require('express')
const cors = require('cors')

const port =3000;
const productData=[
    {
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "availability": "yes"
    },
    {
      "productName": "Laptop 13",
      "price": 1244,
      "rating": 4.5,
      "discount": 45,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 3",
      "price": 9102,
      "rating": null,
      "discount": "",
      "availability": "no"
    },
    {
      "productName": "Tablet X",
      "price": 799,
      "rating": 3.8,
      "discount": 20,
      "availability": "yes"
    },
   
  ]
  


const { json } = require('body-parser')
const { title } = require('process')

const app = express()
app.use(cors())

app.get('/categories/:categoryname', (req, res) => {
   
    const categoryname= req.params.categoryname;
    res.send(productData);
});

app.listen(port,()=>{
    console/log("app running on",{port})
})