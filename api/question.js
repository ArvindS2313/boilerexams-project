import axios from 'axios';

export default async function handler(req, res) {
    const {id} = req.query;
    try {
        const response = await axios.get(`https://api.boilerexams.com/questions/${id}`);
        const data = response.data;
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch question." });
    }
}