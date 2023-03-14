/* 
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello 
screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine 
grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare 
solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente 
servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la 
renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà 
visualizzata al posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente 
clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne 
quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura 
attiva. 
*/

/*
IMAGE
<div class="image">
    <img src="./img/01.webp" class="img-fluid h-100" alt="">
</div>

THUMB
<div class="thumb w-100 d-flex justify-content-center active">
    <img src="./img/01.webp" class="h-100" alt="">
</div>
*/

const imagesArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];

const imgBig = document.getElementById('images');
const imgThumb = document.getElementById('thumbs');
let image = "";
let thumb = "";
let currentIndex = 0;

for (i = 0; i < imagesArray.length ; i++){
    image +=   `<div class="image d-none">
                        <img src="${imagesArray[i]}" class="img-fluid h-100" alt="">
                </div>`;

    thumb +=   `<div class="thumb w-100 d-flex justify-content-center opacity">
                    <img src="${imagesArray[i]}" class="h-100" alt="">
                </div>`;
}

imgBig.innerHTML = image;
document.querySelectorAll('.image')[currentIndex].classList.remove('d-none');
imgThumb.innerHTML += thumb;

const next = document.getElementById('next');
next.addEventListener('click', nextImage);


const prev = document.getElementById('prev');
prev.addEventListener('click', prevImage);



