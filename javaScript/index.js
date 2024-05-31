var wholeQoute = document.getElementById("qoute");

var qoute = [
    `Be yourself; everyone else is already taken.`,
    `So many books, so little time.`,
    `A room without books is like a body without a soul.`,
    `You only live once, but if you do it right, once is enough.`,
    `Be the change that you wish to see in the world.`,
    `In three words I can sum up everything I've learned about life: it goes on.`,
    `If you tell the truth, you don't have to remember anything.`,
    `A friend is someone who knows all about you and still loves you.`,
    `To live is the rarest thing in the world. Most people exist, that is all.`,
]; 

var qouteAuthor = [
    `― Oscar Wilde`,
    `― Frank Zappa`,
    `― Marcus Tullius Cicero`,
    `― Mae West`,
    `― Mahatma Gandhi`,
    `― Robert Frost`,
    `― Mark Twain`,
    `― Elbert Hubbard`,
    `― Oscar Wilde`,
];


function addQoute(x, y) {
    
    if (x.length === 0 || y.length === 0 ) {
        return "You may refresh the webpage";
    }

    var randomNumber = Math.floor(Math.random()*x.length);
    var theQoute = x[randomNumber];
    var theAuthor = y[randomNumber];
    var htmlAction = wholeQoute.innerHTML = `
    <p><q>${theQoute}</q></p>
    <p class="Author">${theAuthor}</p>
    `

    x.splice(randomNumber, 1);
    y.splice(randomNumber, 1);
  
    return htmlAction;

};
