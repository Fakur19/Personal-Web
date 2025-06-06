/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fajar Kurnia",
  title: "Hi, I'm Fajar",
  subTitle: emoji(
    "I'm an data analyst with a passion for finding stories in numbers. From sales trends to social sentiment, I use tools like Python, R, SQL, Tableau, and Power BI to dig into data and deliver insights that matter. Check out my projects to see how I turn messy data into meaningful solutions."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  instagram: "https://www.instagram.com/fa.kur/",
  github: "https://github.com/fakur19",
  kaggle: "https://www.kaggle.com/fajarkurnia/code",
  tableau: "https://public.tableau.com/app/profile/fajar.kurnia3266/vizzes",
  linkedin: "https://www.linkedin.com/in/fajar-kurnia-b8a556234/",
  gmail: "kurniafajarkurnia@gmail.com",
  medium: "https://medium.com/@kurniafajarkurnia",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS DATA ANALYST WHO LOVES TO TURN RAW DATA INTO ACTIONABLE STORIES",
  skills: [
    emoji(
      "⚡ Clean and analyze complex datasets to uncover insights"
    ),
    emoji("⚡ Build dashboards and visual reports that help decision-makers take action"),
    emoji(
      "⚡ Use Python & R to automate workflows and run exploratory data analysis"
    ),
    emoji(
      "⚡ Develop models for sentiment analysis and trend detection in real-world scenarios"
    ),
    emoji(
      "⚡ Craft compelling data stories from business metrics, customer feedback, and public data"
    ),
    emoji(
      "⚡ Work with tools like SQL, Tableau, and Power BI to create scalable analytics solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",

      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/python.png")
    },
    {
      skillName: "R",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/r.webp")
    },
    {
      skillName: "JavaScript",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/js.png")
    },
    {
      skillName: "Nodejs",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/nodejs.png")
    },
    {
      skillName: "PostgreSQL",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/postgre.png")
    },
    {
      skillName: "BigQuery",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/big-query.webp")
    },
    {
      skillName: "Google Cloud Platform",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/gcp.png")
    },
    {
      skillName: "Tableau",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/tableau.png")
    },
    {
      skillName: "Power BI",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/power-bi.png")
    },
    {
      skillName: "Looker Studio",
      iconifyClassname: "tableau-icon",
      imageSrc: require("./assets/images/looker.png")
    },


  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Widyatama University",
      logo: require("./assets/images/widyatama.png"),
      subHeader: "Bachelor of Informations System",
      duration: "2021 - 2025",
      desc: "Relevant Coursework:",
      descBullets: [
        "Data Analytics",
        "Data Science",
        "Business Intelligence",
        "Database Management Systems",
        "System Analysis and Design",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming and Scripting (Python, R)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Handling (SQL, Excel)",
      progressPercentage: "88%"
    },
    {
      Stack: "Data Visualization (Tableau, Power BI, Looker)",
      progressPercentage: "95%"
    },
    {
      Stack: "Analytical Skills: Data Wrangling, EDA, Statistical Modeling, Data Storytelling",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME FINE WORK THAT I'VE MADE. 🔥",
  projects: [
    {
      image: require("./assets/images/sales.png"),
      projectName: "Sales & Customer Dashboard",
      projectDesc: "The sales dashboard shows key metrics and trends to analyze year-over-year performance. The customer dashboard provides insights into customer data and behaviors, helping teams improve segmentation and satisfaction.",
      footerLink: [
        {
          name: "See the project",
          url: "https://public.tableau.com/app/profile/fajar.kurnia3266/viz/SalesCustomer_17295028187300/SalesDashboard"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/hr.png"),
      projectName: "HR Dashboard",
      projectDesc: "HR Dashboard provides workforce insights: Overview, Demographics, and Income sections for trends and salary analysis. An Employee Records View lists details with filters by name, department, age, and more for in-depth data access.",
      footerLink: [
        {
          name: "See the project",
          url: "https://public.tableau.com/app/profile/fajar.kurnia3266/viz/HRDashboard_17303697834920/HRDashboardOverview"
        }
      ]
    },
    {
      image: require("./assets/images/quipper.webp"),
      projectName: "Sentiment Analysis - Education Apps on Playstore",
      projectDesc: "This project uses sentiment analysis on Google Play reviews to evaluate user feedback for three major Indonesian education apps—Ruangguru, Zenius, and Quipper. By classifying reviews as positive, neutral, or negative, it identifies key insights to help improve user experience and online learning quality.",
      footerLink: [
        {
          name: "See the project",
          url: "https://www.kaggle.com/code/fajarkurnia/sentiment-analysis-education-apps"
        }
      ]
    },

    {
      image: require("./assets/images/unicorn.png"),
      projectName: "Exploratory Data Analysis - Unicorn Companies 2022",
      projectDesc: "This analysis explores a dataset of unicorn companies from 2022 to uncover trends and patterns across industries, valuations, and funding.",
      footerLink: [
        {
          name: "See the project",
          url: "https://www.kaggle.com/code/fajarkurnia/exploratory-data-analysis-unicorn-companies-2022#Exploratory-Data-Analysis-(EDA)-Summary-for-Unicorn-Companies-(2022)"
        }
      ]
    },

    {
      image: require("./assets/images/1984.png"),
      projectName: "Sentiment Analysis - 1984's Review on Goodreads",
      projectDesc: "Analyzing public sentiment toward George Orwell's 1984 from Goodreads reviews (2007–2025) using BERT. The project explores sentiment volatility, thematic focus, and perception shifts, highlighting how societal changes impact the book's legacy.",
      footerLink: [
        {
          name: "See the project",
          url: "https://www.kaggle.com/code/fajarkurnia/1984-s-sentiment-analysis-on-goodreads"
        }
      ]
    },

    {
      image: require("./assets/images/ulasbuku.png"),
      projectName: "Ulasbuku - Book's Social Media",
      projectDesc: "A full-stack social platform for book lovers where users can discover, review, and rate books, share posts with optional images, comment on discussions, and connect by following other readers. Built with Node.js, Express, MongoDB, and EJS, featuring a responsive design and light/dark modes.",
      footerLink: [
        {
          name: "See the project",
          url: "https://ulasbuku.onrender.com/"
        }
      ]
    },

    {
      image: require("./assets/images/goty.png"),
      projectName: "Game of The Year Sentiment Analysis",
      projectDesc: "This repository contains the Jupyter Notebook and resources for a research project on sentiment analysis of 'Game of the Year' award-winning games on Steam, utilizing the BERT model from Hugging Face Transformers.",
      footerLink: [
        {
          name: "See the project",
          url: "https://github.com/Fakur19/goty-sentiment-analysis"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications that I have done !",

  achievementsCards: [
    {
      title: "Cisco CyberOps Associate",
      subtitle: "Trained in real-world cybersecurity operations, including threat detection, incident response, and network monitoring. Equipped with essential skills to help protect digital environments.",
      image: require("./assets/images/cisco.png"),
      imageAlt: "Cisco CyberOps Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/cd5b8745-25d0-499e-bf9b-f1d18f6b98ee"
        },
      ]
    },

    {
      title: "Google Data Analytics",
      subtitle:
        "Turning raw data into actionable insights using tools like SQL, R, and spreadsheets. Gained a strong foundation in data cleaning, visualization, and storytelling to support data-driven decisions.",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/7abb438921ba6aac6ce9b06d9fb89940"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Business Intelligence",
      subtitle:
        "Built dynamic dashboards and reports using Tableau and SQL to visualize business performance. Learned how to transform data into clear, strategic insights that drive smarter business outcomes.",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/bc1ca8031a9002847f282ebb82bd3775"
        }
      ]
    },



    {
      title: "Google AI Essentials",
      subtitle: "Explored the power of artificial intelligence through real-world use cases. Gained a solid understanding of AI concepts, ethical considerations, and practical tools—no coding required.",
      image: require("./assets/images/google-ai.png"),
      imageAlt: "Google logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/3fdd3c29-74f9-464c-b6cd-7306507df1bc"
        },
      ]
    },

    {
      title: "Google Cloud Skill Boost",
      subtitle: "Hands-on experience with Google Cloud’s most powerful tools. Completed guided labs and projects across cloud computing, data engineering, and machine learning to solve real business challenges.",
      image: require("./assets/images/gcp.png"),
      imageAlt: "Google Cloud Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.cloudskillsboost.google/public_profiles/a5b48afe-59dc-48e7-bd4b-72308396e09f"
        },
      ]
    },

    {
      title: "SAP AC010 - Business Processes in Financial Accounting",
      subtitle: "This course provides a comprehensive overview of key financial accounting processes within the SAP ERP system, covering essential modules such as General Ledger (GL) accounting, Accounts Payable (AP), and Accounts Receivable (AR).",
      image: require("./assets/images/sap.png"),
      imageAlt: "SAP Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.cloudskillsboost.google/public_profiles/a5b48afe-59dc-48e7-bd4b-72308396e09f"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",

  email_address: "kurniafajarkurnia@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
