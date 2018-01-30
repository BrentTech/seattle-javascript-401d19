console.log('working')

const socket = io();
console.log('ID:', socket.id)


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
  console.log('RECEIVED:', data)
  let div = document.createElement('div')
  div.innerHTML = data.message
  messagesContainer.appendChild(div)
})