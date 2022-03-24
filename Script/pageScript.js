var body = document.querySelector("body");
var ham = document.querySelector(".hamImg");
var winWidth2 = Number(window.screen.availWidth);
var hamCnt = 0;
var hideCnt = 0;
var tel = document.querySelector(".telSpan");
var lang = document.querySelector(".langSpan");
var hide = document.querySelector(".toggleBtn");
var modSendBtn = document.querySelector(".modBtnSpan");
var hamModal = document.querySelector(".hamModal");


body.onload = function(){
    
    try{ 
        testScreen();
    }
    catch(er){ }
    
    
}
try{
    ham.onclick = function(){
        onHam(); 
    }
    tel.onmouseover = function(){
        document.querySelector(".telDiv").style.display = "block";
    }
    tel.onmouseout = function(){
        document.querySelector(".telDiv").style.display = "none";
    }
    lang.onmouseover = function(){
        document.querySelector(".divLang").style.display = "block";
    }
    lang.onmouseout = function(){
        document.querySelector(".divLang").style.display = "none";
    }
    
    hide.onclick = function(){
        onHide();
    }
    
    modSendBtn.onclick = function(){
        sendPhrase();
    }
}
catch(err){ }





function onHam(){
    var winWidth3 = Number(window.screen.availWidth);
    if(hamCnt == 0){
        hamCnt++;
        document.querySelector(".hamImg").setAttribute("src","Images/panHam2.png");
        let navLen = document.querySelectorAll(".navUl li a").length;
        let remLen = document.querySelectorAll(".rem").length;  
        let newLen =  document.querySelectorAll(".navUl li > img:last-child").length;
        //alert(newLen);    
        for(let i = 0;i < (navLen);i++ ){
            document.querySelectorAll(".navUl li > a")[i].style.display = "none";
           
            document.querySelector(".navUl").style.height = "88%";
           
        }
        for(let uL = 0;uL < newLen;uL++){
            document.querySelectorAll(".navUl li > img:last-child")[uL].style.display = "none";
        }

        for(let k = 0; k < remLen; k++){
            document.querySelectorAll(".rem")[k].style.display = "none";
        }
        document.querySelector(".allow").style.display = "block";
        if(winWidth3 > 767){
            document.querySelector("#divNavContainer").style.width = "58px";
            document.querySelector("#divMainContainer").style.maxWidth = "calc(100% - 58px)";
            document.querySelector("#divMainContainer").style.marginLeft = "58px";
        }
        else{
            document.querySelector("#divNavContainer").style.width = "0px";
            document.querySelector(".divSetting").style.display = "none";
            document.querySelector("#divMainContainer").style.maxWidth= "100%";
            document.querySelector("#divMainContainer").style.marginLeft = "0px";
            hamModal.style.display = "none";
        }

        
    }
    else{
        hamCnt = 0;
        document.querySelector(".hamImg").setAttribute("src","Images/panHam.png");
        document.querySelector("#divNavContainer").style.width = "240px";
        let navLen2 = document.querySelectorAll(".navUl li a").length;
        let remLen2 = document.querySelectorAll(".rem").length; 
        let newLen2 =  document.querySelectorAll(".navUl li > img:last-child").length;
        for(let j = 0;j < navLen2;j++ ){
            document.querySelectorAll(".navUl li > a")[j].style.display = "inline-block";            
        }
        for(let iL = 0;iL < newLen2;iL++){
            document.querySelectorAll(".navUl li > img:last-child")[iL].style.display = "inline-block";
        }
        for(let l = 0; l < remLen2; l++){
            document.querySelectorAll(".rem")[l].style.display = "block";
        }
        document.querySelector(".allow").style.display = "none";
        if(winWidth3 > 767){
            document.querySelector(".navUl").style.height = "78%";
            document.querySelector("#divMainContainer").style.maxWidth= "calc(100% - 240px)";
            document.querySelector("#divMainContainer").style.marginLeft = "240px";

        }
        else{
            document.querySelector(".navUl").style.height = "75%";
           // document.querySelector(".divSetting").style.display = "none";
            document.querySelector(".divSetting").style.display = "block";
            hamModal.style.display = "block";

        }

    }
}

function testScreen(){   
    if(winWidth2 <= 767){
        onHam();
    }
}

function onHide(){
     if(hideCnt == 0){
         hideCnt++;
         document.querySelector(".noticeDetails").style.display = "block";
         document.querySelector(".toggleBtn").innerHTML = "Hide";
         document.querySelector(".detailIcon").style.transform = "rotateZ(180deg)";
     }
     else{
         hideCnt = 0;
         document.querySelector(".noticeDetails").style.display = "none";
         document.querySelector(".toggleBtn").innerHTML = "Details";
         document.querySelector(".detailIcon").style.transform = "rotateZ(0deg)";
     }
}

function closeSpan() {
    alert("test");
    modal.style.display = "none";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(".modArea").value = "";
}

function  sendPhrase() {
    closeSpan();
}






