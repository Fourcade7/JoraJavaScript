

let orderContainer=document.getElementById("orderContainer");
let orderContainer2=document.getElementById("orderContainer2");
let buttonNewOrder=document.getElementById("buttonNewOrder");
let buttonDeleteOrder=document.getElementById("buttonDeleteOrder");
let orderPrice=document.getElementById("orderPrice");
let searchInput=document.getElementById('searchInput');
let productList=document.getElementById('productList');
orderContainer.style.display="none";

var totalPrice=0;


let allproducts=[
    {pname:"Стиральная машина RENOVA",pimage:"https://ir.ozone.ru/multimedia/c1000/1021370892.jpg",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Холодильник Бирюса",pimage:"https://assets.asaxiy.uz/product/main_image/desktop/64e72b570a9b9.jpg.webp",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Lampa ",pimage:"https://avatars.mds.yandex.net/get-mpic/4413406/img_id5543930631013891514.jpeg/orig",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Бытовой пылесос ",pimage:"https://cdn1.ozone.ru/s3/multimedia-g/6408655492.jpg",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Samsung",pimage:"https://avatars.mds.yandex.net/i?id=87b9638f4dcc40e27a6724fd7b80a70b_l-9181263-images-thumbs&n=13",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Iphone 14",pimage:"https://imageio.forbes.com/specials-images/imageserve/609fbdb429b049fa8139ca1b/0x0.jpg?format=jpg&amp;crop=1130,635,x120,y0,safe&amp;height=900&amp;width=1600&amp;fit=bounds",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"HeadPhone LG",pimage:"images/headphone.jpg",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Tecno Pova Neo 2",pimage:"https://www.mobicom.ru/upload/iblock/1f4/lov74ojh21b9cso7eg9a2jv02l3gzul6.jpeg",category:"Монитор",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Asus ROG",pimage:"images/laptopasusrog.jpg",category:"Ноутбук",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Monitor LG",pimage:"images/lggamemonitors.jpg",category:"Телефон",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
    {pname:"Cougar creslo",pimage:"images/kreslocoguar.jpg",category:"Монитор",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
]

function productItem(pname,pimage,category,count,datatime,price1,price2,price3){
    return `
            <div class="col pritem">
              <div class="card h-100">
                <img src="${pimage}" class="card-img-top borderx" style="object-fit: contain; height: 150px;">
                 <div class="d-flex flex-column p-2 h-100">
                  <div class="d-flex flex-column justify-content-center borderx" style="height: 100%;" >
                    <div class="col">
                      <div class="fs-6 fw-bold">${pname}</div>
                       <div id="" class="pcategory"><small>${category}</small></div>
                        <div class="bg-secondary rounded-1 text-light ps-2"><small>${count} Штук</small></div>
                       <div class=""><small>${datatime}</small></div>
                    </div>
                    <div  class="col d-flex flex-column justify-content-end">
                      <div class="mt-2"><small>${price1}</small></div>
                      <div class=""><small>${price2}</small></div>
                      <div class="bg-primary rounded-1 text-light ps-2"><small>${price3}</small></div>
                    </div>
                  </div>
                 </div>               
              </div>
            </div>            
            `
}


for(let i=0;i<allproducts.length;i++){
   
    let item=productItem(allproducts[i].pname,allproducts[i].pimage, allproducts[i].category, allproducts[i].count, allproducts[i].datatime, allproducts[i].price1, allproducts[i].price2, allproducts[i].price3)
    productList.insertAdjacentHTML("beforeend", item);
    
}








let selectedproducts=[
    {pname:"product3",pimage:"images/laptopasusrog.jpg",count:"72",datatime:"21/07/2024",price1:"5000",price2:"3000",price3:"8000"},
   
];
// allproducts.push({pname:"product4",pimage:"imagepng4"})
// allproducts.splice(2,1);

//allproducts=[];

console.log(selectedproducts);




buttonNewOrder.addEventListener("click", ()=>{
    orderContainer.style.display="block";
    setTimeout(function() {
        orderContainer.classList.add("show");
      }, 10);
   
    buttonNewOrder.style.display="none";
    orderPrice.textContent=0;
    totalPrice=0;
})

buttonDeleteOrder.addEventListener("click", ()=>{
    //orderContainer.style.display="none";
    orderContainer.classList.remove("show");
    setTimeout(function() {
        orderContainer.style.display = 'none';
        buttonNewOrder.style.display="block";
      }, 100);
   
})







let listGroup=document.getElementById("listGroup");

let menuList = ["Телефон","Монитор","Ноутбук"];



for(let i=0;i<menuList.length;i++){
    console.log(listGroup[i]);
    let item='<a class="list-group-item list-group-item-action">'+menuList[i]+'</a>';
    listGroup.insertAdjacentHTML("beforeend", item);
    
}







let listGroupItems=document.querySelectorAll(".list-group-item");
let pritem=document.querySelectorAll(".pritem");
let orderClosebtns=document.querySelectorAll(".orderClosebtn");



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
    })

})




