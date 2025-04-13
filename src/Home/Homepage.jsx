// import "../App.css";
// import { Row, Col } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Search from "../assets/Imgs/Search.svg";
// import { Card } from "react-bootstrap";
// import {
//   Form,
//   Button,
//   InputGroup,
//   Dropdown,
//   DropdownButton,
// } from "react-bootstrap";
// import Round from "../assets/Imgs/rt.png";
// import f1 from "../assets/Imgs/f1.png";
// import f2 from "../assets/Imgs/f2.png";
// import f3 from "../assets/Imgs/f3.png";
// import Arrow from "../assets/Imgs/up-arrow.svg";
// import Cta from "../assets/Imgs/Cta-scrol.png";
// import sam from "../assets/Imgs/sam.png";
// import grl from "../assets/Imgs/grl.png";
// import testi from "../assets/Imgs/testimonal.svg";
// import blog1 from "../assets/Imgs/blog-1.png";
// import blog2 from "../assets/Imgs/blog-2.png";
// import blog3 from "../assets/Imgs/blog-3.png";
// import Counter from "../Animations/CountUp/CountUp";
// import New from '../assets/Imgs/SLOC.png'
// import back from '../assets/Imgs/back-cta.png'
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ScrollMagic from "scrollmagic";
// import Logo from '../assets/Imgs/back-scrol.png'
// // import soback from '../assets/Imgs/back-scrol.png'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import NextArrow from '../assets/Imgs/right.svg';
// import PrevArrow from '../assets/Imgs/left.svg';
// import { Flip } from 'gsap/Flip';
// import Logo1 from '../assets/Imgs/back-scrol.png'
// import BottomImg1 from '../assets/Imgs/back-scrol.png'
// import BottomImg2 from '../assets/Imgs/back-scrol.png'
// import BottomImg3 from '../assets/Imgs/back-scrol.png'
// import BottomImg4 from '../assets/Imgs/back-scrol.png'

// const projects = [
//   {
//     id: 1,
//     title: "GODREJ VRIKSHYA",
//     price: "₹ 3.30 CR* ONWARDS",
//     location: "SECTOR 49, GURGAON",
//     size: "3 & 4 BHK",
//     feet: "1948 - 3700 Sq.Ft.",
//     image: f1, // Replace with actual image URL
//     bottomImage: BottomImg1,
//   },
//   {
//     id: 2,
//     title: "SMARTWORLD THE EDITION",
//     price: "₹ 6.50 CR* ONWARDS",
//     location: "SECTOR 66, GURGAON",
//     size: "3 & 4 BHK",
//     feet: "1948 - 3700 Sq.Ft.",

//     image: f2,
//     bottomImage: BottomImg2,
//   },
//   {
//     id: 3,
//     title: "GODREJ ARISTOCRAT",
//     price: "₹ 5.53 CR* ONWARDS",
//     location: "SECTOR 62, GURGAON",
//     feet: "1948 - 3700 Sq.Ft.",

//     size: "3 & 4 BHK",
//     image: f3,
//     bottomImage: BottomImg3,
//   },
//   {
//     id: 4,
//     title: "GODREJ ARISTOCRAT",
//     price: "₹ 5.53 CR* ONWARDS",
//     location: "SECTOR 62, GURGAON",
//     feet: "1948 - 3700 Sq.Ft.",

//     size: "3 & 4 BHK",
//     image: f3,
//     bottomImage: BottomImg4,
//   },
// ];

// const testimonials = [
//   {
//     id: 1,
//     name: "SAM SAMPLETON",
//     image: sam,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
//   },
//   {
//     id: 2,
//     name: "JANE DOE",
//     image: grl,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
//   },
//   {
//     id: 3,
//     name: "SAM SAMPLETON",
//     image: sam,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
//   },
//   {
//     id: 4,
//     name: "JANE DOE",
//     image: grl,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
//   },
// ];

// const Blogs = [
//   {
//     id: 1,
//     name: "Blog 1",
//     image: blog1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//     BlogImage: BottomImg1,
//   },
//   {
//     id: 2,
//     name: "Blog 2",
//     image: blog2,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//     BlogImage: BottomImg1,
//   },
//   {
//     id: 3,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//     BlogImage: BottomImg1,
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);
// function Home() {
//   const logoRefs = useRef(null);
//   const containerRefs = useRef(null);
//   //1.) WELCOME TO SLOC section
//   useEffect(() => {
//     // Create a smoother timeline
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRefs.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1.2, // smoother scrub
//         markers: false,
//       }
//     })
//       .fromTo(logoRefs.current,
//         {
//           opacity: 0,
//           y: -300,
//           x: 150,
//           scale: 1.4
//         },
//         {
//           opacity: 1,
//           y: 50,
//           x: 400,
//           scale: 0.6,
//           ease: "power3.out"
//         }
//       )
//       .to(logoRefs.current,
//         {
//           opacity: 0,
//           y: 500,
//           x: 500,
//           scale: 0.2,
//           ease: "power3.inOut"
//         }
//       );

//   }, []);




//   //3.) Testimonials section
//   const logoRefs1 = useRef(null);
//   const containerRefs1 = useRef(null);
//   useEffect(() => {
//     // Create a smoother timeline
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRefs1.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: 1.2, // smoother scrub
//         markers: false,
//       }
//     })
//       .fromTo(logoRefs1.current,
//         {
//           opacity: 0,
//           y: -900,
//           x: 1350,
//         },
//         {
//           opacity: 1,
//           y: 50,
//           x: 550,
//           ease: "power3.out"
//         },
//         {
//           opacity: 2,
//           y: 100,
//           x: 650,
//           ease: "power3.out"
//         }
//       )
//       .to(logoRefs1.current,
//         {
//           opacity: 0,
//           y: 550,
//           x: 550,
//           scale: 0.2,
//           ease: "power3.inOut"
//         }
//       );

//   }, []);


//   //2.) FEATURED PROJECTS section

//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const imageRefs = useRef([]);
//   const boxRefs = useRef([]);
//   const bottomImageRefs = useRef([]);
//   const section2ImageRef = useRef(null);



//   useEffect(() => {
//     const boxes = boxRefs.current;
//     const images = imageRefs.current;
//     const bottomImages = bottomImageRefs.current;
//     const section2Image = section2ImageRef.current;

//     // Top Images Animation
//     images.forEach((img, index) => {
//       const box = boxes[index];

//       const xOffset = () => {
//         const boxRect = box.getBoundingClientRect();
//         const imgRect = img.getBoundingClientRect();
//         return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
//       };

//       gsap.fromTo(
//         img,
//         {
//           x: 0,
//           y: -150,
//           scale: 1,
//           opacity: 1,
//           visibility: "hidden",
//         },
//         {
//           x: xOffset,
//           y: 300,
//           scale: 1,
//           opacity: 1,
//           visibility: "visible",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section1Ref.current,
//             start: "top center",
//             end: "bottom center",
//             scrub: true,
//             onUpdate: (self) => {
//               const imgRect = img.getBoundingClientRect();
//               const boxRect = box.getBoundingClientRect();
//               const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
//               if (isInside) {
//                 box.style.backgroundColor = "#EFF7FE";
//               } else {
//                 box.style.backgroundColor = "";
//               }
//             },
//           },
//         }
//       );
//     });

//     // Bottom Images Animation
//     bottomImages.forEach((img, index) => {
//       const box = boxes[index];

//       const xOffset = () => {
//         const boxRect = box.getBoundingClientRect();
//         const imgRect = img.getBoundingClientRect();
//         return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
//       };

