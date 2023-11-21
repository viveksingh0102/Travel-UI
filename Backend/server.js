const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
// app.use(cors());
const bodyParser = require("body-parser")

const app = express();
app.use(express.json());
app.use(cors());
// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'travel',
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});
app.use(bodyParser.json());


// Your Express.js routes and middleware go here

app.post('/post', (req, res) => {
    // console.log(req.body, 'insert');
    const { name, email, password } = req.body;
    connection.query("INSERT INTO `sign_up` (`id`, `name`, `email`, `password`) VALUES (NULL, ?, ?, ?)",
        [name, email, password],
        (err, results) => {
            if (err) {
                console.error('Error inserting data: ' + err.stack);
                res.status(500).send('Error inserting data');
                return;
            }

            console.log('Inserted ID:', results.insertId);
            res.status(200).send('Data inserted successfully');
        }
    );
});

// login

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    connection.query(
        'SELECT * FROM `sign_up` WHERE `email` = ? AND `password` = ?',
        [email, password],
        (err, results) => {
            if (err) {
                console.error('Error during login:', err.stack);
                res.status(500).json({ error: 'Error during login' });
                return;
            }

            if (results.length > 0) {
                res.status(200).json({ message: 'Login successful!' });
            } else {
                res.status(401).json({ error: 'Incorrect email or password' });
            }
        }
    );
});


// ...get data

app.get('/get', (req, res) => {
    connection.query("Select *from `sign_up`", (err, results) => {
        if (err) {
            console.error("error fetching data" + err.stack);
            res.status(500).send("error fetching data");
            return;
        }
        res.status(200).send(results)
    })
})

// Close the MySQL connection when the app is terminated
process.on('SIGINT', () => {
    connection.end();
    process.exit();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
