const express = require('express')
const router = express.Router()
const connection = require('./db.js')

router.post('/', function(req, res) {
  console.log(req.body)
  const {
    title, startHour, endHour, dayOfWeek, resourceId
  } = req.body
  const query = `INSERT INTO timeSlot (title, startHour, endHour, dayOfWeek, resourceId) VALUES (?, ?, ?, ?, ?)`
  connection.query(query,[title, startHour, endHour, dayOfWeek, resourceId], (error, result) => {
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    console.log(result)
    connection.query(`SELECT * FROM timeSlot WHERE id = ?`,
      [result.insertId], (error, timeslots) => {
        if (error) {
          return res.status(500).json({
            error: error.message
          })
        }
        res.json(
          timeslots[0]
        )
    })
  })
})

router.put('/:id', function(req, res) {
  const {
    title, startHour, endHour, dayOfWeek, resourceId
  } = req.body
  const query = `UPDATE timeSlot SET title = ?, startHour = ?, endHour = ?, dayOfWeek = ?, resourceId = ? WHERE id = ?`
  connection.query(query,[title, startHour, endHour, dayOfWeek, resourceId, req.params.id], (error, result) => {
    if (error) {
      return res.status(500).json({
        error: error.message
      })
    }
    console.log(result)
    connection.query(`SELECT * FROM timeSlot WHERE id = ?`,
      [req.params.id], (error, timeslots) => {
        if (error) {
          return res.status(500).json({
            error: error.message
          })
        }
        res.json(
          timeslots[0]
        )
    })
  })
})

router.get('/', (req, res) => {
  const managerId = req.session.user.id

  connection.query(`SELECT t.id, t.title, t.startHour, t.endHour, t.dayOfWeek, t.resourceId FROM timeSlot t INNER JOIN resource r ON t.resourceId=r.id WHERE r.managerId=?`,
  [managerId], (error, timeslots) => {
    if (error) {
      return res.status(500).json({ 
        error: error.message
      })
    }
    res.json(
      timeslots
    )
  })
})

router.delete('/:id', (req, res) => {
  connection.query(`DELETE FROM timeSlot WHERE id = ?`, [req.params.id], (error) => { 
    if (error) {
      return res.status(500).json({ 
        error: error.message
      })
    } 
    res.json({
      id: req.params.id
    }) 
  })
})


module.exports = router