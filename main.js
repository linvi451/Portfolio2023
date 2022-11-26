
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
const imageRolles = document.querySelectorAll('#imageRoll>li');
const imageLines = document.querySelectorAll('#imageLine>li');
const imageNum = imageRolles.length;
const rolling = setInterval(roll,3000);
let index=0;
//공통부분 함수지정
function imageRoll(){
    imageRolles.forEach(imageRoll=>imageRoll.classList.remove('on'));
    imageLines.forEach(imageLine=>imageLine.classList.remove('on'));
    imageLines[index].classList.add('on');
    imageRolles[index].classList.add('on');
}
//이미지 롤링
function roll(){
    index++;
    if(index>=imageNum){
        index=0;
    } 
    imageRoll();
};
roll();
//페이저에 마우스가 갔을 때, 이미지 정지
imageLines.forEach((imageLine,index)=>imageLine.addEventListener('mouseenter',()=>{
    clearInterval(rolling);
    console.log(index);
}));
imageLines.forEach((imageLine,index)=>imageLine.addEventListener('mouseleave',()=>{
    setInterval(roll,3000);
    console.log(index);
    
}));
//페이저에 마우스가 떠났을 때, 이미지 재시작

