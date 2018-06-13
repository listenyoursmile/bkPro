'use strict'
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        sex: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        brith: {
            type: DataTypes.STRING
        },
        adress: {
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        },
        create_time: {
            type: DataTypes.STRING
        },
        new_login_time: {
            type: DataTypes.STRING
        },
        new_login_adress: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        //静态方法，即user模型自带的方法
        // classMethods: classMethods,
    });
    return User;
};