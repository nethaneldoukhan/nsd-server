const express = require('express');
const https = require('https');
const CallBack = require('../schemas/callBackSchema');
const debug = require('debug')('app:payments')

const paymentsRouter = express.Router();


function router() {
    paymentsRouter.route('/')
        .get((req, res) => {
            (async () => {
                debug('payments')
                res.send('payments')
            })();
        })


    paymentsRouter.route('/callBack/:id')
        .post((req, res) => {
            debug('receipt callBack')
            // res.send('receipt callBack')
            const responseJson = req.params.id
            debug(responseJson)
            CallBack.collection.insertOne({"name": responseJson});
            
            res.send(responseJson)
            // (async () => {
            //     let response = {
            //         'status': '',
            //         'tables': []
            //     }
            //     try {
            //         const valuesOk = checkValues(user);
            //         if (valuesOk) {
            //             const existUser = await checkExistEmail(user);
            //             if (existUser === false) {
            //                 const addUser = await insertUser(user);
            //                 response.status = 'ok';
            //                 response.tables = addUser;
            //                 res.json(response);
            //             } else {
            //                 response.status = 'Email already used';
            //                 res.json(response);
            //             }
            //         } else {
            //             response.status = 'Field/s not valid or empty';
            //             res.json(response);
            //     }
            //     } catch (err) {
            //         debug(err);
            //         response.status = 'error';
            //         res.json(response);
            //     }
            // })();
        });


    return paymentsRouter
}


module.exports = router