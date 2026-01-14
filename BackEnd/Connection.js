const mongoose = require('mongoose')

const Connection =()=>{ mongoose.connect('mongodb://localhost:27017/UserAccountFolder')
.then(()=>{console.log('Connection Established')})
.catch((err)=>{console.log(err,"error found")})
}

module.exports=Connection