//       gsap.fromTo(
//         img,
//         { y: -100, opacity: 0, visibility: "hidden", x: xOffset },
//         {
//           y: 100,
//           opacity: 1,
//           visibility: "visible",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section1Ref.current,
//             start: "bottom-=400 bottom",
//             end: "bottom+=200 bottom",
//             scrub: 3,
//           },
//         }
//       );
//     });

//     // Section 2: Bottom images move into right-side image
//     bottomImages.forEach((img) => {
//       const xOffset = () => {
//         const imgRect = img.getBoundingClientRect();
//         const section2ImgRect = section2Image.getBoundingClientRect();
//         return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2);
//       };

//       gsap.to(img, {
//         x: xOffset,
//         y: 500,
//         scale: 0.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section2Ref.current,
//           start: "top center",
//           end: "bottom+=300 center",
//           scrub: 2,
//           onEnter: () => gsap.set(img, { visibility: "visible" }),
//           onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
//         },
//       });
//     });

//     // Section 2: Move top images only
//     gsap.to(images, {
//       y: 500,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: section2Ref.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });

//     // Reset background color of boxes when section2Ref is reached
//     gsap.to(boxes, {
//       scrollTrigger: {
//         trigger: section2Ref.current,
//         start: "top center", // When top of section2Ref hits center of viewport
//         onEnter: () => {
//           boxes.forEach((box) => {
//             box.style.backgroundColor = ""; // Reset to default
//           });
//         },
//       },
//     });
//   }, []);
//   const blogsectionRef = useRef(null);
//   const BlogimageRefs = useRef([]);
//   const BlogsboxRefs = useRef([]);
//   const BlogBottomImageRefs = useRef([]);
//   const BlogsBottomsectionRef = useRef(null);

//   useEffect(() => {
//     const boxes = BlogsboxRefs.current;
//     const images = BlogimageRefs.current;
//     const blogsbottomImages = BlogBottomImageRefs.current;
//     const blogssection2Image = BlogsBottomsectionRef.current;

//     // Bottom Images: Emerge from inside boxes downward

//     images.forEach((img, index) => {
//       const box = boxes[index];

//       const xOffset = () => {
//         const boxRect = box.getBoundingClientRect();
//         const imgRect = img.getBoundingClientRect();
//         return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
//       };

//       gsap.fromTo(
//         img,
//         {
//           x: 0,
//           y: -150,
//           scale: 1,
//           opacity: 1,
//           visibility: "hidden",
//         },
//         {
//           x: xOffset,
//           y: 300,
//           scale: 1,
//           opacity: 1,
//           visibility: "visible",
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: blogsectionRef.current,
//             start: "top center", // Changed from "top top" to start when top of section hits center of viewport
//             end: "bottom center",
//             scrub: true,
//             onUpdate: (self) => {
//               const imgRect = img.getBoundingClientRect();
//               const boxRect = box.getBoundingClientRect();
//               const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
//               if (isInside) {
//                 box.style.backgroundColor = "#EFF7FE";
//               } else {
//                 box.style.backgroundColor = "";
//               }
//             },
//           },
//         }
//       );
//     });
//     blogsbottomImages.forEach((img, index) => {
//       const box = boxes[index];

//       const xOffset = () => {
//         const boxRect = box.getBoundingClientRect();
//         const imgRect = img.getBoundingClientRect();
//         return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
//       };

//       gsap.fromTo(
//         img,
//         { y: -100, opacity: 1, visibility: "hidden", x: xOffset }, // Start hidden
//         {
//           y: 100,
//           opacity: 1,
//           visibility: "visible", // Become visible when moving
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: blogsectionRef.current,
//             start: "bottom-=200 bottom",
//             end: "bottom bottom",
//             scrub: true,
//           },
//         }
//       );
//     });

//     // Section 2: Bottom images move into right-side image
//     blogsbottomImages.forEach((img) => {
//       const xOffset = () => {
//         const imgRect = img.getBoundingClientRect();
//         const section2ImgRect = blogssection2Image.getBoundingClientRect();
//         return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2);
//       };

//       gsap.to(img, {
//         x: xOffset,
//         y: 500,
//         scale: 0.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section2Ref.current,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           onEnter: () => gsap.set(img, { visibility: "visible" }), // Ensure visibility when animation starts
//           onLeaveBack: () => gsap.set(img, { visibility: "hidden" }) // Hide when scrolling back up
//         },
//       });
//     });

//     // Section 2: Move top images only
//     gsap.to(images, {
//       y: 500,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: BlogsBottomsectionRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <>
//       <main id="All" >

//         <section className="Main-banner" data-speed="1.5">
//           <Container>
//             <Row>
//               <Col md={6} >
//                 <h1>Search Land Of Choice</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
//               </Col>
//               <Col>




//                 {/* Dont Edit this this for animation  */}
//                 <div className="animated-logo">
//                   <div className="image-wrapper">
//                     <img
//                       src={Logo}
//                       alt="Logo"
//                       id="rocket-image"
//                       className="rocket-image main-image"
//                     />
//                     <div className="split-images" >
//                       <img src={Logo} alt="Split 1" className="split-image" />
//                       <img src={Logo} alt="Split 2" className="split-image" />
//                       <img src={Logo} alt="Split 3" className="split-image" />
//                     </div>
//                   </div>
//                 </div>
//                 {/* Dont Edit this this for animation End */}

//               </Col>
//             </Row>
//           </Container>
//           <div className="d-flex align-items-center searc-bar  justify-content-between">
//             <DropdownButton
//               id="dropdown-city"
//               title="City"
//               variant="outline-light"
//               className="me-2 set-out"
//             >
//               <Dropdown.Item href="#">New York</Dropdown.Item>
//               <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
//               <Dropdown.Item href="#">Chicago</Dropdown.Item>
//             </DropdownButton>

//             <DropdownButton
//               id="dropdown-property"
//               title="Property Type"
//               variant="outline-light"
//               className="me-2 set-out"
//             >
//               <Dropdown.Item href="#">Apartment</Dropdown.Item>
//               <Dropdown.Item href="#">House</Dropdown.Item>
//               <Dropdown.Item href="#">Condo</Dropdown.Item>
//             </DropdownButton>

//             <InputGroup className="me-2 ">
//               <InputGroup.Text>
//                 <img src={Search} />
//               </InputGroup.Text>
//               <Form.Control
//                 placeholder="Search by location or property ID....."
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//               />
//             </InputGroup>

//             <Button variant="primary">Search</Button>
//           </div>
//         </section>

//         <section ref={containerRefs} className="welcome">
//           <img className="Move" src={Logo} ref={logoRefs} />

