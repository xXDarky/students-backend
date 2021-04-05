import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';

//conection string
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/students_system';
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
.then(mongoose => console.log('DB in port 27017') )
.catch(err => console.log(err));

const app =express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', router);


app.set('port', process.env.PORT || 3100);

app.listen(app.get('port'), ()=> {
    console.log('Server on port ' + app.get('port'));
    console.log(path.join(__dirname, 'public'));
});
