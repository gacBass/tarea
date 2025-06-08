document.addEventListener('DOMContentLoaded', () => {

    let likeCounter = 0;
    let meGusta = document.getElementById('meGusta');
    let likes = document.getElementById('likes');
    let reset = document.getElementById('reset');
    let body = document.getElementById('body');
    let div = document.getElementById('div');
    let display = document.getElementById('display');
    let showDiv = document.getElementById('show');






    function loadLikes() {

        let storage = localStorage.getItem('myLikeCount');
        console.log(storage);
        if (storage !== null) {
            likeCounter = parseInt(storage);
            likes.textContent = likeCounter;
        }

    }

    function saveLikes() {

        localStorage.setItem('myLikeCount', likeCounter);
    }

    meGusta.addEventListener('click', function () {

        likeCounter += 1;
        likes.textContent = likeCounter;
        saveLikes();

    })

    function reseting() {
        localStorage.setItem('myLikeCount', 0);
        likeCounter = 0;
        loadLikes();
        window.location.reload();



    }

    function color() {

        let num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        reset.style.color = '#ff' + num;
        meGusta.style.color = '#55' + num;
        body.style.backgroundColor = '#22' + num;
        div.style.backgroundColor = '#77' + num;

    }

    function hide() {
        div.style.display = 'none'
    }

    function show() {
        div.style.display = ''
    }

    reset.addEventListener('click', reseting);
    meGusta.addEventListener('click', color);
    display.addEventListener('click', hide);
    showDiv.addEventListener('click', show);




    loadLikes();

})