import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});