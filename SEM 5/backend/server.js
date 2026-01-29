import express from 'express'
const app = express()

app.use(express.json());

// craete array for store data 
const student = [
    {
        id: 1,
        name: 'John',
        age: 20,
        gender: 'male',
        address: 'USA',
        phone: '1234567890'
    },
    {
        id: 2,
        name: 'Jane',
        age: 22,
        gender: 'female',
        address: 'UK',
        phone: '0987654321'
    },
    {
        id: 3,
        name: 'Tom',
        age: 25,
        gender: 'male',
        address: 'Canada',
        phone: '0987654321'
    }
]

app.get('/', (req, res) => {
    try {
        res.json(student)
        res.status(200).json({message:"Show all data"})        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        console.log(error)
    }
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "Show all data", data: student })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

app.post('/add', (req, res) => {
    try {
        const newStudent = {
            id: student.length + 1,
            ...req.body
        }
        student.push(newStudent)
        res.status(201).json({ message: "Student added", student: newStudent })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

app.post('/add',(req, res) => {
    try{
        const newStudent = {
            id: student.length + 1,
            ...req.body
        }
    }
})