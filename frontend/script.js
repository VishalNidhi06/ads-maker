// Show live font size values
document.getElementById("shopFontSize").oninput = function () {
  document.getElementById("shopFontValue").innerText = this.value;
};

document.getElementById("detailFontSize").oninput = function () {
  document.getElementById("detailFontValue").innerText = this.value;
};

function generateImage() {
  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");

  // Text inputs
  const shopName = document.getElementById("shopName").value;
  const line1 = document.getElementById("line1").value;
  const line2 = document.getElementById("line2").value;
  const line3 = document.getElementById("line3").value;
  const line4 = document.getElementById("line4").value;

  // Style inputs
  const shopColor = document.getElementById("shopColor").value;
  const detailColor = document.getElementById("detailColor").value;

  const shopFontSize = parseInt(document.getElementById("shopFontSize").value);
  const detailFontSize = parseInt(document.getElementById("detailFontSize").value);

  // Load template image
  const img = new Image();
  img.src = "templates/template1.jpg";

  img.onload = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    /* ======================
       SHOP NAME (TOP CENTER)
    ====================== */
    ctx.fillStyle = shopColor;
    ctx.textAlign = "center";
    ctx.font = "bold " + shopFontSize + "px Arial";
    ctx.fillText(shopName, canvas.width / 2, 80);

    /* ======================
       LEFT DETAILS (2)
    ====================== */
    ctx.fillStyle = detailColor;
    ctx.font = detailFontSize + "px Arial";
    ctx.textAlign = "left";
    ctx.fillText(line1, 40, 220);
    ctx.fillText(line2, 40, 270);

    /* ======================
       RIGHT DETAILS (2)
    ====================== */
    ctx.textAlign = "right";
    ctx.fillText(line3, canvas.width - 40, 220);
    ctx.fillText(line4, canvas.width - 40, 270);

    // Output image
    document.getElementById("resultImage").src =
      canvas.toDataURL("image/png");
  };
}
