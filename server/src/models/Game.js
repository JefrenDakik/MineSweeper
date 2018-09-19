module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_one_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    user_two_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    winner_id: DataTypes.INTEGER,
    // time number of seconds
    duration: DataTypes.FLOAT,
    // this is the user who performed the last action(ie it will be user_one_id
    // if user_one sent a challenge request
    action_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    // represents the game status between the two users
    // 0: pending
    // 1: accepted
    // 2:rejected
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Game.belongsTo(models.User, { foreignKey: 'user_one_id', targetKey: 'id' })
        Game.belongsTo(models.User, { foreignKey: 'user_two_id', targetKey: 'id' })
        Game.belongsTo(models.User, { foreignKey: 'action_user_id', targetKey: 'id' })
      }
    }
  })

  return Game
}
