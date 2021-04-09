const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/students', (req, res) => {
    const students = [{
            id: "1",
            name: "Caique",
            type: "STUDENT",
            campus: "Campinas"
        },
        {
            id: "2",
            name: "Ivan",
            type: "STUDENT",
            campus: "Campinas"
        }
    ];

    setTimeout(() => {
        res.json(students);
    }, 2000)
});

app.listen(3010, () => console.log('mocks online...'));