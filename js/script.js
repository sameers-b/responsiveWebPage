var imgNo=0;
    function slider() {
        var slide=document.getElementsByClassName("team-card");
        console.log(slide[2].innerHTML)
        var indicator=document.getElementsByClassName("indicator");
        for(var i=0;i<1;i++){
            j=slide[i+1].innerHTML;
            slide[i+1].innerHTML=slide[i].innerHTML;
            k=slide[i+2].innerHTML;
            slide[i+2].innerHTML=j;
            slide[i].innerHTML=k;
        }
        for(i=0;i<slide.length;i++){   
            indicator[i].style.background="transparent";
        }
    //    slide[imgNo].style.display="block";
       indicator[imgNo].style.background="tomato";
       imgNo++;
       if(imgNo==3) imgNo=0; 
    }
    window.setInterval("slider()",1500);
    
    let menuCount=0
    let menu = document.querySelector('.menu-btn');
    let mobNav = document.querySelector('.mob-nav');
    menu.addEventListener("click", function(){
        if(menuCount==0){
           mobNav.style.transform="translateX(-1px)";
           menuCount++;
        }else{
            mobNav.style.transform="translateX(200px)";
            menuCount=0
        }  
    });
    
