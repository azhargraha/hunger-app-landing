import { jobs } from "../../../data";

export default function handler(req, res) {
    const { title, company, location } = req.body;
    const { jobId } = req.query;
    const result = jobs.filter(job => job.id === parseInt(jobId))[0];
    
    if (!result) {
        return res.status(404).json({ message: `Job with id: ${jobId} not found`});
    }

    switch (req.method) {
        case 'GET':
            res.status(200).json(result);
            break;
        case 'PUT':
            jobs.splice(jobId - 1, 1, {
                id: parseInt(jobId),
                title,
                company,
                location
            });

            res.status(200).json(jobs);
            break;
        case 'DELETE':
            const deletedJob = jobs.find(job => job.id === parseInt(jobId));
            jobs.splice(jobId - 1, 1);

            res.status(200).json({
                deletedJob,
                currentJobs: jobs
            });
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} not allowed`);
    }
}