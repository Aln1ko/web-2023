var images = [
    "./assets/img/cat1.png",
    "./assets/img/cat2.png",
    "./assets/img/cat3.png",
    "./assets/img/cat4.png",
    "./assets/img/cat5.png",
    "./assets/img/cat6.png",
    "./assets/img/cat7.png",
    "./assets/img/cat8.png",
    "./assets/img/cat9.png",
    "./assets/img/cat10.png"
]
var index = 0;

function openPopup(img){
    document.querySelector('.popup').style.display ='block';
    document.querySelector('.popup-img').src = img.getAttribute('src');
    index = images.indexOf(img.getAttribute('src'));
}

function closepopup(){
    document.querySelector('.popup').style.display = 'none'
}

function changeimage(num){
    index += num;
    if(index > images.length - 1) index = 0;
    else if(index < 0) index = images.length-1;
    document.querySelector('.popup-img').src = images[index];
}
