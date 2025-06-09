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
    let counter = document.getElementById('counter');
    let totals = document.getElementById('totals');
    let counterSumClick = 0;
    let counterOne = 0;



    //   nodes

    let nodeShow = document.querySelector('button#show');
    let nodeDisplay = document.querySelector('button#display');


    let sum = document.createElement('p');



    function loadLikes() {

        let storage = localStorage.getItem('myLikeCount');
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
        counter.disabled = false;

    })

    function reseting() {
        localStorage.setItem('myLikeCount', 0);
        likeCounter = 0;
        loadLikes();
        window.location.reload();



    }

    function changeColor(colorNunber) {

        let num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
        let color = '#' + colorNunber + num
        return color;
    }

    function color() {

        reset.style.color = changeColor('ff');
        meGusta.style.color = changeColor('55');
        body.style.backgroundColor = changeColor('22');
        div.style.backgroundColor = changeColor('77');

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

    function count() {

        counterOne += likeCounter;
        likeCounter = 0;
        likes.textContent = 0;
        totals.disabled = false;
        counter.style.backgroundColor = 'green';
        counterSumClick += 1;
        sum.textContent = counterSumClick;

        counter.appendChild(sum);


    }

    function total() {

        likes.textContent = counterOne;



    }

    reset.addEventListener('click', reseting);
    meGusta.addEventListener('click', color);
    display.addEventListener('click', hide);
    showDiv.addEventListener('click', show);
    comment.addEventListener('click', addComment);
    counter.addEventListener('click', count);
    totals.addEventListener('click', total);




    loadLikes();

})