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
    items[i].classList.add('hide')
    selectedArray.forEach(el => {
      for(let i = 0; i < items.length; i++) {
        if(items[i].classList.contains(el)) {
          items[i].classList.remove('hide')
        }
      }
    })
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
