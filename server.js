const express = require('express');
const db = require('./db/index')
const app = express();
const cors = require('cors')

const port = 4000

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.post('/api/v1/restaurants', async (req, res) => {
  console.log(req.body)
  const name = req.body.name;
  const address = req.body.address;
  const id = req.params.id;
  try {
    const results = await db.query(`insert into student(id, name, address) values ($1, $2, $3) returning *`,[id, name, address]);
    // select * from restaurants where id = req.params.id
    return res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err)
  }
});

app.get('/', async (req, res) => {

  try{
    const show = await db.query(`select * from student`);
    return res.status(200).json({
      status: "success",
      data: show.rows,
    })
  }catch (e) {
    console.log(e)
  }
})


app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
})