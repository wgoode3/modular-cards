const Card = require("./card");
const suits = ["Spades", "Diamonds", "Hearts", "Clubs"];
const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];


class Deck {
    constructor() {
        this.cards = [];
        this.reset();
    }
    reset() {
        this.cards = [];
        for(let suit of suits) {
            for(let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }
    shuffle() {
        for(let i=0; i<this.cards.length; i++) {
            let randIndex = Math.floor(Math.random() * this.cards.length);
            let temp = this.cards[i];
            this.cards[i] = this.cards[randIndex];
            this.cards[randIndex] = temp;
        }
    }
    deal(n=1) {
        let cards = [];
        for(let i=0; i<n; i++) {
            cards.push(this.cards.pop());
        }
        return cards;
    }
}

module.exports = Deck;