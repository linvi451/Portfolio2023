import products from './productData.js'
//리스트
const productBox = document.querySelector('.productbox');
const productList = productBox.querySelectorAll('li');
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
            <div class="tagList">
                <span>NEW</span>
                <span>BEST</span>
            </div>
        </div>
    `;
    console.log(Plist,i);
    productBox.appendChild(Plist);
}
);
        
//productList.appendChild(setList);