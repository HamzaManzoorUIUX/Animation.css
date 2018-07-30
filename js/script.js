okBtn.onclick=function(){
    var animationBox=document.getElementById('firstBox');
    animationBox.className="";
    var animationName = document.getElementById("animationName");
    var nameOfAnimation=animationName.options[animationName.selectedIndex].value;
    var animationDelay = document.getElementById("animationDelay");
    var DelayOfAnimation=animationDelay.options[animationDelay.selectedIndex].value;
    var animationSpeed = document.getElementById("animationSpeed");
    var speedOfAnimation=animationSpeed.options[animationSpeed.selectedIndex].value;
    var loopOrNot=false;
    loopOrNot=document.getElementById('loopOrNot').checked;
    if(loopOrNot==true)
    animationBox.className ="animated bg-dark "+ nameOfAnimation+" "+DelayOfAnimation+" "+speedOfAnimation+" infinite";
    else if(loopOrNot==false)
    animationBox.className ="animated bg-dark "+ nameOfAnimation+" "+DelayOfAnimation+" "+speedOfAnimation;
};