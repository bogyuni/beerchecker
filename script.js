window.onload = () => {
    const btn = document.querySelector('#resultAction');
    btn.addEventListener('click', function(){
        alert(btn);
    });
    const winw = window.innerWidth;
    alert(winw);
}