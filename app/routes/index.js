module.exports = (app) => {

  app.get('/', (req, res) => {
    app.app.controllers.index.exibe_index(app, req,res);
  });
};
