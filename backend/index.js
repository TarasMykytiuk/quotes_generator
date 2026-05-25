import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

const quotes = [
    {
        quote: "Either write something worth reading or do something worth writing.",
        author: "Benjamin Franklin",
    },
    {
        quote: "I should have been more kind.",
        author: "Clive James",
    },
];

function pickRandomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
}

app.get("/", (req, res) => {
    const quote = pickRandomQuote();
    res.send(`"${quote.quote}" -${quote.author}`);
});

app.listen(3000, () => console.log("Server running..."));