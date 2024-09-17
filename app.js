// var text = document.querySelector("#text");
// var orderList = document.querySelector("ol");
//  let content = "";
// var arr = [];

// function render() {
   

    
//     if (text.value === ""){
//         alert("Please Fill The Field");
//     }else {
        
//          arr.push(text.value);
//          text.value = "";
//          display();
//     }
    
      
// }

// function display(){
//     content = ""
//     arr.forEach((index, item) => {
//       content += `<li> ${index}
//            <button onclick='deleteData(${item + 1})'>Delete</button>
//            <button onclick="render()">Edit</button></li>`;
//     });

//     orderList.innerHTML = content;
// }

// function deleteData(i) {
//   console.log("Delete", i);
// }



var text = document.querySelector("#text");
var orderList = document.querySelector("ol");

function render(){
    for(var i = 0; i < arr.length; i++){
        orderList.innerHTML += `<li>${arr[i]}<span><button onclick='deleteData(${i})'><i class="fa-solid fa-trash"></i></button> <button onclick='editData(${i})'><i class="fa-solid fa-pen-to-square"></i></button></span></li>`;
    }
}

var arr = [];

function addData(){
    if(text.value === "") {
        alert("Fill The Field");
    } else {
        orderList.innerHTML = "";
        arr.push(text.value);
        text.value = "";
        render();
    }
}

function deleteData(i){
    orderList.innerHTML = "";
    var deletedItem = arr[i];
    arr.splice(i, 1);
    alert(`Delete ${deletedItem} Sucessfully`);
    console.log(arr);
    render();
}

function editData(i){
    orderList.innerHTML = "";
    var editText = prompt("Enter Your Updated Text");
    arr.splice(i, 1, editText);
    render();
}