
const StoreController = require('../controllers/store.controller');

module.exports = app => {
    app.post("/api/stores/new", StoreController.create);
    app.get("/api/stores/:id", StoreController.get);
    app.get("/api/stores/", StoreController.getAll);
    app.patch('/api/stores/:id', StoreController.update);
    app.delete('/api/stores/:id', StoreController.delete);
}
