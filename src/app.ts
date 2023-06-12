import express, { Request, Response } from 'express';
const app = express();

type ResponsePayload = {
	succeeded: boolean;
	message: string;
};

export function init(port = 4000) {
	app.get('/', (req: Request, res: Response<ResponsePayload>) => {
		console.log(req);
		res.status(200).json({
			succeeded: true,
			message: req.url,
		});
	});

	app.listen(port, () => console.log(`app is running on port ${port} at http://localhost:${port}`));
}
