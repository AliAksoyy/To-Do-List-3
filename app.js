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
 creatItem(item)

  
})

list.addEventListener("click", function(e) {

    if(e.target.tagName === "LI") {
      e.target.classList.toggle("checked")
      DeleteButton()
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
    li.classList.remove("checked")
  }
}

button.onclick = ()=> {

  if(!input.value) {
    alert("Please something write")
  }else {
    // list.innerHTML += `<li class="list-group-item">${input.value}
    // <span class="close"></span></li>`;
    // input.value =""
    creatItem(input.value);
    input.value =""
  }
}
 document.querySelector("#deleteAll").onclick = ()=> {
  let el = document.querySelectorAll(".checked")
  el.forEach((item)=> {
    item.classList.add("d-none")
  })
 }

function creatItem (item) {
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
}

function DeleteButton () {
  let checkedList = document.querySelectorAll(".list-group-item.checked")
    if(checkedList.length>0) {
      document.querySelector("#deleteAll").classList.remove("d-none")
    }else {
      document.querySelector("#deleteAll").classList.add("d-none")

    }
}






