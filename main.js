
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
let rolling = setInterval(roll,3000);;
let i=0;
//이미지 롤링
function roll(){
    i++;
    if(i>=imageNum){
        i=0;
    } 
    imageRolles.forEach(imageRoll=>imageRoll.classList.remove('on'));
    imageLines.forEach(imageLine=>imageLine.classList.remove('on'));
    imageLines[i].classList.add('on');
    imageRolles[i].classList.add('on');
    console.log(i);
};

//클릭이벤트
imageLines.forEach((imageLine,index)=>imageLine.addEventListener('click',()=>{
    clearInterval(rolling);
    imageRolles.forEach(imageRoll=>imageRoll.classList.remove('on'));
    imageLines.forEach(imageLine=>imageLine.classList.remove('on'));
    imageLines[index].classList.add('on');
    imageRolles[index].classList.add('on');
    setTimeout(setInterval(roll,3000),2000);
}));

