var modal = document.querySelector(".modal");
var modalContent = document.querySelectorAll(".modal-content");
var hamModal = document.querySelector(".hamModal");
var hamCnt = 0;
var hideCnt = 0;

function closeDiv() {
    modal.style.display = "none";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(".modArea").value = "";
}
try {
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    btn.onclick = function (div) {
        modal.style.display = "block";
        for (var i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
        document.querySelector(div).style.display = "block";
        return false;
    }
}
catch (ex) { }

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

// When the user clicks on <span> (x), close the modal
function closeSpan() {
    modal.style.display = "none";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(".modArea").value = "";
}
function showModal(div) {
    modal.style.display = "block";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(div).style.display = "block";
}
function showModal2(div,tit) {
    modal.style.display = "block";
    for (var i = 0; i < modalContent.length; i++) {
        modalContent[i].style.display = "none";
    }
    document.querySelector(".modInp").value = tit;
    document.querySelector(div).style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.querySelector(".modArea").value = "";
        for (var i = 0; i < modalContent.length; i++) {
            modalContent[i].style.display = "none";
        }
        //document.querySelector(div).style.display = "block";
    }
    var wSize = Number(window.screen.availWidth);
    if(wSize < 768){
        if(hamCnt == 0){
            //alert(event.target.innerHTML);
            if(event.target == hamModal){
                //alert("testing")
                onHam();
            }
        } 
        
    }
   
}