//           <Container className="py-5">
//             <Row className="mb-4 d-flex">
//               <Col md={6} className=" align-content-end head">
//                 <img src={Round} alt="scroling" className="scrol-top" />
//                 <h2 className="same-head">WELCOME TO SLOC</h2>
//                 <p className="same-head-p">
//                   SLOC – "Search Land of Choice" is a leading real estate
//                   company in India dedicated to providing exceptional property
//                   solutions. With a focus on customer satisfaction and market
//                   expertise, SLOC has built a reputation as a trusted name in
//                   the industry. Collaborating with top-tier real estate brands
//                   like Godrej, DLF, and many more, SLOC offers a diverse range
//                   of properties, including luxurious apartments, plots, villas,
//                   and commercial space.
//                 </p>
//               </Col>
//               <Col md={6} className="d-flex flex-wrap four-col-st">
//                 <Col md={6} lg={6} className="right">
//                   <Card className="">
//                     <h3 className="text-primary">
//                       <Counter className="Counter-no" to={1} from={0} />
//                       M+
//                     </h3>
//                     <p>Sed ut Perspiciatis</p>
//                   </Card>
//                 </Col>
//                 <Col md={6} lg={6} className="only-bottom">
//                   <Card className="">
//                     <h3 className="text-primary">
//                       <Counter className="Counter-no" to={500} from={0} />
//                       K
//                     </h3>                    <p>Lorem Ipsum</p>
//                   </Card>
//                 </Col>
//                 <Col md={6} lg={6} className="only-right">
//                   <Card>
//                     <h3 className="text-primary">
//                       <Counter className="Counter-no" to={24} from={0} />
//                       /7
//                     </h3>                     <p>Consectetur Adipiscing Elit, Sed Do</p>
//                   </Card>
//                 </Col>
//                 <Col md={6} lg={6} className="left-brdr">
//                   <Card className="">
//                     <h3 className="text-primary">
//                       <Counter className="Counter-no" to={1} from={0} />
//                       M+
//                     </h3>                    <p>Sed ut Perspiciatis</p>
//                   </Card>
//                 </Col>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section ref={section1Ref} className="featured">
//           {/* Floating Images Container */}
//           <div className="featured-floating-imgs">
//             <div className="image-stack">
//               <img
//                 ref={(el) => (imageRefs.current[0] = el)}
//                 className="initial-image"
//                 src={Logo1}
//                 alt="img1"
//               />
//               <img
//                 ref={(el) => (imageRefs.current[1] = el)}
//                 className="initial-image"
//                 src={Logo1}
//                 alt="img2"
//               />
//               <img
//                 ref={(el) => (imageRefs.current[2] = el)}
//                 className="initial-image"
//                 src={Logo1}
//                 alt="img3"
//               />
//             </div>
//           </div>
//           <Container className="full">
//             <Row className="mb-4 d-flex py-4 align-content-center">
//               <Col md={8} className="align-content-center">
//                 <h2 className="same-head">FEATURED PROJECTS</h2>
//                 <p className="same-head-p">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </Col>
//               <Col md={4} className="align-items-end text-end align-content-center">
//                 <div className="custom-swiper-nav d-flex gap-4 justify-content-end mb-3">
//                   <img src={PrevArrow} alt="Previous" className="swiper-button-prev-custom" />
//                   <img src={NextArrow} alt="Next" className="swiper-button-next-custom" />
//                 </div>
//               </Col>
//             </Row>
//             <Row className="features-row">
//               <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 loop={true}
//                 navigation={{
//                   nextEl: '.swiper-button-next-custom',
//                   prevEl: '.swiper-button-prev-custom',
//                 }}
//                 modules={[Navigation]}
//                 breakpoints={{
//                   768: { slidesPerView: 2 },
//                   992: { slidesPerView: 3 },
//                 }}
//               >
//                 {projects.map((project, index) => (
//                   <SwiperSlide key={project.id}>
//                     <Col className="features-list p-0 dip-column">
//                       <Card
//                         ref={(el) => (boxRefs.current[index] = el)} // Applied ref to each card
//                         className={`custom-card card-${index}  box-${index}`} // Added box classes
//                       >
//                         <Card.Img
//                           variant="top"
//                           src={project.image}
//                           alt={project.title}
//                         />
//                         <Card.Body className="uper-space">
//                           <Card.Text className="mb-4 btn-loc">
//                             <span>{project.size}</span> <span>{project.feet}</span>
//                             <span>{project.location}</span>
//                           </Card.Text>
//                           <Card.Title>{project.title}</Card.Title>
//                           <Card.Text className="text-primary font-weight-bold">
//                             {project.price}
//                           </Card.Text>
//                           <Button className="Up-arrow-btn">
//                             <img src={Arrow} />
//                           </Button>
//                         </Card.Body>
//                         <img
//                           ref={(el) => (bottomImageRefs.current[index] = el)}
//                           className="bottom-image"
//                           src={project.bottomImage}
//                           alt={`bottom-img-${project.id}`}
//                         />
//                       </Card>
//                     </Col>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </Row>
//           </Container>

//         </section>

//         <section ref={section2Ref} className="Cta position-relative">
//           <Container>
//             <Row className="d-flex align-items-center justify-content-center ">
//               <Col md={8}>
//                 <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
//                 <p className="same-head-p">
//                   Explore the best properties in your preferred location. Start
//                   your journey to a perfect home with us.
//                 </p>
//                 <img src={back} alt="" className="back-roll" ref={section2ImageRef}
//                 />

//               </Col>

//               <Col md={4} className="text-end">
//                 {/* <img src={Cta} alt="" className="scroll-img" /> */}
//                 <Button variant="dark" className="banner-button">
//                   Contact us for More info
//                 </Button>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section ref={containerRefs1} className="social-proof position-relative">
//           <img className="Move" src={Logo} ref={logoRefs1} />
//           <Container className="">
//             <Row className="align-items-center justify-content-between">
//               <Col md={5} className="mb-4 mb-md-0">
//                 <div className="ps-md-4">
//                   <h2 className="same-head">Testimonials </h2>
//                   <p className="same-head-p">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <Button className="Up-arrow-btn">
//                     <img src={Arrow} />
//                   </Button>
//                 </div>
//                 {/* <img src={soback} className="soc-img" alt="" /> */}
//               </Col>

//               <Col md={6} className="align-items-top rounded-0">
//                 <Card className="sticky-box position-sticky rounded-0">
//                   <Card.Body className="p-0 pt-2">
//                     {testimonials.map((testimonial, index) => (
//                       <div
//                         key={testimonial.id}
//                         className={index !== 0 ? "mt-4 pt-4 border-top" : ""}
//                       >
//                         <Row className="align-items-top inner-set">
//                           <Col xs="auto img-hide">
//                             <div
//                               className="position-relative"
//                               style={{ width: "110px", height: "80px" }}
//                             >
//                               <img
//                                 src={testimonial.image}
//                                 alt=""
//                                 className="img-fluid "
//                               />
//                             </div>
//                           </Col>
//                           <Col className="px-4">
//                             <div className="position-relative">
//                               <div
//                                 className="position-absolute"
//                                 style={{ top: "-50px", right: "0" }}
//                               >
//                                 <span
//                                   className="text-muted"
//                                   style={{ fontSize: "40px", opacity: "0.2" }}
//                                 >
//                                   <img src={testi} />
//                                 </span>
//                               </div>
//                               <h5 className="mb-2 socail-name">
//                                 {testimonial.name}
//                               </h5>
//                               <p className="text-muted mb-0 social-p">
//                                 {testimonial.text}
//                               </p>
//                             </div>
//                           </Col>
//                         </Row>
//                       </div>
//                     ))}
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <section className="featured blogs" ref={blogsectionRef}>
//           <div className="featured-floating-imgs">
//             <div className="image-stack">
//               <img
//                 ref={(el) => (BlogimageRefs.current[0] = el)}
//                 className="initial-image"
//                 src={Logo1}
//                 alt="img1"
//               />
//               <img
//                 ref={(el) => (BlogimageRefs.current[1] = el)}
//                 className="initial-image"
//                 src={Logo1}
//                 alt="img2"
//               />
//               <img
//                 ref={(el) => (BlogimageRefs.current[2] = el)}
//                 className="initial-image"
//                 src={Logo1}
//                 alt="img3"
//               />
//             </div>
//           </div>
//           <Container className="">
//             <Row className="mb-4 d-flex py-4 align-content-center">
//               <Col md={8} className="align-content-center">

