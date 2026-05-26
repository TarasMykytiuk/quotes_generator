async function getQuote() {
    const res = await fetch("https://dtjifu9aql4wip5jzpktv702.hosting.codeyourfuture.io/");
    const quote = await res.text();
    return quote;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const quote = await getQuote();
        console.log(quote);
        display_quote = document.getElementById("display_quote");
        display_quote.innerText = quote;
    } catch (error) {
        console.error("Failed to fetch the quote:", error);
    }
});