enum Suit {
  Heart,
  Diamond,
  Club,
  Spade,
}

export class Card {
  suit: Suit;
  faceValue: number; // Ace = 1, 2 - 10 = normal, J = 11, Q = 12, K = 13
  shown: boolean;

  constructor(suit: Suit, faceValue: number, shown: boolean) {
    this.suit = suit;
    this.faceValue = faceValue;
    this.shown = shown;
  }
}

export class Deck {
  private deck: Card[];
  private topOfDeck: number;

  constructor() {
    this.topOfDeck = 0;

    const suits = Object.keys(Suit).filter((v) => isNaN(Number(v)));
    for (const suit of suits) {
      for (let faceValue = 1; faceValue <= 13; faceValue++) {
        const sEnum: Suit = (<any>Suit)[suit];
        this.deck.push(new Card(sEnum, faceValue, false));
      }
    }

    this.shuffle();
  }

  shuffle() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
    this.topOfDeck = 0;
  }

  draw(): Card {
    const card = this.deck[this.topOfDeck];
    this.topOfDeck = (this.topOfDeck + 1) % (this.deck.length - 1);

    return card;
  }

  cardsRemaining(): number {
    return this.deck.length - 1 - this.topOfDeck;
  }
}
