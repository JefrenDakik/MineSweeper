module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user_one_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    user_two_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    // this is the user who performed the last action(ie it will be user_one_id
    // if user_one sent a friend request
    action_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    // represents the relationship status between the two users
    // 0: pending
    // 1: accepted
    // 2:rejected
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Friend.belongsTo(models.User, { foreignKey: 'user_one_id', targetKey: 'id' })
        Friend.belongsTo(models.User, { foreignKey: 'user_two_id', targetKey: 'id' })
        Friend.belongsTo(models.User, { foreignKey: 'action_user_id', targetKey: 'id' })
      }
    }
  })

  return Friend
}
