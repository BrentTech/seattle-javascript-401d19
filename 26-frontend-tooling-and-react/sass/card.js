console.log('card')

// component
class Card {
  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }

  toHTML(attachParent) {
    return (<div class="card suit">
      <div class="top-left">{this.value}</div>
      <div class="bot-right">{this.value}</div>
    </div>)
  }

  //  let card = document.createElement('div')
  //  let topLeft = document.createElement('div')
  //  let botRight = document.createElement('div')

  //  card.classList.add('card')
  //  card.classList.add('suit')

  //  topLeft.classList.add('top-left')
  //  botRight.classList.add('bot-right')

  //  topLeft.textContent = this.value
  //  botRight.textContent = this.value

  //  card.appendChild(topLeft)
  //  card.appendChild(botRight)

  //  attachParent.appendChild(card)
  }
}
