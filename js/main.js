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
//let rolling = setInterval(roll,3000);;
let paused = false;
let index=0;
let rolling;
//이미지 페이드인 함수
movePageRollig();
function rollPage(){
    paused = false;
    rolling = setInterval(()=>{
        index++;
        if(index>=imageNum){
            index=0;
            
        } 
        updateRolling();
    },3000);
};
//이미지 클릭
function stopAutoRolling(){
    if(paused==true){
        // rollPage();
        clearInterval(rolling);
    }
};
function movePageRollig(){
    if(paused==false){
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
imageButtons.forEach((imageButton,index)=>imageButton.addEventListener('click',(e)=>{
    paused=true;
    let imageIndex = imageRolles[index];
    stopAutoRolling();
    imageRolles.forEach((imageRoll,index)=>{
        imageRoll.classList.remove('on')
        imageButtons[index].classList.remove('on');
    });
    imageButtons[index].classList.add('on');
    imageRolles[index].classList.add('on');
    setTimeout(() => {
        imageIndex=index;
        paused = false;
        movePageRollig(); 
    }, 1000);
}));
//섹션 3 이미지 롤링
const infoImageRollingWrap = document.querySelector('.infoBox');
const infoImageRoll = infoImageRollingWrap.querySelectorAll('li');
const infoImageButtons = document.querySelectorAll('#infoBtn>li');
const infoImageRollNum = infoImageRoll.length;
//이미지 롤링 함수;
function rollPage2(){
    let index=0;
    paused = false;
    rolling = setInterval(()=>{
        index++;
        if(index>=infoImageRollNum){
            index=0;
            
        } 
        updateRolling2();

    },3000);
};
//이미지 클릭
function stopAutoRolling2(){
    if(paused==true){
        // rollPage();
        clearInterval(rolling);
    }
};
function movePageRollig2(){
    if(paused==false){
        rollPage2();
    }
}
movePageRollig2();
function updateRolling2(){
    infoImageRoll.forEach((imageRoll,index)=>{
        imageRoll.classList.remove('on')
        infoImageButtons[index].classList.remove('on');
    });
    infoImageButtons[index].classList.add('on');
    infoImageRoll[index].classList.add('on');
}
infoImageButtons.forEach((infoImageButton,index)=>infoImageButton.addEventListener('click',()=>{
    paused=true;
    let imageIndex = infoImageRoll[index];
    stopAutoRolling2();
    infoImageRoll.forEach((imageRoll,index)=>{
        imageRoll.classList.remove('on')
        infoImageButtons[index].classList.remove('on');
    });
    infoImageButtons[index].classList.add('on');
    infoImageRoll[index].classList.add('on');
    setTimeout(() => {
        imageIndex=index;
        paused = false;
        movePageRollig2(); 
    }, 2000);
}))