//                 <h2 className="same-head">Latest Blogs</h2>
//                 <p className="same-head-p">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </Col>
//               <Col
//                 md={4}
//                 className="align-items-end text-end align-content-center"
//               >
//                 <Button variant="dark">See more Blogs</Button>
//               </Col>
//             </Row>
//             <Row>
//               {Blogs.map((Blogs, index) => (
//                 <Col md={4} key={Blogs.id} className="features-list p-0">
//                   {/* <Card className=" position-relative"> */}
//                   <Card
//                     ref={(el) => (BlogsboxRefs.current[index] = el)} // Applied ref to each card
//                     className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
//                   >
//                     <Card.Img
//                       variant="top"
//                       src={Blogs.image}
//                       alt={Blogs.title}
//                     />
//                     <Card.Body className="uper-space">
//                       <Card.Text className="mb-4 btn-loc top-set">
//                         <span className="black">{Blogs.date}</span>
//                         <span>{Blogs.catagory} SDFSDF</span>
//                       </Card.Text>
//                       <Card.Title>{Blogs.name}</Card.Title>

//                       <Card.Text className="text-primary font-weight-bold">
//                         {Blogs.text}
//                       </Card.Text>
//                       <Button className="Up-arrow-btn" href="/details">
//                         <img src={Arrow} />
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                   <img
//                     ref={(el) => (BlogBottomImageRefs.current[index] = el)}
//                     className="bottom-image"
//                     src={Blogs.BlogImage}
//                     alt={`bottom-img-${Blogs.id}`}
//                   />
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>
//         <div className="position relative" ref={BlogsBottomsectionRef} >

//         </div>
//       </main>
//     </>
//   );
// }

// export default Home;



import "../App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import { Card } from "react-bootstrap";
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Round from "../assets/Imgs/rt.png";
import f1 from "../assets/Imgs/f1.png";
import f2 from "../assets/Imgs/f2.png";
import f3 from "../assets/Imgs/f3.png";
import Arrow from "../assets/Imgs/up-arrow.svg";
import Cta from "../assets/Imgs/Cta-scrol.png";
import sam from "../assets/Imgs/sam.png";
import grl from "../assets/Imgs/grl.png";
import testi from "../assets/Imgs/testimonal.svg";
import blog1 from "../assets/Imgs/blog-1.png";
import blog2 from "../assets/Imgs/blog-2.png";
import blog3 from "../assets/Imgs/blog-3.png";
import Counter from "../Animations/CountUp/CountUp";
import New from '../assets/Imgs/SLOC.png'
import back from '../assets/Imgs/back-cta.png'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollMagic from "scrollmagic";
import Logo from '../assets/Imgs/Round.svg'
import WelcomeLogo from '../assets/Imgs/back-scrol-BsNhHslO.png'
import revertLogo from '../assets/Imgs/Round.svg'
// import soback from '../assets/Imgs/back-scrol.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NextArrow from '../assets/Imgs/right.svg';
import PrevArrow from '../assets/Imgs/left.svg';
import { Flip } from 'gsap/Flip';
// import Logo1 from '../assets/Imgs/back-scrol.png'
import Logo1 from '../assets/Imgs/Round.svg'
import BottomImg1 from '../assets/Imgs/Round.svg'
import BottomImg2 from '../assets/Imgs/Round.svg'
import BottomImg3 from '../assets/Imgs/Round.svg'
import BottomImg4 from '../assets/Imgs/Round.svg'


const projects = [
  {
    id: 1,
    title: "GODREJ VRIKSHYA",
    price: "₹ 3.30 CR* ONWARDS",
    location: "SECTOR 49, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",
    image: f1, // Replace with actual image URL
    bottomImage: BottomImg1,
  },
  {
    id: 2,
    title: "SMARTWORLD THE EDITION",
    price: "₹ 6.50 CR* ONWARDS",
    location: "SECTOR 66, GURGAON",
    size: "3 & 4 BHK",
    feet: "1948 - 3700 Sq.Ft.",

    image: f2,
    bottomImage: BottomImg2,
  },
  {
    id: 3,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg3,
  },
  {
    id: 4,
    title: "GODREJ ARISTOCRAT",
    price: "₹ 5.53 CR* ONWARDS",
    location: "SECTOR 62, GURGAON",
    feet: "1948 - 3700 Sq.Ft.",

    size: "3 & 4 BHK",
    image: f3,
    bottomImage: BottomImg4,
  },
];