for(let i=0;i<pritem.length;i++){
    pritem[i].addEventListener('click', ()=>{ 
        
        
        console.log(selectedproducts.length);
        
        console.log(allproducts[i].pname);
        selectedproducts.push(allproducts[i]);
        totalPrice=totalPrice+Number(allproducts[i].price3);
        console.log(totalPrice);
        orderPrice.textContent=totalPrice;
        readAllOrder();
        
    })
}


function readAllOrder(){
   

    if(selectedproducts.length!==0){
        let item=selectedproducts[selectedproducts.length-1];
        let orderitem=orderItem(item.pname, item.price3);
        orderContainer2.insertAdjacentHTML("beforeend", orderitem);  
        
        //console.log(Number(item.price3));
       
    }

}




function orderItem(pname,price){
    return `<div class="prorder border border-dark-subtle rounded-1  ps-2 text-dark mt-1">
                <div class="col d-flex justify-content-between align-items-center">
                   <small>${pname}</small>
                   <div class="d-flex align-items-center border p-1">                    
                    <div class="input-group input-group-sm" style="width: 150px;">
                      <span class="input-group-text bg-primary minusbutton" type="button">
                        <img class="" type="button" src="images/minus.png" alt="Bootstrap" width="13" height="13">
                      </span>
                      <input type="text" value="1" class="form-control text-center inputcount" placeholder="1">
                      <span class="input-group-text bg-primary plusbutton" type="button">
                        <img class="" type="button" src="images/addwhite.png" alt="Bootstrap" width="13" height="13">
                      </span>
                    </div>
                    
                    <small class="mx-2 price text-center" style="width: 150px;">${price}</small>                  
                      <img class="bg-secondary rounded-1 p-2 btn orderClosebtn" src="images/closewhite.png" alt="Bootstrap" width="28" height="28">
                    </div>
                </div>               
              </div>`
}


orderContainer2.addEventListener('click', (event) => {
    if (event.target.closest('.orderClosebtn')) {
        // Find the closest .pritem element (or its parent container)
        let orderItemElement = event.target.closest('.prorder');

        // Find the index of the clicked item in selectedproducts array
        let index = Array.from(orderContainer2.children).indexOf(orderItemElement);
        
        let prices =document.querySelectorAll('.price'); 
        // Remove the item from the selectedproducts array
        selectedproducts.splice(index, 1);

        // Remove the item from the DOM
        orderItemElement.remove();
        totalPrice=Number(orderPrice.textContent)-Number(prices[index].textContent);
        orderPrice.textContent=totalPrice;

        console.log(`Removed item at index ${index} `);
        console.log(`children ${orderContainer2.children} `);
        console.log(`orderItemElement ${orderItemElement} `);
    }


    if (event.target.closest('.plusbutton')) {
            
        // Find the closest .pritem element (or its parent container)
        let orderItemElement = event.target.closest('.prorder');

        let inputcounts =document.querySelectorAll('.inputcount'); 
        let prices =document.querySelectorAll('.price'); 
        // Find the index of the clicked item in selectedproducts array
        let index = Array.from(orderContainer2.children).indexOf(orderItemElement);


        let count=Number(inputcounts[index].value);
        count++;

        inputcounts[index].value=count;
        prices[index].textContent=count*Number(selectedproducts[index].price3);
        orderPrice.textContent=Number(orderPrice.textContent)+Number(selectedproducts[index].price3);
        //console.log(selectedproducts[index].price3);        
        
    }


    if (event.target.closest('.minusbutton')) {
            
        // Find the closest .pritem element (or its parent container)
        let orderItemElement = event.target.closest('.prorder');

        let inputcounts =document.querySelectorAll('.inputcount'); 
        let prices =document.querySelectorAll('.price'); 
        // Find the index of the clicked item in selectedproducts array
        let index = Array.from(orderContainer2.children).indexOf(orderItemElement);


        let count=Number(inputcounts[index].value);
        if(count>0){
             count--;
             inputcounts[index].value=count;
            prices[index].textContent=count*Number(selectedproducts[index].price3);
            orderPrice.textContent=Number(orderPrice.textContent)-Number(selectedproducts[index].price3);
        }
       

        
        //console.log(inputcount);        
        
    }

    
});



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


// for(let i=0;i<orderClosebtns.length;i++){
//     orderClosebtns[i].addEventListener('click', ()=>{       
//        selectedproducts.slice(i,1);     
//       // console.log(selectedproducts[i].pname);  
//        console.log(i);  
//     })
// }



// pritem.forEach(listItem => {


//     listItem.addEventListener('click', ()=>{
       
        
//         //console.log(allproducts[0]);
//     })

// })