'use strict'
module.exports = function (sequelize, DataTypes) {
    var Token = sequelize.define('token', {
        token: {
            type: DataTypes.STRING
        },
        create_time: {
            type: DataTypes.STRING
        },
        expire_time: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
    });
    return Token;
};