const testimonials = [
  {
    id: 1,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 2,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 3,
    name: "SAM SAMPLETON",
    image: sam,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    id: 4,
    name: "JANE DOE",
    image: grl,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
];

const Blogs = [
  {
    id: 1,
    name: "Blog 1",
    image: blog1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
  {
    id: 2,
    name: "Blog 2",
    image: blog2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
  {
    id: 3,
    name: "Blog 3",
    image: blog3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    date: "1 March 19, 2024",
    catagory: "Apartment",
    BlogImage: BottomImg1,
  },
];

gsap.registerPlugin(ScrollTrigger);
function Home() {
//   const logoRefs = useRef(null);
//   const containerRefs = useRef(null);
//   const welcomeTextRef = useRef(null); // Reference for "WELCOME TO SLOC" text
//   const scrollImageRef = useRef(null); // Reference for the scroll image
//   //1.) WELCOME TO SLOC section
//   // useEffect(() => {
//   //   // Create a smoother timeline
//   //   gsap.timeline({
//   //     scrollTrigger: {
//   //       trigger: containerRefs.current,
//   //       start: "top center",
//   //       end: "bottom center",
//   //       scrub: 1.2, // smoother scrub
//   //       markers: false,
//   //     }
//   //   })
//   //     .fromTo(logoRefs.current,
//   //       {
//   //         opacity: 0,
//   //         y: -300,
//   //         x: 150,
//   //         scale: 1.4
//   //       },
//   //       {
//   //         opacity: 1,
//   //         y: 50,
//   //         x: 400,
//   //         scale: 0.6,
//   //         ease: "power3.out"
//   //       }
//   //     )
//   //     .to(logoRefs.current,
//   //       {
//   //         opacity: 0,
//   //         y: 500,
//   //         x: 500,
//   //         scale: 0.2,
//   //         ease: "power3.inOut"
//   //       }
//   //     );

//   // }, []);

// // useEffect(() => {
// //     // Explicitly set initial SVG attributes
// //     if (logoRefs.current) {
// //       gsap.set(logoRefs.current.querySelectorAll('path'), {
// //         fill: 'none', // Transparent fill initially
// //         stroke: '#d9dee2', // Light gray border initially
// //         strokeWidth: 2, // Border thickness
// //       });
// //     }

// //     // Main animation timeline
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: containerRefs.current,
// //         start: 'top center',
// //         end: 'bottom center',
// //         scrub: 1.2,
// //         markers: false,
// //       },
// //     })
// //       .fromTo(
// //         logoRefs.current,
// //         {
// //           opacity: 0,
// //           y: -300,
// //           x: 150,
// //           scale: 1.4,
// //         },
// //         {
// //           opacity: 1,
// //           y: 50,
// //           x: 400,
// //           scale: 0.6,
// //           ease: 'power3.out',
// //         }
// //       )
// //       .to(scrollImageRef.current, {
// //         opacity: 0,
// //         duration: 0.3,
// //         ease: 'power3.out',
// //       }, 0)
// //       .to(logoRefs.current, {
// //         opacity: 0,
// //         y: 500,
// //         x: 500,
// //         scale: 0.2,
// //         ease: 'power3.inOut',
// //       });

// //     // Change SVG to blue fill when overlapping with welcomeTextRef
// //     gsap.to(logoRefs.current.querySelectorAll('path'), {
// //       scrollTrigger: {
// //         trigger: welcomeTextRef.current,
// //         start: 'top bottom', // When top of welcomeTextRef hits bottom of logoRefs
// //         end: 'bottom top', // When bottom of welcomeTextRef passes top of logoRefs
// //         scrub: true,
// //         markers: false,
// //         onEnter: () => {
// //           // Transition to solid blue fill
// //           gsap.to(logoRefs.current.querySelectorAll('path'), {
// //             fill: '#064685', // Blue fill
// //             stroke: '#064685', // Blue border to match fill (or set to 'none' if no border desired)
// //             duration: 0.3,
// //           });
// //         },
// //         onLeave: () => {
// //           // Revert to transparent with light gray border
// //           gsap.to(logoRefs.current.querySelectorAll('path'), {
// //             fill: 'none',
// //             stroke: '#d9dee2', // Back to light gray border
// //             duration: 0.3,
// //           });
// //         },
// //         onEnterBack: () => {
// //           // Re-apply blue fill when re-entering
// //           gsap.to(logoRefs.current.querySelectorAll('path'), {
// //             fill: '#064685',
// //             stroke: '#064685', // Blue border to match
// //             duration: 0.3,
// //           });
// //         },
// //         onLeaveBack: () => {
// //           // Revert to transparent with light gray border
// //           gsap.to(logoRefs.current.querySelectorAll('path'), {
// //             fill: 'none',
// //             stroke: '#d9dee2', // Back to light gray border
// //             duration: 0.3,
// //           });
// //         },
// //       },
// //     });

// //     return () => {
// //       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// //     };
// //   }, []);

// useLayoutEffect(() => {
//     if (
//       !containerRefs.current ||
//       !logoRefs.current ||
//       !scrollImageRef.current ||
//       !welcomeTextRef.current
//     ) {
//       return;
//     }

//     const logoPaths = logoRefs.current.querySelectorAll('path');

//     // ✅ 1. Set initial SVG state to transparent
//     const setTransparent = () => {
//       gsap.set(logoPaths, {
//         fill: 'none',
//         stroke: '#d9dee2',
//       });
//     };
//     setTransparent();

//     // ✅ 2. GSAP context for animations
//     const ctx = gsap.context(() => {
//       // ✅ 3. Main timeline animation
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRefs.current,
//           start: 'top center',
//           end: 'bottom center',
//           scrub: 1.2,
//           markers: false,
//         },
//       })
//         .fromTo(
//           logoRefs.current,
//           { opacity: 0, y: -300, x: 150, scale: 1.4 },
//           { opacity: 1, y: 50, x: 400, scale: 0.6, ease: 'power3.out' }
//         )
//         .to(scrollImageRef.current, { opacity: 0, duration: 0.3, ease: 'power3.out' }, 0)
//         .to(logoRefs.current, { opacity: 0, y: 500, x: 500, scale: 0.2, ease: 'power3.inOut' });

//       // ✅ 4. Simplified color change logic
//       ScrollTrigger.create({
//         trigger: welcomeTextRef.current,
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true,
//         markers: false,
//         onUpdate: (self) => {
//           gsap.set(logoPaths, {
//             fill: self.isActive ? '#064685' : 'none',
//             stroke: self.isActive ? '#064685' : '#d9dee2',
//           });
//         },
//       });

//       // ✅ 5. Handle layout changes (DevTools toggle)
//       const handleLayoutChange = () => {
//         ScrollTrigger.refresh();
//         // Re-check SVG state after layout stabilizes
//         gsap.set(logoPaths, {
//           fill: ScrollTrigger.getById('welcomeTrigger')?.isActive ? '#064685' : 'none',
//           stroke: ScrollTrigger.getById('welcomeTrigger')?.isActive ? '#064685' : '#d9dee2',
//         });
//       };

//       window.addEventListener('resize', handleLayoutChange);

//       // ✅ 6. Initial refresh
//       ScrollTrigger.refresh();

//       // Cleanup
//       return () => {
//         window.removeEventListener('resize', handleLayoutChange);
//       };
//     }, containerRefs);

//     // ✅ 7. Cleanup GSAP and ScrollTrigger
//     return () => {
//       ctx.revert();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       setTransparent(); // Ensure SVG resets to transparent
//     };
//   }, []);
const containerRefs = useRef(null);
  const logoRefs = useRef(null); // Transparent SVG
  const scrollImageRef = useRef(null);
  const welcomeTextRef = useRef(null);

useEffect(() => {
  const paths = logoRefs.current?.querySelectorAll('path');

  // Main animation for the logo movement
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRefs.current,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.3, // smoother and more responsive
      markers: false,
    },
  })
    .fromTo(
      logoRefs.current,
      {
        opacity: 0,
        y: -120,
        x: 150,
        scale: 1.4,
      },
      {
        opacity: 1,
        y: 50,
        x: 300,
        scale: 0.6,
        ease: 'power3.out',
      }
    )
    .to(
      scrollImageRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      },
      0
    )
    .to(logoRefs.current, {
      opacity: 0,
      y: 500,
      x: 500,
      scale: 0.2,
      ease: 'power3.inOut',
    });

// Color change of SVG when welcomeText is 200px from top of viewport
ScrollTrigger.create({
  trigger: welcomeTextRef.current,
  start: 'top-=200 top', // Trigger 200px before it reaches top
  toggleActions: 'play none none reverse',
  onEnter: () => {
    // Magical instant color shift
    gsap.set(paths, {
      fill: '#064685',
      stroke: '#064685',
    });

    // Optional: Add a tiny glow or flash for magic effect
    // gsap.fromTo(paths, { opacity: 0.5 }, { opacity: 1, duration: 0.2 });
  },
  onLeaveBack: () => {
    gsap.set(paths, {
      fill: 'transparent',
      stroke: 'black',
    });
  },
  markers: false,
});


  // Cleanup scroll triggers on unmount
  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

// useEffect(() => {
//     // Main animation timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRefs.current,
//         start: 'top center',
//         end: 'bottom center',
//         scrub: 1.2,
//         markers: false,
//       },
//     })
//       .fromTo(
//         logoRefs.current,
//         {
//           opacity: 0,
//           y: -120,
//           x: 150,
//           scale: 1.4,
//         },
//         {
//           opacity: 1,
//           y: 50,
//           x: 400,
//           scale: 0.6,
//           ease: 'power3.out',
//         }
//       )
//       .to(scrollImageRef.current, {
//         opacity: 0,
//         duration: 0.3,
//         ease: 'power3.out',
//       }, 0)
//       .to(logoRefs.current, {
//         opacity: 0,
//         y: 500,
//         x: 500,
//         scale: 0.2,
//         ease: 'power3.inOut',
//       });

//     // Change SVG fill to blue when reaching welcomeTextRef
//     gsap.to(logoRefs.current.querySelectorAll('path'), {
//       fill: '#064685',
//       stroke: '#064685',
//       scrollTrigger: {
//         trigger: welcomeTextRef.current,
//         start: 'top bottom', // When top of welcomeTextRef hits bottom of viewport
//         end: 'bottom top',
//         scrub: true,
//         markers: false,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);
// WELCOME TO SLOC section animation
// useEffect(() => {
//   const logo = logoRefs.current;
//   const welcomeText = welcomeTextRef.current;

//   // Create the main animation timeline for the logo
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: containerRefs.current,
//       start: 'top center', // Start when section top hits viewport center
//       end: 'bottom center',
//       scrub: 1.2, // Smooth scrub
//       markers: false,
//     },
//   });

//   tl.fromTo(
//     logo,
//     {
//       opacity: 0,
//       y: -300,
//       x: 150,
//       scale: 1.4,
//     },
//     {
//       opacity: 1,
//       y: 50,
//       x: 400,
//       scale: 0.6,
//       ease: 'power3.out',
//     }
//   ).to(logo, {
//     opacity: 0,
//     y: 500,
//     x: 500,
//     scale: 0.2,
//     ease: 'power3.inOut',
//   });

//   // Separate ScrollTrigger to detect when logo touches the "WELCOME TO SLOC" text
// ScrollTrigger.create({
//   trigger: welcomeText,
//   start: () => {
//     const logoBox = logo.getBoundingClientRect();
//     const textBox = welcomeText.getBoundingClientRect();
//     return `top+=${logoBox.height} bottom`;
//   },
//   onEnter: () => {
//     gsap.to(logo, { fill: '#064685', duration: 0.5, ease: 'power2.inOut' });
//   },
//   onLeaveBack: () => {
//     gsap.to(logo, { fill: '', duration: 0.5, ease: 'power2.inOut' });
//   },
//   markers: false,
// });

//   // Cleanup ScrollTriggers on component unmount
//   return () => {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   };
// }, []);




  //3.) Testimonials section
  const logoRefs1 = useRef(null);
  const containerRefs1 = useRef(null);
  useEffect(() => {
    // Create a smoother timeline
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRefs1.current,
        start: "top center",
        end: "bottom center",
        scrub: 1.2, // smoother scrub
        markers: false,
      }
    })
      .fromTo(logoRefs1.current,
        {
          opacity: 0,
          y: -400,
          x: 1250,
        },
        {
          opacity: 1,
          y: 50,
          x: 550,
          ease: "power3.out"
        },
        {
          opacity: 2,
          y: 100,
          x: 650,
          ease: "power3.out"
        }
      )
      .to(logoRefs1.current,
        {
          opacity: 0,
          y: 550,
          x: 550,
          scale: 0.2,
          ease: "power3.inOut"
        }
      );

  }, []);


  //2.) FEATURED PROJECTS section

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const imageRefs = useRef([]);
  const boxRefs = useRef([]);
  const bottomImageRefs = useRef([]);
  const section2ImageRef = useRef(null);



  useEffect(() => {
    const boxes = boxRefs.current;
    const images = imageRefs.current;
    const bottomImages = bottomImageRefs.current;
    const section2Image = section2ImageRef.current;

    // Top Images Animation
    images.forEach((img, index) => {
      const box = boxes[index];

      const xOffset = () => {
        const boxRect = box.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.fromTo(
        img,
        {
          x: 0,
          // y: -170,
          y: -100,
          scale: 1,
          opacity: 1,
          visibility: "hidden",
        },
        {
          x: xOffset,
          y: 300,
          scale: 1,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            // start: "top center",
            start: "top center+=155",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const imgRect = img.getBoundingClientRect();
              const boxRect = box.getBoundingClientRect();
              const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
              if (isInside) {
                box.style.backgroundColor = "#EFF7FE";
              } else {
                box.style.backgroundColor = "";
              }
            },
          },
        }
      );
    });

    // Bottom Images Animation
// bottomImages.forEach((img, index) => {
//   const target = section2ImageRef.current[index]; // target location for each image

//   const getOffsets = () => {
//     const imgRect = img.getBoundingClientRect();
//     const targetRect = target.getBoundingClientRect();

//     const offsetX = targetRect.left + targetRect.width / 2 - (imgRect.left + imgRect.width / 2);
//     const offsetY = targetRect.top + targetRect.height / 2 - (imgRect.top + imgRect.height / 2);

//     return { x: offsetX, y: offsetY };
//   };

//   ScrollTrigger.create({
//     trigger: section2Ref.current,
//     start: "top center",
//     end: "bottom center",
//     scrub: true,
//     onUpdate: () => {
//       const { x, y } = getOffsets();

//       gsap.to(img, {
//         x,
//         y,
//         scale: 0.5,
//         opacity: 0,
//         ease: "power2.out",
//         overwrite: "auto", // makes sure it can be adjusted every scroll
//         duration: 0.5,
//       });
//     },
//     onEnter: () => gsap.set(img, { visibility: "visible" }),
//     onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
//   });
// });

bottomImages.forEach((img, index) => {
  const target = section2ImageRef.current[index];

  const getOffsets = () => {
    const imgRect = img.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const offsetX = targetRect.left + targetRect.width / 2 - (imgRect.left + imgRect.width / 2);
    const offsetY = targetRect.top + targetRect.height / 2 - (imgRect.top + imgRect.height / 2);

    return { x: offsetX, y: offsetY };
  };

  // Wait for layout to settle
  requestAnimationFrame(() => {
    const { x, y } = getOffsets();

gsap.fromTo(
      img,
      { x: 0, y: 0, opacity: 1, visibility: 'hidden', zIndex: -1 }, // Start behind
      {
        x: () => getOffsets().x,
        y: () => getOffsets().y,
        scale: 0.5,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top center",
          end: "bottom center",
          scrub: 2,
          onEnter: () => gsap.set(img, { visibility: "visible" }),
          onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
        },
      }
    );
  });
});


    // Section 2: Bottom images move into right-side image
