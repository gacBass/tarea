document.addEventListener('DOMContentLoaded', () => {

    let likeCounter = 0;
    let comentarioLabel;
    let addCommentBtn;
    let meGusta = document.getElementById('meGusta');
    let likes = document.getElementById('likes');
    let reset = document.getElementById('reset');
    let body = document.getElementById('body');
    let div = document.getElementById('div');
    let display = document.getElementById('display');
    let showDiv = document.getElementById('show');
    let comment = document.getElementById('comment');


    //   nodes

    let nodeShow = document.querySelector('button#show');
    let nodeDisplay = document.querySelector('button#display');






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
        div.style.display = 'none';
        nodeDisplay.disabled = true;
        nodeShow.disabled = false;
        display.style.cursor = 'not-allowed';
        showDiv.style.cursor = '';



    }

    function show() {
        div.style.display = '';
        nodeDisplay.disabled = false;
        nodeShow.disabled = true;
        showDiv.style.cursor = 'not-allowed';
        display.style.cursor = '';


    }

    function alerta() {

        alert("we are working on this part of the app, thanks in advance!");
        comentarioLabel.remove();
        addCommentBtn.remove();
        comment.disabled = false;

    }

    function addComment() {
        comentarioLabel = document.createElement('input');
        btn = document.createElement('button');
        btn.textContent = 'Agregar';
        btn.id = 'botonAddComment';
        div.appendChild(comentarioLabel);
        div.appendChild(btn);
        comment.disabled = true;
        addCommentBtn = document.getElementById('botonAddComment');
        addCommentBtn.addEventListener('click', alerta);
    }


    reset.addEventListener('click', reseting);
    meGusta.addEventListener('click', color);
    display.addEventListener('click', hide);
    showDiv.addEventListener('click', show);
    comment.addEventListener('click', addComment);




    loadLikes();

})