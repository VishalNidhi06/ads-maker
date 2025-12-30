let shopFontFamily = "Arial";
let detailFontFamily = "Arial";

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
  setActiveFont(0, font);
  renderPoster();
}

function setDetailFont(font) {
  detailFontFamily = font;
  setActiveFont(1, font);
  renderPoster();
}

function setActiveFont(groupIndex, font) {
  const groups = document.querySelectorAll(".font-buttons");
  groups[groupIndex].querySelectorAll("button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("onclick").includes(font)) {
      btn.classList.add("active");
    }
  });
}

function renderPoster() {
  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");

  const shopName = document.getElementById("shopName").value;
  const line1 = document.getElementById("line1").value;
  const line2 = document.getElementById("line2").value;
  const line3 = document.getElementById("line3").value;
  const line4 = document.getElementById("line4").value;

  const shopColor = document.getElementById("shopColor").value;
  const detailColor = document.getElementById("detailColor").value;

  const img = new Image();
  img.src = "templates/template1.jpg";

  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = shopColor;
    ctx.textAlign = "center";
    ctx.font = `bold ${shopFontSize.value}px ${shopFontFamily}`;
    ctx.fillText(shopName, canvas.width / 2, 80);

    ctx.fillStyle = detailColor;
    ctx.font = `${detailFontSize.value}px ${detailFontFamily}`;

    ctx.textAlign = "left";
    ctx.fillText(line1, 40, 220);
    ctx.fillText(line2, 40, 270);

    ctx.textAlign = "right";
    ctx.fillText(line3, canvas.width - 40, 220);
    ctx.fillText(line4, canvas.width - 40, 270);

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
