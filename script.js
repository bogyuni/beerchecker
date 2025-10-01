window.onload = () => {
    const resultBtn = document.querySelector('#resultAction');
    resultBtn.addEventListener('click', function(){
       const ML = document.querySelector('#ML');
       const QTY = document.querySelector('#QTY');
       const WON = document.querySelector('#WON');
       const standard = 500;
       const resultWON = document.querySelector('#resultWON');
       const oneCanToWon = WON / (ML * QTY / standard);
       resultWON.innerHTML = oneCanToWon;
    });
    //const winw = window.innerWidth;
    //alert(winw);
}