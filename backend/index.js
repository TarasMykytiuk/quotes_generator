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

app.get("/get_quote", (req, res) => {
    const quote = pickRandomQuote();
    res.send(`"${quote.quote}" -${quote.author}`);
});

app.post("/post_quote", (req, res) => {
    const author = req.body.author;
    const quote = req.body.quote;
    quotes.push({ quote: quote, author: author });
    return res.status(200).send({ message: "Success!" });
});

app.listen(3000, () => console.log("Server running..."));