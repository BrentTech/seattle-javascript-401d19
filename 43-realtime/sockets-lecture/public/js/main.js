const socket = io();

// <form id="send-message-form">
//   <input id="message-input"></input>
//   <button type="submit">send</button>
// </form>

// <div id="messages"></div>

let sendMessageForm = document.getElementById('send-message-form')
let messageInput = document.getElementById('message-input')
let messagesContainer = document.getElementById('messages')

sendMessageForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let message = messageInput.value
  socket.emit('send-message', {message: message})
})

socket.on('receive-message', (data) => {
  console.log('MSG', data)
  let message = new ChatMessage(data)
  message.render(messagesContainer)
})

let setUsernameForm = document.getElementById('set-username-form')
let usernameInput = document.getElementById('username-input')

setUsernameForm.addEventListener('submit', (ev) => {
  ev.preventDefault()
  let username = usernameInput.value
  socket.emit('set-username', {username: username})
})
