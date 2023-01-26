const mongoose = require('mongoose')

const DB_URI = 'mongodb://10.10.20.53:27017/breach-compilation'

module.exports = () => {
    const connect = () => (
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log('DB: ERROR !!');
                }else{
                    console.log('Conexion Correcta!!')
                }
            }
        )
    )
connect();
}

