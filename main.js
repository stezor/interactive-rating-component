const ratingList = document.querySelector(".rating ul");
const submitBtn = document.querySelector("button");
const ratingEl = document.querySelector(".rating");
const reviewEl = document.querySelector(".review");
const reviewOutputEl = document.querySelector(".review-output");
let rating = 0;

if (!rating) {
  submitBtn.disabled = true;
  ratingEl.classList.add("show");
  reviewEl.classList.add("hide");
}

ratingList.addEventListener("click", (e) => {
  if (e.target.matches("li label")) {
    rating = +e.target.previousElementSibling.value;

    if (submitBtn.disabled) {
      submitBtn.disabled = false;
    }
  }
});

submitBtn.addEventListener("click", () => {
  reviewOutputEl.textContent = `You selected ${rating} out of 5`;
  ratingEl.classList.remove("show");
  ratingEl.classList.add("hide");
  reviewEl.classList.remove("hide");
  reviewEl.classList.add("show");
});
