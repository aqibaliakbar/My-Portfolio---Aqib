import IMemory from "../assets/images/portfolios/Featured/I-Memory.png";
import NewsUniverse from "../assets/images/portfolios/Featured/NewsUniverse.png";
import TextSpace from "../assets/images/portfolios/Featured/Text-Space.png";
import BlogCrud from "../assets/images/portfolios/Featured/Blog-Project.png";
import UniversityWebsite from "../assets/images/portfolios/Web Development/UniWebsite.png";
import WorkingContactForm from "../assets/images/portfolios/Html Forms/ContactForm-SMTP.png";
import themedWebsite from "../assets/images/portfolios/Web Development/themedWebsite.png";


const portfolios = [
  {
    id: 1,
    category: {
      name: "MERN",
      featured: true,
    },
    image: IMemory,
    git: "https://github.com/aqibaliakbar/I-Memory---Mern-Stack",
    live: "https://404-i-memory.netlify.app/",
    title: " I-Memory: Cloud-Based Note Storage Application",
    text: "Tech Stack: MERN (MongoDB, Express.js, ReactJS, Node.js)",
    language: [
      {
        JavaScript: "88.5%",
        CSS: "8.2%",
        HTML: "3.3%",
      },
    ],
    description:
      "<p>Welcome to I-Memory, a showcase of my skills in full-stack web development using the MERN stack (MongoDB, Express.js, ReactJS, Node.js). This project not only highlights my proficiency in building dynamic and interactive web applications but also demonstrates the implementation of robust authentication and authorization mechanisms, coupled with seamless CRUD operations. </p> <h2>Key Features:</h2> <p><b>MERN Stack Architecture:</b> MongoDB: The project utilizes MongoDB as the database, ensuring efficient data storage and retrieval.Express.js: Express.js forms the backend framework, providing a scalable and organized structure for handling API requests.ReactJS: The frontend is built with ReactJS, delivering a dynamic and user-friendly interface for a seamless user experience.Node.js: Node.js powers the server, enabling asynchronous handling of requests and facilitating smooth communication between the frontend and backend. </p> <p> <b>Authentication and Authorization:</b> I-Memory incorporates secure authentication mechanisms, allowing users to register, log in, and log out securely.Robust authorization processes ensure that only authenticated users can access specific features and endpoints, enhancing the overall security of the application. </p> <p> <b>RESTful API Endpoints:</b> The project features a set of well-designed RESTful API endpoints that handle user authentication, authorization, and CRUD operations.Secure user registration and login endpoints provide a foundation for user management, while logout functionality ensures a smooth user experience. </p> <p> <b>CRUD Operations:</b> I-Memory supports Create, Read, Update, and Delete (CRUD) operations for managing user data.Users can seamlessly create, edit, and delete their memories, providing an intuitive and interactive way to manage personal data. </p> <p> <b>ReactJS Frontend:</b> The frontend, developed with ReactJS, offers a visually appealing and responsive interface.The use of state management and React Hooks ensures a smooth and dynamic user experience, with real-time updates and error handling. </p> </br> <p> I-Memory is not just a project; it's a testament to my ability to create feature-rich, secure, and scalable web applications. Dive into the world of I-Memory to experience the seamless integration of the MERN stack, authentication, authorization, and CRUD functionality in a single, cohesive project. Whether you're exploring the application's features or appreciating its clean and intuitive design, I-Memory is a showcase of my commitment to excellence in web development.</p> ",
  },
  {
    id: 2,
    category: {
      name: "React-JS",
      featured: true,
    },
    image: NewsUniverse,
    git: "https://github.com/aqibaliakbar/NewsUNIverse----Function-Based-JavaScript-ReactJS-Bootstrap",
    live: "https://404-newsuniverse.netlify.app/",
    title: "NewsUNIverse: News Aggregation with Infinite Scroll",
    text: "Tech Stack: JavaScript, ReactJS, Bootstrap",
    language: [
      {
        JavaScript: "72.7%",
        HTML: "15.3%",
        CSS: "12.0%",
      },
    ],
    description:
      "<p>NewsUNIverse is an innovative news aggregation platform that fetches news articles from different categories through a news API. The application offers an infinite scroll feature, providing users with a seamless and engaging browsing experience.</p> <h2>Key Features:</h2> <p> ⦁	Utilized JavaScript and ReactJS to fetch and display news articles dynamically. </p> <p> ⦁	Implemented infinite scroll functionality to load more news articles as the user scrolls down. </p> <p>⦁	Utilized Bootstrap for responsive and visually appealing design.</p> <p>⦁	Enhanced user engagement by offering a wide variety of news categories.</p>",
  },
  {
    id: 3,
    category: {
      name: "React-JS",
      featured: true,
    },
    image: TextSpace,
    git: "https://github.com/aqibaliakbar/Text-Space---JavaScript-Reactjs-Bootstrap",
    live: "https://textspacedevaq.netlify.app/",
    title: "Text-Space: Text Manipulation Tool using ReactJS",
    text: "Tech Stack: JavaScript, ReactJS, Bootstrap",
    language: [
      {
        JavaScript: "81.5%",
        CSS: "13.1%",
        HTML: "5.4%",
      },
    ],
    description:
      "<p>Text-Space is a versatile text manipulation tool developed using ReactJS. The application allows users to change text cases (upper/lower), remove spaces between text words, and even provides an estimate of the time it would take to read the given text etc.</p> <h2>Key Features:</h2> <p> ⦁ Developed using ReactJS, enabling interactive and dynamic text manipulation. </p> <p> ⦁	Integrated features for changing text cases, removing spaces, and estimating read time. </p> <p>⦁	Created an intuitive user interface with user-friendly text input and result display areas.</p>",
  },
  {
    id: 4,
    category: {
      name: "Redux",
      featured: true,
    },
    image: BlogCrud,
    git: "https://github.com/aqibaliakbar/Blog-Project-with-CRUD---Using-API-Async-Reduxjs",
    live: "https://blogproject-aq.netlify.app/",
    title: " Blog Project with CRUD Operations Using API, Async, and Redux.js",
    text: "Tech Stack: JavaScript, ReactJS, ReduxJS, CSS",
    language: [
      {
        JavaScript: "81.7%",
        CSS: "10.8%",
        HTML: "7.5%",
      },
    ],
    description:
      "<p>Welcome to my Portfolio Blog Project, where creativity meets functionality! This project is a showcase of my skills in web development, featuring a robust Content Management System (CMS) built with API integration, asynchronous programming, and the power of Redux.js.</p> <h2>Key Features:</h2> <p><b>CRUD Operations:</b> Create: Users can easily create new blog posts with a user-friendly interface. The system ensures a smooth and intuitive post creation process.Read: Explore a dynamic and responsive blog layout that fetches and displays posts seamlessly from a third-party fake API, providing a realistic data environment for users to engage with. Update: Edit and refine your blog posts effortlessly. The project incorporates a comprehensive update mechanism that allows authors to modify content, timestamps, and emojis as needed.Delete: Keep your blog organized by removing outdated or unnecessary posts with the secure and user-friendly delete functionality. </p> <p> <b>Async Operations:</b> Experience a seamless and responsive interface through the implementation of asynchronous programming. The blog project utilizes async techniques to enhance performance, ensuring a smooth user experience without unnecessary delays. </p> <p> <b>Redux.js Power:</b> Harnessing the power of Redux.js, this project manages state efficiently, providing a scalable and maintainable solution for handling the application's complex data flow. Redux ensures a single source of truth for the application state, simplifying debugging and development. </p> <p> <b>Timestamps and Emojis:</b> HEach blog post is enriched with timestamps, capturing the moment of creation or modification. Additionally, inject personality into your posts with a wide range of emojis, allowing authors to express themselves uniquely. </p> </br> <p> Whether you're a visitor exploring engaging content or an aspiring blogger, this Portfolio Blog Project showcases my commitment to creating dynamic and feature-rich web applications. Dive in, explore, and witness the synergy of API integration, asynchronous programming, and the organizational prowess of Redux.js in action!</p>",
  },
  {
    id: 5,
    category: {
      name: "Html Forms",
      featured: false,
    },
    image: WorkingContactForm,
    git: "https://github.com/aqibaliakbar/Responsive-Working-Contact-Form-With-Dark-Mode-and-Custom-Modal-Using-Html-Css-Js",
    live: "https://working-contact-form-1.netlify.app/",
    title: "Dark Mode Contact Form with SMTP Server Integration ",
    text: "Tech Stack: Html, CSS, JavaScript",
    language: [
      {
        CSS: "44.7%",
        HTML: "40.0%",
        JavaScript: "15.3%",
      },
    ],
    description:
      "<p>Welcome to my latest project, a cutting-edge Dark Mode Contact Form designed to elevate user experience while ensuring seamless communication. This project represents my proficiency in web development, combining HTML, CSS, and JavaScript to create a visually appealing and functional form.</p><h3>Key Features:</h3>  <br/><ul><li><b>Dark Mode:</b> Experience a sleek and modern design with a dark mode theme, providing users with a stylish and comfortable interface, especially in low-light environments.</li><li><b>Contact Form:</b> The project includes a fully functional contact form that allows users to send messages seamlessly. The form is designed for a user-friendly experience, with validation for input fields to enhance data accuracy.</li><li><b>SMTP Server Integration:</b> To ensure reliable email delivery, the contact form is integrated with an SMTP server. This backend functionality enables users to receive email notifications promptly.</li><li><b>Responsive Design:</b> The form is built with a responsive design approach, ensuring optimal performance and usability across various devices and screen sizes.</li></ul> <br/><h3>Dark Mode Implementation:</h3><p>The dark mode not only enhances the aesthetic appeal of the contact form but also contributes to user comfort. It's implemented using a combination of CSS styles and JavaScript functionalities to enable users to switch between light and dark modes effortlessly.</p><h3>Technologies Used:</h3><p>This project leverages the following technologies:</p><ul><li><b>HTML:</b> For creating the structure of the contact form.</li><li><b>CSS:</b> Styling is achieved using CSS to ensure a visually appealing and responsive layout.</li><li><b>JavaScript:</b> Functionality, including dark mode toggling and form validation, is implemented using JavaScript.</li></ul>  <br/><h3>Challenges and Solutions:</h3><p>Overcoming challenges in implementing dark mode seamlessly while maintaining form functionality was a key aspect of this project. By carefully coordinating CSS and JavaScript, I ensured a smooth transition between light and dark modes without compromising the user experience.</p><h3>Future Enhancements:</h3><p>The project's current iteration serves as a solid foundation. Future enhancements may involve additional features such as file uploads, CAPTCHA integration, and further customization options for users.</p><p>Explore this Dark Mode Contact Form and witness the convergence of modern design, user-friendly functionality, and backend integration. This project exemplifies my dedication to creating innovative and visually striking web solutions. I am eager continue refining my skills and embracing new challenges in future projects.</p>",
  },
  {
    id: 6,
    category: {
      name: "Web Development",
      featured: false,
    },
    image: themedWebsite,
    git: "https://github.com/aqibaliakbar/Themed-Sushi-Website-HTML-CSSS",
    live: "https://themed-sushi-website.netlify.app/",
    title: "Food-Themed Website with AOS Animation",
    text: "Tech Stack: Html, CSS, JavaScript",
    language: [
      {
        CSS: "61.9%",
        HTML: "37.7%",
        JavaScript: "0.4%",
      },
    ],
    description:
      "<p>Welcome to my delectable creation - a vibrant and visually engaging food-themed website designed to tantalize taste buds and delight users. This project represents the harmonious fusion of HTML, CSS, and JavaScript, with a sprinkle of magic from the AOS (Animate On Scroll) library to bring delightful animations to life.</p><h3>Key Features:</h3><br/><ul><li><b>Immersive Food Experience:</b> Dive into a mouthwatering visual journey, where the website showcases a variety of delicious dishes in an immersive and enticing manner.</li><li><b>AOS Animations:</b> Elevate user engagement with seamless animations powered by the AOS library. Each scroll reveals captivating transitions, creating a dynamic and lively browsing experience.</li><li><b>Responsive Design:</b> The website is crafted with a responsive design, ensuring a delightful user experience across devices, from desktops to tablets and mobile phones.</li><li><b>Interactive Elements:</b> Engage users with interactive elements such as navigational menus, hover effects, and call-to-action buttons, creating an intuitive and user-friendly interface.</li></ul><br/><h3>AOS Animation Implementation:</h3><p>The AOS library injects life into the website with on-scroll animations. From subtle fades to eye-catching rotations, AOS enhances the visual storytelling, creating an immersive experience that captures the essence of the culinary world.</p><h3>Technologies Used:</h3><p>This project leverages a powerful trio of technologies:</p><u><li><b>HTML:</b> Building the foundation of the website with structured and semantic markup.</li><li><b>CSS:</b> Styling elements to create a visually appealing and cohesive design.</li><li><b>JavaScript:</b> Enhancing interactivity and implementing AOS animations to bring dynamic movements to the webpage.</li></u<h3>Challenges and Solutions:</h3><>Navigating the culinary landscape while ensuring smooth AOS animations posed an exciting challenge. Through meticulous coordination of AOS configurations and CSS styles, I achieved a perfect blend of animation and aesthetics, delivering a delightful visual feast for users.</<h3>Future Enhancements:</h3><p>This food-themed website is just the beginning. Future enhancements may involve expanding the menu, integrating e-commerce functionality, and incorporating user-generated content to foster a vibrant community of food enthusiasts.</p><p>Indulge your senses and explore this culinary journey through my food-themed website. The combination of AOS animations and thoughtful design exemplifies my commitment to creating immersive and visually stunning web experiences. I am eager to continue exploring new avenues and flavors in the world of web development.</p>",
  },

  {
    id: 7,
    category: {
      name: "Web Development",
      featured: false,
    },
    image: UniversityWebsite,
    git: "https://github.com/aqibaliakbar/Responsive-Website-Html-Css",
    live: "https://aqibaliakbar.github.io/Responsive-Website-Html-Css/index.html",
    title: "University Website",
    text: "Tech Stack: Html, CSS",
    language: [
      {
        HTML: "78.2%",
        CSS: "19.9%",
        PHP: "1.9%",
      },
    ],
    description:
      "<p>As a passionate and dedicated web developer, I am excited to showcase my latest project – a comprehensive University Website developed using HTML, CSS, and JavaScript. This multifaceted website comprises five meticulously crafted pages, each designed with user experience and functionality in mind.</p><h3>Home Page:</h3><p>The home page serves as the gateway to the university's online presence. It features an intuitive navigation menu, providing quick access to essential sections of the site. A dynamic hero section welcomes visitors, displaying captivating visuals that capture the essence and spirit of the institution.</p><h3>About Us:</h3><p>The 'About Us' page provides a detailed overview of the university's history, mission, and values. Engaging content is complemented by aesthetically pleasing design elements, creating an immersive narrative for users.</p><h3>Academics:</h3><p>Users can explore the diverse academic programs offered by the university on the 'Academics' page. A responsive layout ensures an optimal viewing experience across various devices.</p><h3>Admissions:</h3><p>The 'Admissions' section guides prospective students through the application process. Interactive forms and clear calls-to-action streamline the user journey, making it easy for applicants to navigate.</p><h3>Contact Us:</h3><p>The 'Contact Us' page features a user-friendly contact form, encouraging seamless communication between the university and its stakeholders. Additional contact details and a map integration provide multiple avenues for getting in touch.</p><h3>Technologies Used:</h3><p>HTML and CSS: The structure and styling of each page were meticulously crafted using HTML and CSS, ensuring a visually appealing and responsive design. JavaScript: JavaScript was employed to enhance the website's interactivity. Dynamic elements and smooth transitions contribute to a polished and modern user experience.</p><h3>Challenges and Achievements:</h3><p>Overcoming the challenge of balancing aesthetics with functionality, I ensured that the website not only looks impressive but also provides a seamless and intuitive user experience. Implementing responsive design principles allowed the site to adapt effortlessly to different screen sizes, guaranteeing accessibility for users on various devices.</p><h3>Future Enhancements:</h3><p>The current iteration of the university website lays a solid foundation. Future enhancements may include the integration of additional features, such as a blog, event calendar, or student portal, to further enrich the user experience.</p><p>This university website project reflects my commitment to delivering impactful and user-centric web solutions. I am enthusiastic about the opportunity to continue refining and expanding my skills in future projects. Explore the website and experience the harmonious blend of design and functionality that defines this digital representation of academic excellence.</p>",
  },
];

export default portfolios;
