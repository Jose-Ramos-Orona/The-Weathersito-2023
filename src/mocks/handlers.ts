import { rest } from "msw";
import mockPrediction from "./mockPrediction";

const apiUrl = process.env.REACT_APP_URLAPI;
const apiKey = process.env.API_KEY;
const city = "Reus";
const cityError = "R";

const handlers = [
  rest.get(`${apiUrl}key=${apiKey}&q=${city}`, async (req, res, ctx) => {
    return await res.once(ctx.status(200), ctx.json(mockPrediction));
  }),

  rest.get(`${apiUrl}key=${apiKey}&q=${cityError}`, async (req, res, ctx) => {
    return await res(ctx.status(400));
  }),
];

export default handlers;
