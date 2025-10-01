window.onload = () => {
    const resultBtn = document.querySelector('#resultAction');
    resultBtn.addEventListener('click', function(){
       const ML = parseInt(document.querySelector('#ML').value);
       const QTY = parseInt(document.querySelector('#QTY').value);
       const WON = parseInt(document.querySelector('#WON').value);
       const standard = 500;
       const resultWON = document.querySelector('#resultWON');
       const oneCanToWon = WON / (ML * QTY / standard);
       alert(oneCanToWon);
       resultWON.innerHTML = oneCanToWon;
    });
    //const winw = window.innerWidth;
    //alert(winw);
}