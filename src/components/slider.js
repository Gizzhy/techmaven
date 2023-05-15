// function Body() {
    

//     const [slideIndex, setSlideIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       showSlides();
//     }, 2000);
//     return () => clearTimeout(timer);
//   });

//   function showSlides() {
//     let i;
//     const slides = document.getElementsByClassName("mySlides");
//     const dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     setSlideIndex((slideIndex + 1) % slides.length);
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex].style.display = "block";  
//     dots[slideIndex].className += " active";
//   }
// return (
//     <>
//     {/* slider */}
//     <div class="slideshow-container">

// <div class="mySlides fade">
//   {/* <div class="numbertext">1 / 3</div> */}
//   <img className="logos img-fluid" src={image1} alt="1" />
//   <div class="text">Caption Text</div>
// </div>

// <div className="mySlides fade">
//   {/* <div className="numbertext">2 / 3</div> */}
//   <img className="logos img-fluid" src={image2} alt="2" />
//   <div className="text">Caption Two</div>
// </div>

// <div class="mySlides fade">
//   {/* <div class="numbertext">3 / 3</div> */}
//   <img className="logos img-fluid" src={image3} alt="3" />
//   <div className="text">Caption Three</div>
// </div>

// </div>
// <br/>

// <div className="dot-span">
//   <span className="dot"></span> 
//   <span className="dot"></span> 
//   <span className="dot"></span> 
// </div>


//     {/* slider */}