const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

app.use(express.json());  //to parse JSON request bodies

const expRoutes=require('./routes/expanseRoute');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(expRoutes);

app.get('/',(req,res,next)=>{
    res.send('Not found');
})


mongoose
  .connect(
    'mongodb+srv://vkpvivek:zxcvbnm123@cluster0.9zeb8i5.mongodb.net/ExpanseDB?retryWrites=true'//,
    // {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(result => {
    console.log("Connected");
    app.listen(3000)
  })
  .catch(err => {
    console.log(err);
  });
