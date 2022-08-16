// 'sequelize' é uma biblioteca que sincroniza os modelos com o banco de dados e transforma os códigos em códigos sql
import Sequelize from "sequelize";

import connection from "../config/db.js";

const User = connection.define(

    'user',
    {

        // oque o user vai ter de informação
        id: {

            type: Sequelize.INTEGER,
            autoIncrement: true,
            allwNull: false,
            primaryKey: true

        },
        name:{

            type: Sequelize.STRING,
            allowNull: false

        },
        email: {

            type: Sequelize.STRING,
            allowNull: false,
            validate: {

                isEmail: true

            },
            unique: true

        },
        password: {

            type: Sequelize.STRING,
            allowNull: false

        },
        admin: {

            type: Sequelize.BOOLEAN,
            allowNull: false

        }

    }

);

export default User;



