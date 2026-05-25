async function getQuote() {
    const res = await fetch("https://dtjifu9aql4wip5jzpktv702.hosting.codeyourfuture.io/");
    const quote = await res.json();
    return quote;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const quote = await getQuote();
        console.log(quote); // Use console.log instead of print()
    } catch (error) {
        console.error("Failed to fetch the quote:", error);
    }
});