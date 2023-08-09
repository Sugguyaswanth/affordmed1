const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Temporary storage for the data
const dataStore = {};

app.post('/create_api', (req, res) => {
    try {
        const { company_name, owner_name, roll_no, owner_email, access_code } = req.body;

        dataStore.company_name = company_name;
        dataStore.owner_name = owner_name;
        dataStore.roll_no = roll_no;
        dataStore.owner_email = owner_email;
        dataStore.access_code = access_code;

        const response = {
            message: 'API created successfully',
            data: dataStore
        };
        res.status(200).json(response);
    } catch (error) {
        const errorResponse = {
            error: 'An error occurred',
            message: error.message
        };
        res.status(400).json(errorResponse);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
