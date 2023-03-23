function prevImage (){
    document.querySelectorAll('.image')[currentIndex].classList.add('d-none');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    if (currentIndex === 0){
        currentIndex = imagesArray.length -1;
    }else{
        currentIndex--;
    }
    document.querySelectorAll('.image')[currentIndex].classList.remove('d-none');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');
}

function nextImage (){
    document.querySelectorAll('.image')[currentIndex].classList.add('d-none');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('active');
    if (currentIndex === imagesArray.length -1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    document.querySelectorAll('.image')[currentIndex].classList.remove('d-none');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('active');
}

function stopInterval(){
    clearInterval(nextTimer);
}

function startInterval(){
    nextTimer = setInterval(nextImage, 2000);
}