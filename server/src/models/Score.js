module.exports = (sequelize, DataTypes) => {
  const Score = sequelize.define('Score', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    nb_of_games: DataTypes.INTEGER,
    nb_of_wins: DataTypes.INTEGER,
    nb_of_loses: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Score.belongsTo(models.User, { foreignKey: 'user_id', targetKey: 'id' })
      }
    }
  })

  return Score
}
