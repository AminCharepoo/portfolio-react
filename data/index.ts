export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  //{ name: "Work Experience", link: "#workExperience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Cool stuff about me ",
    description: "",
    moreInfo: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[50vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Look at this cool 3d earth",
    description: "",
    moreInfo: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "IDK",
    description: "",
    moreInfo: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Education",
    description: "",
    moreInfo: "Northeastern University 2024-Present\nComputer Science\nGPA: 4.0\nActivities: NUVR Executive Board\nRelevant Classes: Intro to Java\nDean's List: 2024",
    className: "md:col-span-3 md:row-span-1", //md:col-span-1 md:row-span-2 md:text-white text-purple 
    imgClassName: "mt-32 h-20 mt-12 mr-auto lg:mt-36",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/NEUlogo2.png",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "Skills to pay bills",
    description: "I constantly try to improve",
    moreInfo: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  
  {
    id: 6,
    title: "Contact me (imagine using email you boomer)",
    description: "",
    moreInfo: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
 
];

export const projects = [
  {
    id: 1,
    title: "Product Price Tracker",
    des: "Store your links for products and their auction link for easy access. Great for people that wait for a great deal.",
    img: "/ProductTracker.png",
    iconLists: ["/logo-javascript.svg", "/html-1.svg", "/css-3.svg"],
    link: "https://amincharepoo.github.io/Product-Tracker/",
  },
  {
    id: 2,
    title: "Virtual Reality Bowling Simulator",
    des: "Simple bowling game to help beginners learn the ruels of bowling",
    img: "/p2.svg",
    iconLists: ["/c--4.svg", "/unity-69.svg", "/meta-3.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "Sudoku Solver",
    des: "Solve even the hardest Sudoku problems!",
    img: "/p3.svg",
    iconLists: ["/python-5.svg"],
    link: "https://github.com/AminCharepoo/sudoku-solver",
  },
  {
    id: 4,
    title: "Virtual Reality Wizard Game",
    des: "Explore a dangerous maze as a wizard drawing your own spells!",
    img: "/p4.svg",
    iconLists: ["/c--4.svg", "/unity-69.svg", "/blender-2.svg", "/meta-3.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AminCharepoo"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/amin-charepoo/"
  },
];