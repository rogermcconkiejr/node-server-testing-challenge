const express = require('express')

const router = express.Router();

const PlayerModel = require('./player-model');

router.get('/', (req, res)=>{
    PlayerModel.get()
    .then(players=>{
        res.status(200).json(players)
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    PlayerModel.add(req.body)
    .then(player => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    PlayerModel.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find player with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
  });
module.exports = router;
