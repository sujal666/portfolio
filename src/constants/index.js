import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Full-Stack Developer",
      icon: backend,
    },
    {
      title: "UI/UX",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Navodita Infotech",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2023 - November 2023",
      points: [
        "Developed a robust e-commerce website featuring secure payment management, ensuring seamless online shopping experiences.",
        "E-commerce Website Development: Built a comprehensive e-commerce platform, integrating features like product listings, shopping carts, and checkout processes.",
        "Responsive Design: Ensured the website was fully responsive and mobile-friendly, providing a consistent user experience across devices",
        "Testing & Debugging: Conducted thorough testing and debugging to identify and resolve issues, ensuring the reliability and stability of the application.",
      ],
    },
    {
      title: "UI/Ux Designer",
      company_name: "QuickFlo",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2024 - June 2024",
      points: [
        "Wireframing & Prototyping: Created wireframes and interactive prototypes to visualize app layouts and user flows.",
        "Visual Design: Developed high-fidelity designs with attention to color schemes, typography, and branding.",
        "User Testing: Facilitated user testing sessions to gather feedback and iterate on designs for optimal usability.",
        "Design Systems: Built and maintained design systems to ensure consistency across the application.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing consStructive feedback to other developers.",
    //   ],
    // },
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Banking platform ",
      description:
        "a versatile banking platform that makes managing your finances effortless! Technologies Used: Nextjs, Typescript, ShadCN, Appwrite , Plaid, dwolla , Sentry",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sujal666/Banking",
    },
    {
      name: "IPhone Website Clone",
      description:
        "Utilized cutting-edge GSAP animations to create a visually captivating experience,incorporating smooth 3D rotations, dynamic light effects, and parallax scrolling.Implemented hover and touch interactions that respond dynamically, including zoom-ins,color shifts, and subtle pulsations, providing a tactile feel reminiscent of a real iPhone.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Gsap",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sujal666/Iphone_Web",
    },
 
  ];
  
  export { services, technologies, experiences, projects };