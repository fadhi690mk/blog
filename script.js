const navbar_head_home = document.getElementById("navbar_head_home");
const navbar_head_blogs = document.getElementById("navbar_head_blogs");
const navbar_head_features = document.getElementById("navbar_head_features");
const navbar_head_about = document.getElementById("navbar_head_about");
const navbar_head_write = document.getElementById("navbar_head_write");
const container_home = document.getElementById("container_home");
const container_blogs = document.getElementById("container_blogs");
const container_features = document.getElementById("container_features");
const container_about = document.getElementById("container_about");
const container_write = document.getElementById("container_write");



container_home

navbar_head_home.addEventListener("click", (event) => {
  event.preventDefault();
  navbar_head_home.classList.add("active");
  navbar_head_blogs.classList.remove("active");
  navbar_head_features.classList.remove("active");
  navbar_head_about.classList.remove("active");
  container_home.classList.remove("hide-container");
  container_blogs.classList.add("hide-container");
  container_features.classList.add("hide-container");
  container_about.classList.add("hide-container");
  container_write.classList.add("hide-container");
});

navbar_head_blogs.addEventListener("click", (event) => {
  event.preventDefault();
  navbar_head_home.classList.remove("active");
  navbar_head_blogs.classList.add("active");
  navbar_head_features.classList.remove("active");
  navbar_head_about.classList.remove("active");
  container_home.classList.add("hide-container");
  container_blogs.classList.remove("hide-container");
  container_features.classList.add("hide-container");
  container_about.classList.add("hide-container");
  container_write.classList.add("hide-container");
});

navbar_head_features.addEventListener("click", (event) => {
  event.preventDefault();
  navbar_head_home.classList.remove("active");
  navbar_head_blogs.classList.remove("active");
  navbar_head_features.classList.add("active");
  navbar_head_about.classList.remove("active");
  container_home.classList.add("hide-container");
  container_blogs.classList.add("hide-container");
  container_features.classList.remove("hide-container");
  container_about.classList.add("hide-container");
  container_write.classList.add("hide-container");
});

navbar_head_about.addEventListener("click", (event) => {
  event.preventDefault();
  navbar_head_home.classList.remove("active");
  navbar_head_blogs.classList.remove("active");
  navbar_head_features.classList.remove("active");
  navbar_head_about.classList.add("active");
  container_home.classList.add("hide-container");
  container_blogs.classList.add("hide-container");
  container_features.classList.add("hide-container");
  container_about.classList.remove("hide-container");
  container_write.classList.add("hide-container");
});

navbar_head_write.addEventListener("click", (event) => {
  event.preventDefault();
  navbar_head_home.classList.remove("active");
  navbar_head_blogs.classList.remove("active");
  navbar_head_features.classList.remove("active");
  navbar_head_about.classList.remove("active");
  container_home.classList.add("hide-container");
  container_blogs.classList.add("hide-container");
  container_features.classList.add("hide-container");
  container_about.classList.add("hide-container");
  container_write.classList.remove("hide-container");
});