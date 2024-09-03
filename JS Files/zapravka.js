// const listGroup=document.getElementById("listGroup");

// const menuList = ["Home","About","Contact","View All",'kak'];

// for(let i=0;i<menuList.length;i++){
//     console.log(listGroup[i]);
//     let item='<a class="list-group-item list-group-item-action">'+menuList[i]+'</a>';
//     listGroup.insertAdjacentHTML("beforeend", item);

// }

let dropdownItems = document.querySelectorAll(".dropdown-item");
let btnDropDown1 = document.getElementById("btnDropDown1");




dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
   
  btnDropDown1.textContent = item.textContent;
    console.log(currentButton);

  });
});


inputFile.onchange=function(){
    imgForInput.src=URL.createObjectURL(inputFile.files[0]);
}
