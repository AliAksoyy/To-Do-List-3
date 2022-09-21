var items = ["item 1","item 2", "item 3", "item 4"]


var list = document.querySelector("#myList")
var html = ""

items.forEach((item)=> {
  html += `<li class="list-group-item">${item}</li>`;
})

list.innerHTML = html