// Section 2: Bottom images move into right-side image
// bottomImages.forEach((img) => {
//   const xOffset = () => {
//     const imgRect = img.getBoundingClientRect();
//     const section2ImgRect = section2Image.getBoundingClientRect();
//     // Keep the right offset as previously adjusted
//     return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2) + 50;
//   };

//   gsap.to(img, {
//     x: xOffset,
//     y: 500,
//     scale: 0.5,
//     opacity: 0, // Set opacity to 0 to make bottom images vanish
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: section2Ref.current,
//       start: "top center",
//       end: "bottom+=300 center",
//       scrub: 2,
//       onEnter: () => gsap.set(img, { visibility: "visible" }),
//       onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
//     },
//   });
// });

// // Section 2: Make section2ImageRef vanish when bottom images collide
// gsap.to(section2Image, {
//   opacity: 0, // Set opacity to 0 to make section2Image vanish
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: section2Ref.current,
//     start: "top center",
//     end: "bottom+=300 center",
//     scrub: 2,
//   },
// });

// Section 2: Bottom images move into right-side image
// bottomImages.forEach((img, index) => {
//   const xOffset = () => {
//     const imgRect = img.getBoundingClientRect();
//     const section2ImgRect = section2Image.getBoundingClientRect();
//     return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2) + 50;
//   };

//   // Movement animation
//   gsap.to(img, {
//     x: xOffset,
//     y: 500,
//     scale: 0.5,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: section2Ref.current,
//       start: "top center", // Start movement early
//       end: "bottom center", // End movement when bottom of section is at center
//       scrub: 2,
//       onEnter: () => gsap.set(img, { visibility: "visible" }),
//       onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
//     },
//   });

//   // Fade bottom images to vanish at collision
//   gsap.to(img, {
//     opacity: 0, // Fully vanish
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: section2Ref.current,
//       start: "bottom center-=50", // Start fade just before collision
//       end: "bottom center", // Complete fade at collision
//       scrub: 1, // Faster scrub for precise timing
//     },
//   });
// });

// Section 2: Bottom images move into right-side image
bottomImages.forEach((img, index) => {
  const xOffset = () => {
    const imgRect = img.getBoundingClientRect();
    const section2ImgRect = section2Image.getBoundingClientRect();
    return section2ImgRect.left + section2ImgRect.width / 2 - (imgRect.left + imgRect.width / 2) + 50;
  };

  // Movement animation
  gsap.to(img, {
    x: xOffset,
    y: 500,
    scale: 0.5,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section2Ref.current,
      start: "top center", // Start movement early
      end: "bottom center", // End movement when bottom of section is at center
      scrub: 2,
      onEnter: () => gsap.set(img, { visibility: "visible" }),
      onLeaveBack: () => gsap.set(img, { visibility: "hidden" }),
    },
  });


});

