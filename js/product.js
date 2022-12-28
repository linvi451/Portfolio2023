import products from './productData.js'
//리스트
const productBox = document.querySelector('.productbox');
products.map((product,index)=>{
    let i = index;
    let Plist = document.createElement('li');
    Plist.innerHTML=
    `
    <div class="listBox">
        <a href="#">
            <div class="productImgBox">
                <img src=${product.src} alt=${product.alt}>
            </div>
            <div class="productTextBox">
                <p class="productTitle">${product.Pname}</p>
                <p class="productPrice">${product.price}</p>
            </div>
        </a>
        <div class="iconList">
            <div class="tagList">
                <span class="newTag">${product.new}</span>
                <span class="typeTag">${product.type}</span>
            </div>
            <div class="shopList">
                <span><i class="far fa-heart"></i></span>
                <span><i class="fa-solid fa-cart-shopping"></i></span>
            </div>
        </div>
    </div>
    `;
    productBox.appendChild(Plist);
}
);
const productNewTag = document.querySelectorAll('.newTag');
productNewTag.forEach((productNT,index)=>{
    if(productNT.innerHTML===""){
        productNT.remove()
    }
})
const productTypeTag = document.querySelectorAll('.typeTag');
productTypeTag.forEach((productTT,index)=>{
    if(productTT.innerHTML===""){
        productTT.remove()
    }
})

//클릭 후 아이콘 알림
const cartIcones = document.querySelectorAll('.fa-cart-shopping');
const favorates = document.querySelectorAll('.fa-heart');
cartIcones.forEach(cartIcon=>cartIcon.addEventListener('click',()=>{
    alert('장바구니에 추가되었습니다');
}))

favorates.forEach(favorate=>{
    favorate.addEventListener('click',()=>{
    favorate.classList.toggle('fas');

    })
});
