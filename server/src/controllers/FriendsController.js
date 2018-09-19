// const { Friend } = require('../models')

module.exports = {
  async index (req, res) {
    try {
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
  }
}
