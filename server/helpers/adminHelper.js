let db = require('../config/connection')
let collection = require('../config/collection')
const bcrypt = require('bcrypt')
const { ObjectId, Db } = require('mongodb')
const { response, json } = require('express')



module.exports = {
    doAdminLogin: (adminData) => {

        return new Promise(async (resolve, reject) => {

            const admin = await db.get().collection(collection.Admin_COLLECTION).findOne({ email: adminData.email })
            console.log(admin);
            if (admin) {


                if (adminData.password == admin.password) {

                    response.user = admin
                    response.status = true

                    resolve(response)
                }
                else {

                    resolve({ status: false })
                }
            } else {

                resolve({ status: false })
            }

        })



    },




}