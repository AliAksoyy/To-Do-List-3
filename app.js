var items = ["item 1","item 2", "item 3", "item 4"]


let list = document.querySelector("#myList")
let input = document.querySelector("#txtItem")

// ** Alternative working
// var html = ""

// items.forEach((item)=> {
//   html += `<li class="list-group-item">${item}</li>`;
// })

// list.innerHTML = html

items.forEach(function(item) {
  
  let li = document.createElement("li")
  li.setAttribute("class","list-group-item")
  
  let text = document.createTextNode(item)
  li.append(text)
  let span = document.createElement("span")
  span.className = "close"
  let content = document.createTextNode("X")
  span.appendChild(content)
  li.append(span)
  list.appendChild(li)

})

list.addEventListener("click", function(e) {
  if(e.target.tagName = "li") {
    e.target.classList.toggle("checked")
  }
})