const lattes = document.querySelectorAll(".lattes img");
const bigImage = document.querySelector(".big-image");
const circle = document.querySelector(".circle");
console.log(lattes);

lattes.forEach((latte) => {
  latte.addEventListener("click", () => {
    if (latte.classList.contains("green")) {
      circle.style.backgroundColor = "#017143";
      bigImage.src = "./assets/img1.png";
    } else if (latte.classList.contains("pink")) {
      circle.style.backgroundColor = "#E7708B";
      bigImage.src = "./assets/img2.png";
    } else {
      circle.style.backgroundColor = "#791F5F";
      bigImage.src = "./assets/img3.png";
    }
  });
});
