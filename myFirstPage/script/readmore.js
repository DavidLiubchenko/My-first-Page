//параметры для отсеживания состояния
let trackMassReadmoreImg = [true,true,true];
let trackMassReadmoreVid = [true,true,true];


//изменение клавиши для текста под картинками 

readMoreImg1.onclick = function(){
    let changeElement = document.getElementById('forImgOverflow1');
    
    if(trackMassReadmoreVid[0]){
        changeElement.style.overflow = "auto";
        //changeElement.style.height = "90px";
        readMoreImg1.innerHTML ="Less ...";
        trackMassReadmoreVid[0]=false;
    }else{
        changeElement.style.overflow = "hidden";
        //changeElement.style.height = "65px";
        readMoreImg1.innerHTML ="Read More...";
        trackMassReadmoreVid[0]=true;
    }
}

readMoreImg2.onclick = function(){
    let changeElement = document.getElementById('forImgOverflow2');

    if(trackMassReadmoreVid[0]){
        changeElement.style.overflow = "auto";
        readMoreImg2.innerHTML ="Less ...";
        trackMassReadmoreVid[0]=false;
    }else{
        changeElement.style.overflow = "hidden";
        readMoreImg2.innerHTML ="Read More...";
        trackMassReadmoreVid[0]=true;
    }
}

readMoreImg3.onclick = function(){
    let changeElement = document.getElementById('forImgOverflow3');

    if(trackMassReadmoreVid[0]){
        changeElement.style.overflow = "auto";
        readMoreImg3.innerHTML ="Less ...";
        trackMassReadmoreVid[0]=false;
    }else{
        changeElement.style.overflow = "hidden";
        readMoreImg3.innerHTML ="Read More...";
        trackMassReadmoreVid[0]=true;
    }
}


//теперь ... под видео 
document.getElementById('readMoreVid1').onclick = function(){
    let changeElement = document.getElementById('forVidOverflow1');
    if(trackMassReadmoreVid[0]){
        changeElement.style.overflow = "auto";
        document.getElementById('readMoreVid1').innerHTML ="Less ...";
        trackMassReadmoreVid[0]=false;
    }else{
        changeElement.style.overflow = "hidden";
        document.getElementById('readMoreVid1').innerHTML ="Read More...";
        trackMassReadmoreVid[0]=true;
    }
}
document.getElementById('readMoreVid2').onclick = function(){
    let changeElement = document.getElementById('forVidOverflow2');
    if(trackMassReadmoreVid[0]){
        changeElement.style.overflow = "auto";
        document.getElementById('readMoreVid2').innerHTML ="Less ...";
        trackMassReadmoreVid[0]=false;
    }else{
        changeElement.style.overflow = "hidden";
        document.getElementById('readMoreVid2').innerHTML ="Read More...";
        trackMassReadmoreVid[0]=true;
    }
}
document.getElementById('readMoreVid3').onclick = function(){
    let changeElement = document.getElementById('forVidOverflow3');
    if(trackMassReadmoreVid[0]){
        changeElement.style.overflow = "auto";
        document.getElementById('readMoreVid3').innerHTML ="Less ...";
        trackMassReadmoreVid[0]=false;
    }else{
        changeElement.style.overflow = "hidden";
        document.getElementById('readMoreVid3').innerHTML ="Read More...";
        trackMassReadmoreVid[0]=true;
    }
}