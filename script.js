function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = modal.querySelector("iframe");
  // Clear existing source first
  iframe.src = "";
  // Use setTimeout to ensure the previous source is cleared
  setTimeout(() => {
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      modal.style.display = "block";
  }, 100);
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = modal.querySelector("iframe");
  iframe.src = "";
  modal.style.display = "none";
}
  
  window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }