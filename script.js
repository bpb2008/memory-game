const cardArray = [
    {
        name: 'ariel',
        img: 'images/Ariel.jpg',
    },
    {
        name: 'belle',
        img: 'images/Belle.jpg',
    },
    {
        name: 'cinderella', 
        img: 'images/Cinderella.jpg', 
    },
    {
        name: 'jasmine',
        img: 'images/Jasmine.jpg', 
    }, 
    {
        name: 'elsa', 
        img: 'images/Elsa.jpg', 
    }, 
    {
        name: 'tiana', 
        img: 'images/Tiana.jpg', 
    },
    {
        name: 'ariel',
        img: 'images/Ariel.jpg',
    },
    {
        name: 'belle',
        img: 'images/Belle.jpg',
    },
    {
        name: 'cinderella', 
        img: 'images/Cinderella.jpg', 
    },
    {
        name: 'jasmine',
        img: 'images/Jasmine.jpg', 
    }, 
    {
        name: 'elsa', 
        img: 'images/Elsa.jpg', 
    }, 
    {
        name: 'tiana', 
        img: 'images/Tiana.jpg', 
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid'); 
const resultDisplay = document.querySelector('#result');
let cardsChosen = []; 
let cardsChosenIds = []; 
const cardsWon = []; 

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
       const card = document.createElement('img');
       card.setAttribute('src', 'images/Pink.jpg');
       card.setAttribute('data-id', i); 
       card.addEventListener('click', flipCard); 
       gridDisplay.appendChild(card);
    }
}
createBoard(); 

function checkMatch() {
    const cards = document.querySelectorAll('img'); 
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards); 
    console.log('check for match!'); 
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/Pink.jpg');
        cards[optionTwoId].setAttribute('src', 'images/Pink.jpg');
        alert('You have clicked the same image!'); 
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("You've found a match!");
        cards[optionOneId].setAttribute('src', 'images/White.jpg'); 
        cards[optionTwoId].setAttribute('src', 'images/White.jpg'); 
        cards[optionOneId].removeEventListener('click', flipCard); 
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/Pink.jpg');
        cards[optionTwoId].setAttribute('src', 'images/Pink.jpg');
        alert('Sorry, try again!');
    }
    resultDisplay.texrContent = cardsWon.length;
    cardsChosen = []; 
    cardsChosenIds = []; 

    if (cardsWon.length === (cardArray.length/2)) {
        resultDisplay.innerHTML = 'Congratulations! You found them all!'; 
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name); 
    cardsChosenIds.push(cardId); 
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img); 
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}