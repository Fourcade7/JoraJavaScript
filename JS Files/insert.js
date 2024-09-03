// const listGroup=document.getElementById("listGroup");

// const menuList = ["Home","About","Contact","View All",'kak'];

// for(let i=0;i<menuList.length;i++){
//     console.log(listGroup[i]);
//     let item='<a class="list-group-item list-group-item-action">'+menuList[i]+'</a>';
//     listGroup.insertAdjacentHTML("beforeend", item);

// }

let dropdownItems = document.querySelectorAll(".dropdown-item");
let btnDropDown1 = document.getElementById("btnDropDown1");
let btnDropDown2 = document.getElementById("btnDropDown2");
let btnDropDown3 = document.getElementById("btnDropDown3");
let imgForInput = document.getElementById("imgForInput");
let inputFile = document.getElementById("inputFile");

let currentButton = "";

btnDropDown1.addEventListener("click", () => {
  currentButton = "btnDropDown1";
});

btnDropDown2.addEventListener("click", () => {
  currentButton =  "btnDropDown2";
});

btnDropDown3.addEventListener("click", () => {
  currentButton =  "btnDropDown3";
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    switch (currentButton) {
      case "btnDropDown1":
        btnDropDown1.textContent = item.textContent;
        break;
      case "btnDropDown2":
        btnDropDown2.textContent = item.textContent;
        break;
      case "btnDropDown3":
        btnDropDown3.textContent = item.textContent;
        break;
    }
btnDropDown3.textContent = item.textContent;
    console.log(currentButton);

  });
});


inputFile.onchange=function(){
    imgForInput.src=URL.createObjectURL(inputFile.files[0]);
}
