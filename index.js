var index = 0;
var text = [
    '"Be yourself; everyone else is already taken."\n Oscar Wilde',
    '"So many books, so little time."\n Frank Zappa',
    '"A room without books is like a body without a soul." Marcus Tullius Cicero'
];
function changeQuote() {
    ++index;
    if (index >= text.length) {
        index = 0;
    }
    document.getElementById("quote").innerHTML = text[index];
}