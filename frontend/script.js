function generateImage() {
  const canvas = document.getElementById("posterCanvas");
  const ctx = canvas.getContext("2d");

  const shopName = document.getElementById("shopName").value;
  const line1 = document.getElementById("line1").value;
  const line2 = document.getElementById("line2").value;
  const line3 = document.getElementById("line3").value;
  const line4 = document.getElementById("line4").value;

  const img = new Image();
  img.src = "templates/template1.jpg";

  img.onload = function () {
    // Draw background image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Text settings
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    // Draw texts
    ctx.font = "bold 32px Arial";
    ctx.fillText(shopName, canvas.width / 2, 100);

    ctx.font = "24px Arial";
    ctx.fillText(line1, canvas.width / 2, 180);
    ctx.fillText(line2, canvas.width / 2, 240);
    ctx.fillText(line3, canvas.width / 2, 300);
    ctx.fillText(line4, canvas.width / 2, 360);

    // Convert canvas to image
    const finalImage = canvas.toDataURL("image/png");
    document.getElementById("resultImage").src = finalImage;
  };
}
