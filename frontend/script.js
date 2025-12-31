let shopFontFamily = "Arial";
let detailFontFamily = "Arial";
let currentTemplateIndex = 0;

const templates = [
  { image: "templates/template1.jpg", shopY: 90, d1Y: 150, d2Y: 200 },
  { image: "templates/template2.jpg", shopY: 120, d1Y: 220, d2Y: 270 },
  { image: "templates/template3.jpg", shopY: 80, d1Y: 160, d2Y: 210 },
  { image: "templates/template4.jpg", shopY: 100, d1Y: 180, d2Y: 230 }
];

const shopFontSize = document.getElementById("shopFontSize");
const detailFontSize = document.getElementById("detailFontSize");
const shopFontValue = document.getElementById("shopFontValue");
const detailFontValue = document.getElementById("detailFontValue");

shopFontValue.innerText = shopFontSize.value;
detailFontValue.innerText = detailFontSize.value;

shopFontSize.oninput = () => shopFontValue.innerText = shopFontSize.value;
detailFontSize.oninput = () => detailFontValue.innerText = detailFontSize.value;

document.querySelectorAll("input").forEach(el =>
  el.addEventListener("input", renderPoster)
);

function setShopFont(font) {
  shopFontFamily = font;
  renderPoster();
}

function setDetailFont(font) {
  detailFontFamily = font;
  renderPoster();
}

function setTemplate(index) {
  currentTemplateIndex = index;
  document.querySelectorAll(".template-buttons img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  renderPoster();
}

function renderPoster() {
  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");

  const shopName = document.getElementById("shopName").value;
  const line1 = document.getElementById("line1").value;
  const line2 = document.getElementById("line2").value;

  const shopColor = document.getElementById("shopColor").value;
  const detailColor = document.getElementById("detailColor").value;

  const t = templates[currentTemplateIndex];
  const img = new Image();
  img.src = t.image;

  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.textAlign = "center";
    ctx.fillStyle = shopColor;
    ctx.font = `bold ${shopFontSize.value}px ${shopFontFamily}`;
    ctx.fillText(shopName, canvas.width / 2, t.shopY);

    ctx.fillStyle = detailColor;
    ctx.font = `${detailFontSize.value}px ${detailFontFamily}`;
    ctx.fillText(line1, canvas.width / 2, t.d1Y);
    ctx.fillText(line2, canvas.width / 2, t.d2Y);

    document.getElementById("resultImage").src =
      canvas.toDataURL("image/png");
  };
}

function downloadImage() {
  const canvas = document.getElementById("posterCanvas");
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "shop-poster.png";
  link.click();
}
