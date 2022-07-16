const likeButton = document.querySelector(".heart-icon");

likeButton.addEventListener("click", () => {
  if (likeButton.classList.contains("liked")) {
    likeButton.classList.remove("liked");
    likeButton.setAttribute("name", "heart-outline")
  } else {
    likeButton.classList.add("liked");
    likeButton.setAttribute("name", "heart");
  }
});
