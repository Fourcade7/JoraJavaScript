


let searchInput=document.getElementById('searchInput');
let productList=document.getElementById('productList');


let allproducts=[
    {pname:"HeadPhone LG",pimage:"images/headphone.jpg",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Tecno Pova Neo 2",pimage:"https://www.mobicom.ru/upload/iblock/1f4/lov74ojh21b9cso7eg9a2jv02l3gzul6.jpeg",category:"Монитор",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Asus ROG",pimage:"images/laptopasusrog.jpg",category:"Ноутбук",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Monitor LG",pimage:"images/lggamemonitors.jpg",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Cougar creslo",pimage:"images/kreslocoguar.jpg",category:"Монитор",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
]
function productItem(pname,pimage,category,count,datatime,price1,price2,price3){
   return ` <div class="col pritem">
             <div class="card">
               <img src="${pimage}" class="card-img-top border" style="object-fit: contain; height: 150px;">
                <div class="div d-flex flex-column p-2">
                 <div class="fs-6 fw-bold">${pname}</div>
                 <div id="" class="pcategory"><small>${category}</small></div>
                 <div class="bg-secondary rounded-1 text-light ps-2"><small>${count}</small></div>
                 <div class=""><small>${datatime}</small></div>
                
                 <div class="mt-2"><small>${price1}</small></div>
                 <div class=""><small>${price2}</small></div>
                 <div class="bg-primary rounded-1 text-light ps-2"><small>${price3}</small></div>
                </div>               
              
             </div>
           </div>`
}

for(let i=0;i<allproducts.length;i++){
   
   let item=productItem(allproducts[i].pname,allproducts[i].pimage, allproducts[i].category, allproducts[i].count, allproducts[i].datatime, allproducts[i].price1, allproducts[i].price2, allproducts[i].price3)
   productList.insertAdjacentHTML("beforeend", item);
   
}


let listGroup=document.getElementById("listGroup");


let menuList = ["Телефон","Монитор","Ноутбук"];



for(let i=0;i<menuList.length;i++){
    console.log(listGroup[i]);
    let item='<a href="#" class="list-group-item list-group-item-action">'+menuList[i]+'</a>';
    listGroup.insertAdjacentHTML("beforeend", item);
    
}


let listGroupItems=document.querySelectorAll(".list-group-item");
listGroupItems.forEach(listItem => {

   listItem.addEventListener('click', ()=>{
     
       document.querySelector(".active").classList.remove("active");
       listItem.classList.add('active');
       if(listItem.textContent.trim()=="Все продукты"){
           searchInput.value="";
       }else{
           searchInput.value=listItem.textContent.trim();
       }        
       
       //searchInput.focus();
       searchInput.dispatchEvent(new Event('keyup'));
       console.log(`${listItem.textContent.trim()}`);
       console.log("clicked");
   })

})



serarchProducts();

function serarchProducts(){
   searchInput.addEventListener('keyup', function() {
   let filter = this.value.toLowerCase();
   let productList = document.getElementById('productList');   
   let products = productList.getElementsByClassName('pritem');

   for (let i = 0; i < products.length; i++) {
       let productName = products[i].getElementsByClassName('fw-bold')[0].textContent.toLowerCase();
       let pcategoryName = products[i].getElementsByClassName('pcategory')[0].textContent.toLowerCase();
       if (productName.indexOf(filter) > -1  || pcategoryName.indexOf(filter) > -1) {
           products[i].style.display = "";
       } else {
           products[i].style.display = "none";
       }
   }
});
}

