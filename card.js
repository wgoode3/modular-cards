class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    display() {
        console.log(`The ${this.value} of ${this.suit}`);
    }
}

module.exports = Card;