// Section 2: Make section2ImageRef vanish (already working perfectly)
gsap.to(section2Image, {
  opacity: 0, // Fully vanish
  ease: "power2.out",
  scrollTrigger: {
    trigger: section2Ref.current,
    start: "bottom center-=20", // Match bottom images' fade start
    end: "bottom center", // Match collision point
    scrub: 1, // Match scrub for consistency
  },
});

// Section 2: Make section2ImageRef vanish at collision
gsap.to(section2Image, {
  opacity: 0, // Fully vanish
  ease: "power2.out",
  scrollTrigger: {
    trigger: section2Ref.current,
    start: "bottom center-=50", // Start fade just before collision
    end: "bottom center", // Complete fade at collision
    scrub: 1, // Faster scrub for precise timing
  },
});

    // Section 2: Move top images only
    // gsap.to(images, {
    //   y: 750,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: section2Ref.current,
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //   },
    // });

    // Reset background color of boxes when section2Ref is reached
    gsap.to(boxes, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top center", // When top of section2Ref hits center of viewport
        onEnter: () => {
          boxes.forEach((box) => {
            box.style.backgroundColor = ""; // Reset to default
          });
        },
      },
    });
  }, []);
  const blogsectionRef = useRef(null);
  const BlogimageRefs = useRef([]);
  const BlogsboxRefs = useRef([]);
  const BlogBottomImageRefs = useRef([]);
  const BlogsBottomsectionRef = useRef(null);

  useEffect(() => {
    const boxes = BlogsboxRefs.current;
    const images = BlogimageRefs.current;

    // Bottom Images: Emerge from inside boxes downward

    images.forEach((img, index) => {
      const box = boxes[index];

      const xOffset = () => {
        const boxRect = box.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        return boxRect.left + boxRect.width / 2 - (imgRect.left + imgRect.width / 2);
      };

      gsap.fromTo(
        img,
        {
          x: 0,
          y: -150,
          scale: 1,
          opacity: 1,
          visibility: "hidden",
        },
        {
          x: xOffset,
          y: 300,
          scale: 1,
          opacity: 1,
          visibility: "visible",
          ease: "power2.out",
          scrollTrigger: {
            trigger: blogsectionRef.current,
            // start: "top center", // Changed from "top top" to start when top of section hits center of viewport
            start: "top center+=155",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
              const imgRect = img.getBoundingClientRect();
              const boxRect = box.getBoundingClientRect();
              const isInside = imgRect.top < boxRect.bottom && imgRect.bottom > boxRect.top;
              if (isInside) {
                box.style.backgroundColor = "#EFF7FE";
              } else {
                box.style.backgroundColor = "";
              }
            },
          },
        }
      );
    });
// Collapse and vanish images into one at the bottom
gsap.to(images, {
  x: (i, target, targets) => {
    const container = BlogsBottomsectionRef.current.getBoundingClientRect();
    const imgRect = target.getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const imgCenterX = imgRect.left + imgRect.width / 2;
    return centerX - imgCenterX;
  },
  y: (i, target, targets) => {
    const container = BlogsBottomsectionRef.current.getBoundingClientRect();
    const centerY = container.top + container.height / 2;
    const imgRect = target.getBoundingClientRect();
    const imgCenterY = imgRect.top + imgRect.height / 2;
    return centerY - imgCenterY;
  },
  scale: 0,
  opacity: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: BlogsBottomsectionRef.current,
    start: "bottom-=200 center", // or adjust based on where you want convergence to begin
    end: "bottom center",
    scrub: true,
  },
});

  }, []);

  return (
    <>
      <main id="All" >

        <section className="Main-banner" data-speed="1.5">
          <Container>
            <Row>
              <Col md={6} >
                <h1>Search Land Of Choice</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. </p>
              </Col>
              <Col>




                {/* Dont Edit this this for animation  */}
                <div className="animated-logo">
                  <div className="image-wrapper">
                    <img
                      src={Logo}
                      alt="Logo"
                      id="rocket-image"
                      className="rocket-image main-image"
                    />
                    <div className="split-images" >
                      <img src={Logo} alt="Split 1" className="split-image" />
                      <img src={Logo} alt="Split 2" className="split-image" />
                      <img src={Logo} alt="Split 3" className="split-image" />
                    </div>
                  </div>
                </div>
                {/* Dont Edit this this for animation End */}

              </Col>
            </Row>
          </Container>
          <div className="d-flex align-items-center searc-bar  justify-content-between">
            <DropdownButton
              id="dropdown-city"
              title="City"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">New York</Dropdown.Item>
              <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
              <Dropdown.Item href="#">Chicago</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              id="dropdown-property"
              title="Property Type"
              variant="outline-light"
              className="me-2 set-out"
            >
              <Dropdown.Item href="#">Apartment</Dropdown.Item>
              <Dropdown.Item href="#">House</Dropdown.Item>
              <Dropdown.Item href="#">Condo</Dropdown.Item>
            </DropdownButton>

            <InputGroup className="me-2 ">
              <InputGroup.Text>
                <img src={Search} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search by location or property ID....."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Button variant="primary">Search</Button>
          </div>
        </section>

<section ref={containerRefs} className="welcome">
  {/* Transparent SVG */}


  {/* Blue SVG */}
<svg
  className="Move"
  width="384"
  height="383"
  viewBox="0 0 384 383"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  ref={logoRefs}
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    opacity: 0, // Start hidden
  }}
>
  <path
    d="M70.7116 334.744C0.580713 282.717 -19.6915 184.139 20.305 106.373C60.8494 26.9634 151.8 -15.7535 231.245 6.70026C334.25 35.7258 368.22 159.495 294.254 235.071C289.871 239.452 284.939 242.19 280.008 246.024C283.296 224.666 290.418 204.403 289.323 184.139C284.939 121.159 223.575 80.6332 160.567 96.5151C64.6847 121.159 15.9218 230.69 61.9452 318.314C64.6847 323.791 67.9721 329.267 70.7116 334.744Z"
    fill="transparent"
    stroke="black"
  />
  <path
    d="M101.16 147.639C98.4175 160.785 95.6751 169.548 95.1267 178.311C87.4483 244.037 141.746 297.713 208.109 289.497C312.864 276.352 373.195 176.121 335.351 77.5319C333.706 73.6979 332.609 69.3162 329.866 62.7437C379.228 103.275 397.327 185.979 373.743 254.444C338.642 356.319 222.369 411.09 134.067 367.821C55.0893 329.481 32.6025 229.249 86.3514 161.332C89.6421 156.951 94.0298 154.212 101.16 147.639Z"
    fill="transparent"
    stroke="black"
  />
