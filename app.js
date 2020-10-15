const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const methodOverride = require('method-override')

// Nhap routers
const posts = require('./routes/posts')

// Khoi dong app
const app = express()

// Khoi dong Handlebars middleware
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
// Khoi dong bodyPaser middlewar
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
//Khoi dong methodOverride
app.use(methodOverride('_method'))
// Khoi dong express middleware
app.use(express.json())
//ket noi co so du lieu
connectDB();
// Mot so routes co ban, co the dua vao file rieng trong thu muc
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
// Mang routers vao de su dung
app.use('/posts', posts)

const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})