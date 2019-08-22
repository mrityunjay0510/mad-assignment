window.onload=function(){

    var mainDiv = document.getElementById("maindiv");

    showQualitySlide().changeSlide();

}

function showQualitySlide(){
    var slideIndex=0;  
    var qualities=['Single Application',' Verified Avenues','Trusted Advisors'];
    changeSlide();

    function changeSlide(){
        var qualitydiv = document.getElementById("quality_div");
        if(slideIndex===qualities.length){
            slideIndex=0;
        } 
        qualitydiv.innerText=qualities[slideIndex++];
        setTimeout(changeSlide,3000);
    }
}