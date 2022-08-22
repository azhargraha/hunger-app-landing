import { jobs } from "../../../data";

export default function handler(req, res) {
    const { title, company, location } = req.body;

    switch (req.method) {
        case 'GET':
            res.status(200).json(jobs);
            break;
        case 'POST':
            jobs.push({
                id: jobs.length + 1,
                title,
                company,
                location
            });

            res.status(200).json(jobs);
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} not allowed`);
    }
}