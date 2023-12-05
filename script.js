let slideIndex = 1;
showSlides(slideIndex);

// Function to change slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display slides
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  // Changing text functionality
  const textArray = ["passionate about coding", "interested in embedded systems", "focused on network security"];
  const changingTextElement = document.getElementById("changingText");
  changingTextElement.textContent = textArray[slideIndex - 1];
}

// Set interval for changing slides and text every 3 seconds
setInterval(function () {
  plusSlides(1);
}, 3000);
// Optional: You can add functionality such as toggling the social media section visibility on click or hover.
// For example, to toggle visibility on clicking a button:

const socialMediaSection = document.querySelector('.social-media-section');

// Function to toggle social media section visibility
function toggleSocialMediaSection() {
  socialMediaSection.classList.toggle('show');
}

// Example: Add event listener to a button for toggling visibility
const toggleButton = document.getElementById('toggleButton'); // Replace 'toggleButton' with your button ID
toggleButton.addEventListener('click', toggleSocialMediaSection);
