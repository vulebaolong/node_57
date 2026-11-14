import express from "express";
import rootRouter from "./src/routers/root.router.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000", "https://google.com"] }));
app.use("/api", rootRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// app.use((req, res, next) => {
//     const origin = req.headers?.origin;
//     console.log({ origin });
//     if (origin === "http://localhost:3000") {
//         res.setHeader("Access-Control-Allow-Origin", origin);
//     }

//     if (req.method === "OPTIONS") {
//         if (origin !== "http://localhost:3000") {
//             return res.sendStatus(403);
//         }
//         res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
//         res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//         res.setHeader("Access-Control-Allow-Origin", origin);
//         return res.sendStatus(204);
//     }

//     next();
// });
