require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./database/db");

const app = express();
const port = process.env.PORT || 5005;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());  // Enable CORS for all origins

// Connect to the database id_dr 1000001
pool.connect();

app.get('/doctors', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM doctor_info LIMIT 10');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/doctors/:id_dr', async (req, res) => {
  const { id_dr } = req.params;
  try {
    const result = await pool.query('SELECT * FROM doctor_info WHERE id_dr = $1', [id_dr]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching doctor information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.get('/health_records/:id_dr', async (req, res) => {
  const { id_dr } = req.params;
  try {
    const result = await pool.query('SELECT * FROM health_records WHERE ID_dr = $1', [id_dr]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching health records:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/employment_history/:id_dr', async (req, res) => {
  const { id_dr } = req.params;
  try {
    const result = await pool.query('SELECT * FROM employment_history WHERE ID_dr = $1', [id_dr]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching employment history:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/bank_documents/:id_dr', async (req, res) => {
  const { id_dr } = req.params;
  try {
    const result = await pool.query('SELECT * FROM bank_and_documents WHERE ID_dr = $1', [id_dr]);
    res.json(result.rows); // This should return the rows if found
  } catch (error) {
    console.error('Error fetching bank and document information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/car_info/:id_dr', async (req, res) => {
  const { id_dr } = req.params;
  try {
    const result = await pool.query('SELECT * FROM car_info WHERE ID_dr = $1', [id_dr]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching car information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Root endpoint 
app.get("/", function (req, res) {
  res.send("Hello dream team :)");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
