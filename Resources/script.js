let prevScrollPos=window.pageYOffset;
let i=0;
let introContent="Future Mechatronics Engineering Student at University of Waterloo";
let speed=50;
let intro=document.getElementById("introduction");

window.onscroll=function(){
    let currentScrollPos=window.pageYOffset;
    if(prevScrollPos>currentScrollPos){
        document.getElementById("navbar").style.top="0";
    }else{
        document.getElementById("navbar").style.top="-50px";
    }
    prevScrollPos=currentScrollPos;
}

function typewriter(){

    if(i<introContent.length){
        intro.innerHTML+=introContent[i];
        i++;
        setTimeout(typewriter,speed);
    }

}

window.typewriter();