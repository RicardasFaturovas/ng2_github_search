"use strict";

const express = require('express');
const msg     = require('gulp-messenger');
const chalk   = require('chalk');
const Twig    = require('twig');
const _       = require('lodash');


const app = express();
const twig = Twig.twig;

app.set('port', (process.env.PORT || 8080)); //port
app.use(express.static(__dirname + '/public'));  // static directory

//using twig templating engine
app.get('/', (req, res) => {
  res.render('index.twig', {
    link: `"https://github.com/login/oauth/authorize?scope=user:email&client_id=<%= client_id %>">`,
  });
});


app.get('callback',(req,res)=>{

});
//listen
app.listen(app.get('port'), () => {
  msg.log('\n');
  console.log(chalk.cyan('Server Started ' + new Date()));
  msg.log('\n');
  const serverInfo = chalk.yellow(`http://localhost:${app.get('port')}`);
  msg.success('=', _.pad(`Application Running On: ${serverInfo}`, 80), '=')
});
