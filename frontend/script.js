const shopName = document.getElementById("shopName");
const detail1 = document.getElementById("detail1");
const detail2 = document.getElementById("detail2");

const pShop = document.getElementById("pShop");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");

shopName.oninput = () => pShop.innerText = shopName.value;
detail1.oninput = () => p1.innerText = detail1.value;
detail2.oninput = () => p2.innerText = detail2.value;

shopColor.oninput = () => pShop.style.color = shopColor.value;
detailColor.oninput = () => {
  p1.style.color = detailColor.value;
  p2.style.color = detailColor.value;
};

shopSize.oninput = () => {
  pShop.style.fontSize = shopSize.value + "px";
  shopSizeVal.innerText = shopSize.value + " px";
};

detailSize.oninput = () => {
  p1.style.fontSize = detailSize.value + "px";
  p2.style.fontSize = detailSize.value + "px";
  detailSizeVal.innerText = detailSize.value + " px";
};

function setShopFont(font) {
  pShop.style.fontFamily = font;
}

function setDetailFont(font) {
  p1.style.fontFamily = font;
  p2.style.fontFamily = font;
}

function changeTemplate(n) {
  document.getElementById("poster").style.backgroundImage =
    `url("assets/templates/template${n}.jpg")`;
}
