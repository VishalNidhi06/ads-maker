// Update slider values live
shopFontSize.oninput = () => shopFontValue.innerText = shopFontSize.value;
detailFontSize.oninput = () => detailFontValue.innerText = detailFontSize.value;

// Live preview triggers
const liveInputs = document.querySelectorAll(
  "input, select"
);

liveInputs.forEach(el => {
  el.addEventListener("input", renderPoster);
});

function renderPoster() {
  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");

  // Text inputs
  const shopName = shopNameInput().value;
  const line1 = document.getElementById("line1").value;
  const line2 = document.getElementById("line2").value;
  const line3 = document.getElementById("line3").value;
  const line4 = document.getElementById("line4").value;

  // Style inputs
  const shopColor = document.getElementById("shopColor").value;
  const detailColor = document.getElementById("detailColor").value;
  const shopFont = parseInt(document.getElementById("shopFontSize").value);
  const detailFont = parseInt(document.getElementById("detailFontSize").value);

  const img = new Image();
  img.src = "templates/template1.jpg";

  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    /* SHOP NAME */
    ctx.fillStyle = shopColor;
    ctx.textAlign = "center";
    ctx.font = `bold ${shopFont}px Arial`;
    ctx.fillText(shopName, canvas.width / 2, 80);

    /* LEFT DETAILS */
    ctx.fillStyle = detailColor;
    ctx.font = `${detailFont}px Arial`;
    ctx.textAlign = "left";
    ctx.fillText(line1, 40, 220);
    ctx.fillText(line2, 40, 270);

    /* RIGHT DETAILS */
    ctx.textAlign = "right";
    ctx.fillText(line3, canvas.width - 40, 220);
    ctx.fillText(line4, canvas.width - 40, 270);

    // Live preview output
    document.getElementById("resultImage").src =
      canvas.toDataURL("image/png");
  };
}

// Helper for cleaner code
function shopNameInput() {
  return document.getElementById("shopName");
}

// Download image
function downloadImage() {
  const imgData = document.getElementById("posterCanvas")
    .toDataURL("image/png");

  const link = document.createElement("a");
  link.href = imgData;
  link.download = "shop-poster.png";
  link.click();
}
