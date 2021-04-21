
module.exports = (connection, Sequelize) => {
    const User = connection.define("users", {
      //id: {type: Sequelize.INTEGER,primaryKey: true,autoIncrement: true},
      firstname: {type: Sequelize.STRING},
      lastname: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
      password:{type: Sequelize.STRING},
      state:{
          type: Sequelize.ENUM,
          values: ['activo','pendiente','eliminado']
      },
      latitud:{
          type:Sequelize.INTEGER,
          validate:{min:10,max:20}
        }
      //createdAt: Sequelize.DATE,
      //updatedAt: Sequelize.DATE,
    },{
        indexes:[{
            unique:true,
            fields:['email']
        }],
        timestamps:false
    })
    
    return User
}