</svg>
  <Container className="py-5">
    <Row className="mb-4 d-flex">
      <Col md={6} className="align-content-end head">
        <img src={Round} alt="scroling" className="scrol-top" ref={scrollImageRef} />
        <h2 className="same-head" ref={welcomeTextRef}>
          WELCOME TO SLOC
        </h2>
        <p className="same-head-p">
          SLOC – "Search Land of Choice" is a leading real estate company in India dedicated to
          providing exceptional property solutions. With a focus on customer satisfaction and market
          expertise, SLOC has built a reputation as a trusted name in the industry. Collaborating with
          top-tier real estate brands like Godrej, DLF, and many more, SLOC offers a diverse range of
          properties, including luxurious apartments, plots, villas, and commercial space.
        </p>
      </Col>
      <Col md={6} className="d-flex flex-wrap four-col-st">
        <Col md={6} lg={6} className="right">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={1} from={0} />
              M+
            </h3>
            <p>Sed ut Perspiciatis</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-bottom">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={500} from={0} />
              K
            </h3>
            <p>Lorem Ipsum</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="only-right">
          <Card>
            <h3 className="text-primary">
              <Counter className="Counter-no" to={24} from={0} />
              /7
            </h3>
            <p>Consectetur Adipiscing Elit, Sed Do</p>
          </Card>
        </Col>
        <Col md={6} lg={6} className="left-brdr">
          <Card className="">
            <h3 className="text-primary">
              <Counter className="Counter-no" to={1} from={0} />
              M+
            </h3>
            <p>Sed ut Perspiciatis</p>
          </Card>
        </Col>
      </Col>
    </Row>
  </Container>
</section>

<section ref={section1Ref} className="featured">
  <div className="featured-floating-imgs">
    <div className="image-stack">
      <img
        ref={(el) => (imageRefs.current[0] = el)}
        className="initial-image"
        src={Logo1}
        alt="img1"
      />
      <img
        ref={(el) => (imageRefs.current[1] = el)}
        className="initial-image"
        src={Logo1}
        alt="img2"
      />
      <img
        ref={(el) => (imageRefs.current[2] = el)}
        className="initial-image"
        src={Logo1}
        alt="img3"
      />
    </div>
  </div>
  <Container className="full">
           <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">
                <h2 className="same-head">FEATURED PROJECTS</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col md={4} className="align-items-end text-end align-content-center">
                <div className="custom-swiper-nav d-flex gap-4 justify-content-end mb-3">
                  <img src={PrevArrow} alt="Previous" className="swiper-button-prev-custom" />
                  <img src={NextArrow} alt="Next" className="swiper-button-next-custom" />
                </div>
              </Col>
            </Row>
    <Row className="features-row">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Navigation]}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
              >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <Col className="features-list p-0 dip-column">
                              {index < 3 && (
                    <img
                      ref={(el) => (bottomImageRefs.current[index] = el)}
                      className="bottom-image"
                      src={project.bottomImage}
                      alt={`bottom-img-${project.id}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1, // Below the card
                        pointerEvents: 'none', // Prevent interaction
                        width: '60%',
                        height: 'auto',
                      }}
                    />
                  )}
                <Card
                  ref={(el) => (boxRefs.current[index] = el)}
                  className={`custom-card card-${index} box-${index}`}
    style={{ position: 'relative', zIndex: 2 }}
                >
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                  <Card.Body className="uper-space">
                    <Card.Text className="mb-4 btn-loc">
                      <span>{project.size}</span> <span>{project.feet}</span>
                      <span>{project.location}</span>
                    </Card.Text>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="text-primary font-weight-bold">
                      {project.price}
                    </Card.Text>
                    <Button className="Up-arrow-btn">
                      <img src={Arrow} />
                    </Button>
                  </Card.Body>

                </Card>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  </Container>
</section>

        <section ref={section2Ref} className="Cta position-relative">
          <Container>
            <Row className="d-flex align-items-center justify-content-center ">
              <Col md={8}>
                <h2 className="same-head">FIND YOUR DREAM HOME TODAY!</h2>
                <p className="same-head-p">
                  Explore the best properties in your preferred location. Start
                  your journey to a perfect home with us.
                </p>
                <img src={back} alt="" className="back-roll" ref={section2ImageRef}
                />

              </Col>

              <Col md={4} className="text-end">
                {/* <img src={Cta} alt="" className="scroll-img" /> */}
                <Button variant="dark" className="banner-button">
                  Contact us for More info
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        <section ref={containerRefs1} className="social-proof position-relative">
          <img className="Move" src={WelcomeLogo} ref={logoRefs1} />
          <Container className="">
            <Row className="align-items-center justify-content-between">
              <Col md={5} className="mb-4 mb-md-0">
                <div className="ps-md-4">
                  <h2 className="same-head">Testimonials </h2>
                  <p className="same-head-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button className="Up-arrow-btn">
                    <img src={Arrow} />
                  </Button>
                </div>
                {/* <img src={soback} className="soc-img" alt="" /> */}
              </Col>

              <Col md={6} className="align-items-top rounded-0">
                <Card className="sticky-box position-sticky rounded-0">
                  <Card.Body className="p-0 pt-2">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className={index !== 0 ? "mt-4 pt-4 border-top" : ""}
                      >
                        <Row className="align-items-top inner-set">
                          <Col xs="auto img-hide">
                            <div
                              className="position-relative"
                              style={{ width: "110px", height: "80px" }}
                            >
                              <img
                                src={testimonial.image}
                                alt=""
                                className="img-fluid "
                              />
                            </div>
                          </Col>
                          <Col className="px-4">
                            <div className="position-relative">
                              <div
                                className="position-absolute"
                                style={{ top: "-50px", right: "0" }}
                              >
                                <span
                                  className="text-muted"
                                  style={{ fontSize: "40px", opacity: "0.2" }}
                                >
                                  <img src={testi} />
                                </span>
                              </div>
                              <h5 className="mb-2 socail-name">
                                {testimonial.name}
                              </h5>
                              <p className="text-muted mb-0 social-p">
                                {testimonial.text}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="featured blogs" ref={blogsectionRef}>
          <div className="featured-floating-imgs">
            <div className="image-stack image-stack-1">
              <img
                ref={(el) => (BlogimageRefs.current[0] = el)}
                className="initial-image"
                src={Logo1}
                alt="img1"
              />
              <img
                ref={(el) => (BlogimageRefs.current[1] = el)}
                className="initial-image"
                src={Logo1}
                alt="img2"
              />
              <img
                ref={(el) => (BlogimageRefs.current[2] = el)}
                className="initial-image"
                src={Logo1}
                alt="img3"
              />
            </div>
          </div>
          <Container className="">
            <Row className="mb-4 d-flex py-4 align-content-center">
              <Col md={8} className="align-content-center">

                <h2 className="same-head">Latest Blogs</h2>
                <p className="same-head-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Col>
              <Col
                md={4}
                className="align-items-end text-end align-content-center"
              >
                <Button variant="dark">See more Blogs</Button>
              </Col>
            </Row>
            <Row>
              {Blogs.map((Blogs, index) => (
                <Col md={4} key={Blogs.id} className="features-list p-0">
                  {/* <Card className=" position-relative"> */}
                  <Card
                    ref={(el) => (BlogsboxRefs.current[index] = el)} // Applied ref to each card
                    className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
                  >
                    <Card.Img
                      variant="top"
                      src={Blogs.image}
                      alt={Blogs.title}
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{Blogs.date}</span>
                        <span>{Blogs.catagory} SDFSDF</span>
                      </Card.Text>
                      <Card.Title>{Blogs.name}</Card.Title>

                      <Card.Text className="text-primary font-weight-bold">
                        {Blogs.text}
                      </Card.Text>
                      <Button className="Up-arrow-btn" href="/details">
                        <img src={Arrow} />
                      </Button>
                    </Card.Body>
                  </Card>
                  {/* <img
                    ref={(el) => (BlogBottomImageRefs.current[index] = el)}
                    className="bottom-image"
                    src={Blogs.BlogImage}
                    alt={`bottom-img-${Blogs.id}`}
                  /> */}
                </Col>
              ))}
            </Row>
          </Container>
        </section>
          <div className="position relative" ref={BlogsBottomsectionRef} >

        </div>
      </main>
    </>
  );
}

export default Home;


