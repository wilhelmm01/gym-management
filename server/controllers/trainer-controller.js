const { Trainer } = require('../models/Trainer');

const trainerController = {
// get all trainers
getAllTrainer(req, res) {
    Trainer.find({})
    .then(dbTrainerData => res.json(dbTrainerData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

// get one trainer by id
getTrainerById({ params }, res) {
    Trainer.findOne({ _id: params.id })
    .then(dbTrainerData => {
        // if no trainer is found, send 404
        if (!dbTrainerData) {
            res.status(404).json({ message: 'No trainer with this id exists!' });
            return;
        }
        res.json(dbTrainerData); 
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},

// create trainer (post)
createTrainer({ body }, res) {
    Trainer.create(body)
    .then(dbTrainerData => res.json(dbTrainerData))
    .catch(err => res.status(400).json(err));
},

//update trainer by id
updateTrainer({ params, body }, res) {
    Trainer.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(dbTrainerData => {
        if (!dbTrainerData) {
            res.status(404).json({ message: 'No trainer found with this id!' });
            return;
        }
        res.json(dbTrainerData);
    })
    .catch(err => res.status(400).json(err));
},

//delete trainer
deleteTrainer({ params }, res) {
    Trainer.findOneAndDelete({ _id: params.id })
    .then(dbTrainerData => {
        if (!dbTrainerData) {
            res.status(404),json({ message: 'No trainer found with this id!' });
            return;
        }
        res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
}
};

module.exports = trainerController;