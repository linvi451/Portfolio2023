
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
//let rolling = setInterval(roll,3000);;
let pause = false;
let index=0;
let rolling;
move();
function roll(){
    pause = false;
    rolling = setInterval(()=>{
        index++;
        if(index>=imageNum){
            index=0;
        } 
        update();
    },3000);
};
//이미지 클릭
function rollStop(){

    clearInterval(rolling);
};
function move(){
    if(!pause){
        roll();
    }
}
//변경 함수
function update(){
    imageRolles.forEach(imageRoll=>imageRoll.classList.remove('on'));
    imageLines.forEach(imageLine=>imageLine.classList.remove('on'));
    imageLines[index].classList.add('on');
    imageRolles[index].classList.add('on');
}
//클릭이벤트
imageLines.forEach((imageLine,index)=>imageLine.addEventListener('click',()=>{
    pause=true;
    rollStop();
    imageRolles.forEach(imageRoll=>imageRoll.classList.remove('on'));
    imageLines.forEach(imageLine=>imageLine.classList.remove('on'));
    imageLines[index].classList.add('on');
    imageRolles[index].classList.add('on');
    console.log(index);
    setTimeout(() => {
        pause = false;
        move();
    }, 1000);
}));

