class ChatMessage {
  constructor(data) {
    this.data = data

    this.username = data.username
    this.timestamp = data.timestamp
    this.message = data.message
  }

  render(parentElement) {
    console.log('REDNER START')
    let container = document.createElement('div')
    let timestamp = document.createElement('span')
    let username = document.createElement('span')
    let message = document.createElement('span')
    let img = document.createElement('img')

    container.classList.add('message')
    timestamp.classList.add('timestamp')
    username.classList.add('username')

    timestamp.textContent = this.timestamp
    username.textContent = this.username + ':'
    message.textContent = this.message

    container.appendChild(timestamp)
    container.appendChild(username)
    if (this.data.url) {
      img.src = this.data.url
      container.appendChild(img)
    } else {
      container.appendChild(message)
    }

    console.log('REDNER DONE')
    parentElement.appendChild(container)
  }
}