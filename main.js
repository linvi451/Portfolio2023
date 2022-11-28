
const signInWindow= document.querySelector('#signInWindow');
const signInBox= document.querySelector('#signInBox');
const logInBtn = document.querySelector('#logIn');

logInBtn.addEventListener('click',(e)=>{
    e.preventDefault()
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

//이미지 리스트
const imageWrap = document.querySelector('#imageRoll');
const imageRolles = imageWrap.querySelectorAll('li');
const imageButtons = document.querySelectorAll('#imageLine>li');
const imageNum = imageRolles.length;
console.log(imageButtons);
//let rolling = setInterval(roll,3000);;
let paused = false;
let index=0;
let rolling;
movePageRollig();
function rollPage(){
    paused = false;
    rolling = setInterval(()=>{
        index++;
        if(index>=imageNum){
            index=0;
        } 
        updateRolling();
        console.log(index);
    },3000);
};
//이미지 클릭
function stopAutoRolling(){
    let i= index;
    clearInterval(rolling);
};
function movePageRollig(){
    if(!paused){
        rollPage();
    }

}
//변경 함수
function updateRolling(){
    imageRolles.forEach((imageRoll,index)=>{
        imageRoll.classList.remove('on')
        imageButtons[index].classList.remove('on');
    });
    imageButtons[index].classList.add('on');
    imageRolles[index].classList.add('on');
}
//클릭이벤트
imageButtons.forEach((imageButton,i)=>imageLine.addEventListener('click',()=>{
    paused=true;
    stopAutoRolling();
    imageRolles.forEach((imageRoll,i)=>{
        imageRoll.classList.remove('on')
        imageButtons[i].classList.remove('on');
    });
    imageButtons[i].classList.add('on');
    imageRolles[i].classList.add('on');
    setTimeout(() => {
        paused = false; 
        movePageRollig();
    }, 1000);
}));