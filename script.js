const items_wrapper = document.getElementById('items')
const items = document.getElementsByClassName('item')
const selectedArray = []
window.selectedArray = selectedArray

function filterItems() {
  if(selectedArray.length == 0) {
    for(let i = 0; i < items.length; i++) {
      items[i].classList.remove('hide')
    }
  }
  else {
    for(let i = 0; i < items.length; i++) {
      items[i].classList.add('hide')
    }
    for(let i = 0; i < selectedArray.length; i++) {
      for(let j = 0; j < items.length; j++) {
        if(items[j].classList.contains(selectedArray[i])) {
          items[j].classList.remove('hide')
        }
      }
    }
  }
}

function toogle_menu(id, payload) {
  if(document.getElementById(id).classList.contains('active_menu')) {
    document.getElementById(id).classList.remove('active_menu')
    let index = selectedArray.indexOf(payload)
    selectedArray.splice(index, 1)
  }
  else {
    document.getElementById(id).classList.add('active_menu')
    selectedArray.push(payload)
  }
  filterItems()
}
filterItems()

function toogle_hamburger() {
  document.getElementById('hamburger').classList.toggle('active_hamburger')
  document.getElementById('header').classList.toggle('active_header')
}
document.getElementById('hamburger').addEventListener('click', function () {
  toogle_hamburger()
})
