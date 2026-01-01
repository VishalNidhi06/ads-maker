const poster = document.getElementById("poster");
const posterShop = document.getElementById("posterShop");
const posterD1 = document.getElementById("posterD1");
const posterD2 = document.getElementById("posterD2");

shopName.oninput = () => posterShop.innerText = shopName.value;
detail1.oninput = () => posterD1.innerText = detail1.value;
detail2.oninput = () => posterD2.innerText = detail2.value;

shopColor.oninput = () => posterShop.style.color = shopColor.value;
detailColor.oninput = () => {
  posterD1.style.color = detailColor.value;
  posterD2.style.color = detailColor.value;
};

shopSize.oninput = () =>
  posterShop.style.fontSize = shopSize.value + "px";

detailSize.oninput = () => {
  posterD1.style.fontSize = detailSize.value + "px";
  posterD2.style.fontSize = detailSize.value + "px";
};

function setShopFont(font) {
  posterShop.style.fontFamily = font;
}

function setDetailFont(font) {
  posterD1.style.fontFamily = font;
  posterD2.style.fontFamily = font;
}

function setTemplate(num) {
  poster.style.backgroundImage =
    `url('assets/templates/template${num}.jpg')`;
}

downloadBtn.onclick = () => {
  html2canvas(poster, { scale: 2 }).then(canvas => {
    const link = document.createElement("a");
    link.download = "poster.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};
