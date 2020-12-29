const https = require('https')
// const fs = require('fs')
const express = require('express')
const app = express()
const path = require('path')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
const mongoose = require('mongoose')
const morgan = require('morgan')
const debug = require('debug')('app:server')
const chalk = require('chalk')
// const pagesFunctions = require('./src/functions/pagesFunctions')
const port = 8000
const dotenv = require('dotenv')
dotenv.config()
const connectionUrl = process.env.DB_URI
// const upload = ('file-upload')


// const authRouter = require('./src/routes/authRoutes')()
const paymentsRouter = require('./src/routes/paymentsRoutes')()
// const accountRouter = require('./src/routes/accountRoutes')()
// const searchRouter = require('./src/routes/searchRoutes')()
// const calendarRouter = require('./src/routes/calendarRoutes')()
// const forgotRouter = require('./src/routes/forgotRoutes')()
// const fileUpload = require('express-fileupload')



app.use(express.urlencoded({extended: false}))
app.use(express.json())
// app.use(cookieParser())
// app.use(session({secret: 'nm'}))
// app.use(fileUpload())
// app.use('/auth', authRouter)
// app.use('/account', accountRouter)
app.use('/payments', paymentsRouter)
// app.use('/search', searchRouter)
// app.use('/calendar', calendarRouter)
// app.use('/forgot_password', forgotRouter)

app.use(express.static(path.join(__dirname, '/public')))
app.use(morgan('tiny'))

app.set('views', './src/views')
app.set('view engine', 'ejs')




app.get('/', (req, res) => {
    (async () => {
        debug('Hello')
        res.send('Hello')
        // const areaData = await pagesFunctions.getSlideArea()
        // debug(areaData);
        // const synagogues = await pagesFunctions.getSynagogueHomePage()
        // const zmanim = await pagesFunctions.getAllZmanim(req, res)
        // const userDiv = pagesFunctions.userDiv(req)
        // console.log(req.cookies)
        // res.render('pages/index', {
        //     pageTitle: 'דף הבית',
            // userDiv,
            // zmanim,
            // synagogues,
            // areaData,
            // search: ''
        // })
    })()
})

// app.get('/faq', (req, res) => {
//     (async () => {
//         const zmanim = await pagesFunctions.getAllZmanim(req, res)
//         const userDiv = pagesFunctions.userDiv(req)
//         debug(zmanim)
//         res.render('pages/faq', {
//             pageTitle: 'שו"ת',
//             userDiv,
//             zmanim,
//             search: ''
//         })
//     })()
// })

// app.get('/conditions', (req, res) => {
//     (async () => {
//         const zmanim = await pagesFunctions.getAllZmanim(req, res)
//         if(req.user) {
//             res.json(req.user)
//         } else {
//             debug(zmanim)
//             res.render('pages/conditions', {
//                 pageTitle: 'תנאי שימוש',
//                 zmanim,
//                 search: ''
//             })
//         }
//     })()
// })

// app.get('/contact_us', (req, res) => {
//     (async () => {
//         const zmanim = await pagesFunctions.getAllZmanim(req, res)
//         const userDiv = pagesFunctions.userDiv(req)
//         debug(zmanim)
//         res.render('pages/contact_us', {
//             pageTitle: 'צור קשר',
//             userDiv,
//             zmanim,
//             search: ''
//         })
//     })()
// })

// 404 page
app.get('*', (req, res) => {
    (async () => {
        res.send('404')
        // const zmanim = await pagesFunctions.getAllZmanim(req, res)
        // const userDiv = pagesFunctions.userDiv(req)
        // res.status(404).render('pages/error', {
        //     pageTitle: 'דף לא נמצא',
        //     userDiv,
        //     zmanim,
        //     search: ''
        // })
    })()
})



const start = async () => {
    // await mongoose.connect(
    //     'mongodb://127.0.0.1/nsd', //local
    //     // 'mongodb+srv://nati:nati1980.@tefilatime.hkuvn.mongodb.net/tefilaTime?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true', // serveur
    //     // connectionUrl,
    //     {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true}
    // )
    // debug('Connected to db server')

    app.listen(port, () => {
        debug(`listening on port ${chalk.green(port)}`)
    })
}



module.exports = start;