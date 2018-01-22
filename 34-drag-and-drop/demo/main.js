let dragging = null

let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('dragstart', handleDragStart);
  lis[i].addEventListener('dragend', handleDragEnd);
}

let uls = document.getElementsByTagName('ul');
for (let i = 0; i < uls.length; i++) {
  uls[i].addEventListener('dragover', (e) => { e.preventDefault() });
  uls[i].addEventListener('drop', handleDrop);
}

let deleteDiv = document.getElementById('delete');
deleteDiv.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'link'
})
deleteDiv.addEventListener('drop', handleDelete)


function handleDragStart(ev) {
  dragging = ev.target;
  ev.dataTransfer.setData('application/json', JSON.stringify(new Date()))
}

function handleDrop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData('application/json');

  ev.currentTarget.appendChild(dragging)
  dragging = null;
}

function handleDelete(ev) {
  ev.preventDefault();
  dragging.parentElement.removeChild(dragging);
  dragging = null;
}

function handleDragEnd(ev) {
  ev.preventDefault();
  dragging = null;
}
