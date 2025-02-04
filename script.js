// Array with 25 image sources using absolute paths
const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
    "img11.jpg"
  ];
  
  // Array with 25 corresponding titles
  const titles = [
    "Image 1",
    "Image 2",
    "Image 3",
    "Image 4",
    "Image 5",
    "Image 6",
    "Image 7",
    "Image 8",
    "Image 9",
    "Image 10",
    "Image 11"
  ];
  
  let currentIndex = 0;
  let slideInterval;
  
  // Function to update the slider with the current image and title
  function updateSlider() {
    document.getElementById("sliderImg").src = images[currentIndex];
    document.getElementById("sliderTitle").innerText = titles[currentIndex];
  }
  
  // Function to open the slider modal at a given index
  function openSlider(index) {
    currentIndex = index;
    updateSlider();
    document.getElementById("sliderModal").style.display = "flex";
    startAutoSlide();
  }
  
  // Function to close the slider modal
  function closeSlider() {
    document.getElementById("sliderModal").style.display = "none";
    clearInterval(slideInterval);
  }
  
  // Function to start auto-sliding images every 3 seconds
  function startAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
  }
  
  // Function to advance to the next slide manually
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
    startAutoSlide(); // Restart auto slide interval on manual navigation
  }
  
  // Function to go to the previous slide manually
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
    startAutoSlide(); // Restart auto slide interval on manual navigation
  }
  
  // Event listener for the "More" button (if it exists)
  // This opens the slider starting at index 0.
  document.getElementById("moreButton").addEventListener("click", function(e) {
    e.preventDefault();
    openSlider(0);
  });
  
  // Optional: Close slider when clicking outside the slider container
  document.getElementById("sliderModal").addEventListener("click", function(event) {
    if (event.target === this) {
      closeSlider();
    }
  });
  
