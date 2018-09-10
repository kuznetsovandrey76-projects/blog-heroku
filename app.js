let express = require('express'),
	bodyParser = require('body-parser'),
	exphbs  = require('express-handlebars'),
	{ Pool, Client } = require('pg'),
	app = express();


const USER_SERVER = {
	name: 'wwagzkrthsjslb',
	password: 'f037a36e6e2452e351f9e88446df480d013dcc943b5de972a461682fb8811dd9',
	host: 'ec2-54-217-235-159.eu-west-1.compute.amazonaws.com',
	port: '5432',
	db: 'd6u19tp8jutgfb',
	table: 'blog'
}

const connect = 'postgres://' + USER_SERVER.name + ':' + USER_SERVER.password + '@' + USER_SERVER.host + ':' + USER_SERVER.port + '/' + USER_SERVER.db;


app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.get('/', function(req, res){

	const client = new Client({
	  connectionString: connect,
	  ssl: true
	});
	client.connect();
	client.query('SELECT * FROM ' + USER_SERVER.table, function(err, resDB) {
	  res.render('home', {temp: resDB.rows});
	  client.end();
	});

}); 


app.post('/add', function(req, res) {
	const client = new Client({
	  connectionString: connect,
  	  ssl: true
	});
	client.connect();

	client.query('INSERT INTO ' + USER_SERVER.table + '(header, description, fulltext, day) VALUES($1, $2, $3, $4)', 
		[req.body.header, req.body.description, req.body.fulltext, req.body.day], function() {
	  		res.redirect('/');
	  		client.end();

		});
});


app.delete('/delete/:id', function(req, res) {
	const client = new Client({
	  connectionString: connect,
	  ssl: true
	});
	client.connect();

	client.query('DELETE FROM ' + USER_SERVER.table + ' WHERE id = $1', 
		[req.params.id], function() {
	  		client.end();
	  		res.sendStatus(200); 
		});

});


app.post('/edit', function(req, res) {
	const client = new Client({
	  connectionString: connect,
	  ssl: true
	});
	client.connect();

	client.query('UPDATE ' + USER_SERVER.table + ' SET header=$1, description=$2, fulltext=$3, day=$4  WHERE id = $5', 
			[req.body.header, req.body.description, req.body.fulltext, req.body.day, req.body.id], function() {
	  		res.redirect('/');
	  		client.end();
		});
});



app.listen(process.env.PORT || 8080, function(){
	console.log('http://localhost:8080');
});