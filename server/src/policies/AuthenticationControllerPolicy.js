const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
      user_name: Joi.string()
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'you must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The passsword provided failed to match teh folowing rules:
              <br>
              1.It must contain only the following characters: lower case, upper case, numercs
              <br>
              2.It must be at least 8 characters in length and not greater
            `
          })
          break
        default:
          res.status(400).send({
            error: 'invalid registration informarion' + error
          })
      }
    } else {
      next()
    }
  }
}
