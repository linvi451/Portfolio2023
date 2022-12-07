
const signInWindow= document.querySelector('#signInWindow');
const signInBox= document.querySelector('#signInBox');
const logInBtn = document.querySelector('#logIn');

logInBtn.addEventListener('click',(e)=>{
    // signInWindow.classList.remove('noShow');
    signInWindow.classList.toggle('show');
})
signInWindow.addEventListener('click',(e)=>{
    if(e.target == signInWindow){
        signInWindow.classList.remove('show');
        signInWindow.classList.add('noShow');
    }
});
//메뉴창
const forList = document.querySelectorAll('.for');
const listBoxes = document.querySelectorAll('.listBox');
forList.forEach((forL,index)=>forL.addEventListener('click',()=>{
    forList.forEach(forL=>forL.classList.remove('click'));
    forL.classList.add('click');
    listBoxes.forEach(listBox=>listBox.classList.remove('selected'))
    listBoxes[index].classList.add('selected');
}));
