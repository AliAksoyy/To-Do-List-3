var items = ["item 1","item 2", "item 3", "item 4"]

let button = document.querySelector(".btn")
let list = document.querySelector("#myList")
let input = document.querySelector("#txtItem")

// ** Alternative working

// items.forEach(function(item) {
//     list.innerHTML += `<li class="list-group-item">${item}
//                             <span class="close">&times;</span>
//                         </li>`;
// })



items.forEach(function(item) {
  let li = document.createElement("li");
  li.setAttribute("class", "list-group-item");

  let text = document.createTextNode(item);
  li.append(text);
  let span = document.createElement("span");
  span.className = "close";
  let content = document.createTextNode("X");
  span.appendChild(content);
  li.append(span);
  list.appendChild(li);

  
})

list.addEventListener("click", function(e) {
  if(e.target.tagName = "li") {
    e.target.classList.toggle("checked")
  }

})

close = document.querySelectorAll(".close")
//* 1 çözüzmm
// close.forEach((i)=> {
//        i.addEventListener("click", (a)=> {
//         if(a.target.classList.contains("close")) {
//           i.parentElement.remove()
//         }
//        })
// })
for(let i = 0; i<close.length; i++) {

  close[i].onclick = function() {
    const li = this.parentElement
    li.style.display = "none"
  }
}

button.onclick = ()=> {

  if(!input.value) {
    alert("Please something write")
  }else {
    list.innerHTML += `<li class="list-group-item">${input.value}
    <span class="close">X</span></li>`;
    input.value =""
  }
}






