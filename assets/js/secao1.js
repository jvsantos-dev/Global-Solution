let imagens1 = ["./assets/img/acidflask.png", "./assets/img/thermometer.png", "./assets/img/pollution_7925306.png"];
let index1 = 0;
let time1 = 2000;

function slideShow1() {
    document.getElementById("imgbanner1").src = imagens1[index1];
    index1++;
    
    if (index1 === imagens1.length) {
        index1 = 0;
    }
    setTimeout(slideShow1, time1);
}

slideShow1();