import * as express from 'express';
let app = express();
import * as cors from 'cors';

import * as Index from './routes/index';

import * as path from 'path';
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');

import  * as bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.use('/',Index.router);
//angular中使用静态资源通过express从后台服务器传到前端
app.use(express.static('dist/board'));
app.use('./node_modules',express.static(__dirname + '/node_modules'));
app.use('/dist',express.static(__dirname + '/dist'));

app.listen(3000, () =>{
    console.log(`listening on port 3000`);
});


