async function getQuote() {
    const res = await fetch("https://dtjifu9aql4wip5jzpktv702.hosting.codeyourfuture.io/");
    const quote = await res.json();
    return quote;
}

document.addEventListener("DOMContentLoaded", () => {
    quote = getQuote();
    print(quote);
});