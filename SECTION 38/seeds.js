const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
// const p = new Product({
//     name: 'Ruby Grape Fruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p=>{
//     console.log(p);
// })
// .catch(e=>{
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Khushal',
        price:1.15,
        category: 'vegetable'
    },
    {
        name: 'Vishal',
        price:1.18,
        category: 'fruit'
    },
    {
        name: 'Parth',
        price:2.15,
        category: 'fruit'
    },
]

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})
