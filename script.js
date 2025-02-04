// Array with 25 image sources using absolute paths
const images = [
    "file:///C:/Users/user/Desktop/photography/img1.jpg",
    "file:///C:/Users/user/Desktop/photography/img2.jpg",
    "file:///C:/Users/user/Desktop/photography/img3.jpg",
    "file:///C:/Users/user/Desktop/photography/img4.jpg",
    "file:///C:/Users/user/Desktop/photography/img5.jpg",
    "file:///C:/Users/user/Desktop/photography/img6.jpg",
    "file:///C:/Users/user/Desktop/photography/img7.jpg",
    "file:///C:/Users/user/Desktop/photography/img8.jpg",
    "file:///C:/Users/user/Desktop/photography/img9.jpg",
    "file:///C:/Users/user/Desktop/photography/img10.jpg",
    "file:///C:/Users/user/Desktop/photography/img11.jpg",
    "file:///C:/Users/user/Desktop/photography/img12.jpg",
    "file:///C:/Users/user/Desktop/photography/img13.jpg",
    "file:///C:/Users/user/Desktop/photography/img14.jpg",
    "file:///C:/Users/user/Desktop/photography/img15.jpg",
    "file:///C:/Users/user/Desktop/photography/img16.jpg",
    "file:///C:/Users/user/Desktop/photography/img17.jpg",
    "file:///C:/Users/user/Desktop/photography/img18.jpg",
    "file:///C:/Users/user/Desktop/photography/img19.jpg",
    "file:///C:/Users/user/Desktop/photography/img20.jpg",
    "file:///C:/Users/user/Desktop/photography/img21.jpg",
    "file:///C:/Users/user/Desktop/photography/img22.jpg",
    "file:///C:/Users/user/Desktop/photography/img23.jpg",
    "file:///C:/Users/user/Desktop/photography/img24.jpg",
    "file:///C:/Users/user/Desktop/photography/img25.jpg"
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
    "Image 11",
    "Image 12",
    "Image 13",
    "Image 14",
    "Image 15",
    "Image 16",
    "Image 17",
    "Image 18",
    "Image 19",
    "Image 20",
    "Image 21",
    "Image 22",
    "Image 23",
    "Image 24",
    "Image 25"
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
  
