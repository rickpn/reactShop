const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));


const connection = mysql.createConnection({
	host: "",
	user: "",
	password: "",
	database: "",
	port: "3306"
});

connection.connect(err => {
	if (err) {
		return err;
	}
});




app.get('/products/add', (req, res) => {
	const { name, price, tags, image, status } = req.query;
	connection.query(
		`INSERT INTO products (name,price,tags,image,status) VALUES ('${name}','${price}','${tags}','${image}','${status}')`,
		(err, results) => {
			if (err) {
				return res.send(err)
			} else {
				connection.query(
					'SELECT * FROM products ORDER BY id DESC LIMIT 0,1',
					(err, _products) => {
						if (err) { return res.send(err) }
						else {
							res.json(_products);
						}


					}
				)


			}
		}
	)
});




app.get('/products/update', (req, res) => {
	const { name, price, tags, image, status, id } = req.query;
	connection.query(
		`UPDATE products SET name='${name}',price='${price}',tags='${tags}',image='${image}',status='${status}'WHERE id='${id}'`,

		(err, results) => {
			if (err) {
				return res.send(err)
			} else {
				connection.query(
					'SELECT * FROM products ORDER BY id DESC LIMIT 0,1',
					(err, _products) => {
						if (err) { return res.send(err) }
						else {
							res.json(_products);
						}


					}
				)


			}
		}
	)
});


app.get('/products/delete', (req, res) => {
	const { id } = req.query;
	connection.query(
		`DELETE FROM products WHERE id='${id}'`,

		(err, results) => {
			if (err) {
				return res.send(err)
			} else {
				res.send("Delete success");
			}
		}
	)
});


app.get('/products', (req, res) => {
	connection.query(
		'SELECT * FROM products',
		(err, _products) => {
			if (err) { return res.send(err) }
			else {
				res.json(
					_products
				)
			}

		}
	)
});



app.listen(4000, () => {
	console.log('Server Running');
});