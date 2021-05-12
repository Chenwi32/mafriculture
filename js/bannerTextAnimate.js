
function animateBannerText(){
    const textcontainer = document.getElementById('animated-text');
    const feel = document.getElementById('feel');
    const priority = document.getElementById('priority');
    textcontainer.innerHTML = feel.innerHTML;
    setInterval( ()=>{
    if(textcontainer.innerHTML === feel.innerHTML){
        textcontainer.innerHTML = priority.innerHTML;
    }
    else{
        textcontainer.innerHTML = feel.innerHTML;
    }
  }, 6000);
}


animateBannerText()