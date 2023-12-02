
const Store = require('../models/store.model');

module.exports.create = (request, response) => {
    Store.create(request.body)
        .then(newStore => {response.json(newStore);})
        .catch((err) => {response.json(err)});
}

module.exports.get = (request, response) => {
    Store.findOne({_id:request.params.id})
        .then(store => {response.json(store);})
        .catch((err) => {response.json(err)});
}

module.exports.getAll = (request, response) => {
    Store.find({})
        .then(stores => {response.json(stores);})
        .catch((err) => {response.json(err)});
}

module.exports.update = (request, response) => {
    Store.findOneAndUpdate({_id:request.params.id}, request.body, {new: true, runValidators: true})
        .then(updatedStore => {response.json(updatedStore);})
        .catch((err) => {response.json(err)});
}

module.exports.delete = (request, response) => {
    Store.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => {response.json(deleteConfirmation);})
        .catch((err) => {response.json(err)});
}