import { FaItchIo } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import darkScreenshot1 from "../assets/projects/dark-was-safer/screenshot1.png";
import darkScreenshot2 from "../assets/projects/dark-was-safer/screenshot2.png";
import darkScreenshot3 from "../assets/projects/dark-was-safer/screenshot3.png";
import bazookaScreenshot1 from "../assets/projects/bazooka/screenshot1.png";
import bazookaScreenshot2 from "../assets/projects/bazooka/screenshot2.png";
import bazookaScreenshot3 from "../assets/projects/bazooka/screenshot3.png";
import bazooka from "../assets/bazooka.jpg";

import {
  nitk,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  echo,
  kosh,
  polkadot_dev_cli,
  hackathon_curation_agent,
  kudos,
  web3_marketing_hackathon
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiOracle,
  SiSupabase,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiVercel,
  SiIntellijidea,
  SiCachet,
  SiNicehash,
  SiUnity,
  SiVrchat,
  SiBlender,
  SiGamedeveloper,
  SiUikit,
  SiUbisoft,
  SiSharp
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang, FaXTwitter } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiCamera, BiLogoVisualStudio, BiSolidJoystick } from "react-icons/bi";

import { RiGeminiFill } from "react-icons/ri";
import { BsGithub, BsHeadsetVr, BsPersonArmsUp, BsRobot } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { GiArtificialIntelligence, GiSettingsKnobs } from "react-icons/gi";

export const resumeLink =
  "https://drive.google.com/file/d/1amNznsbyN6r-YHkNeMWAcTunwIcXeSRA/view?usp=drive_link";
export const repoLink = "https://github.com/AmaanGupta";

export const callToAction = "https://www.linkedin.com/in/amaan-gupta-7bba7b329/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contactMe",
    title: "Contact",
  },
];



// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethindia,
    event: "ETHIndia'24 | India's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 10 Overall Finalists/Winners, True Network's Winner",
    content2: "Polkadot's 1st Runner Up, Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article:
      "https://www.linkedin.com/posts/mittal-parth_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    project: "https://devfolio.co/projects/khoj-3336",
    youtube:
      "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: TbBrandCSharp,
        name: "C#",
      },
      
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      
    ],
  },
  {
    title: "Game Engines / Technologies",
    items: [
      {
        id: "f-1",
        icon: SiUnity,
        name: "Unity",
      },
      {
        id: "f-2",
        icon: BiCamera,
        name: "Cinemachine",
      },
      {
        id: "f-3",
        icon: BsRobot,
        name: "AI Navigation",
      },
      {
        id: "f-4",
        icon: BsPersonArmsUp,
        name: "UnityPhysics",
      },
      {
        id: "f-5",
        icon: GiSettingsKnobs,
        name: "XR Toolkit",
      },
      
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-2",
        icon: BsGithub,
        name: "GitHub",
      },
      {
        id: "t-3",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiBlender,
        name: "Blender",
      },
      
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "XOX Studios",
    logo: oracle,
    link: "",
    positions: [
      {
        title: "Unity Game Programmer",
        duration: "June 2026 - Present",
        content: [
          {
            text: "Contributing to the development of Everhollow, a mobile action RPG, with a focus on gameplay systems, mobile controls, player movement, camera behaviour, and combat mechanics.",
            link: "",
          },
          {
            text: "Developed directional targeting and combo-based combat systems.",
            link: "",
          },
          {
            text: "Implemented mobile movement, touch camera controls, sprinting, and crouching.",
            link: "",
          },
          {
            text: "Developed stealth mechanics with enemy detection and awareness systems.",
            link: "",
          },
          {
            text: "Improved animation transitions, input responsiveness, and gameplay polish.",
            link: "",
          },
          {
            text: "Collaborated through regular meetings, testing, debugging, and feedback.",
            link: "",
          },
        ],
      },
    ],
  },

  {
    organisation: "Fiverr",
    logo: averlon,
    link: "",
    positions: [
      {
        title: "3D Artist",
        duration: "Apr 2025 - Sept 2025",
        content: [
          {
            text: "Created custom 3D models and assets based on client requirements, incorporating feedback and delivering production-ready work for international clients.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "The Dark Was Safer",

    github: "https://github.com/AmaanGupta/The-Dark-Was-Safer",
    link: "https://aman53.itch.io/the-dark-was-safer",

    image: khoj,

    media: [
          {
            type: "image",
            src: darkScreenshot1,
          },
          {
            type: "image",
            src: darkScreenshot2,
          },
          {
            type: "image",
            src: darkScreenshot3,
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/embed/8vv4g_NnUyQ?si=7Vj_ctjaJ-x4y15E",
          },
        ],

   summary:
    "A Top-Down puzzle-adventure game built in Unity around a light-driven interaction system, where illuminating objects dynamically changes the environment and gameplay.",

    features: [
          "Developed a light-based interaction system with timed object responses",
          "Implemented destructible obstacles and illumination-triggered mechanics",
          "Created enemy spawning, movement, and light-based freeze behaviour",
          "Built level progression, checkpoints, teleportation, and reset systems",
          "Designed a complete gameplay loop with puzzle encounters and an escape sequence",
        ],
    stack: [
      {
        id: "proj1-icon-1",
        icon: SiUnity,
        name: "Unity",
      },
      {
        id: "proj1-icon-2",
        icon: SiSharp,
        name: "C#",
      },
    ],
  },
  {
    id: "project-2",
    title: "Bazooka!",

    github: "https://github.com/AmaanGupta/Bazooka",
    link: "https://aman53.itch.io/bazooka",

    image: bazooka,

   media: [
          {
            type: "image",
            src: bazookaScreenshot1,
          },
        
          {
            type: "youtube",
            src: "https://www.youtube.com/embed/8vv4g_NnUyQ?si=7Vj_ctjaJ-x4y15E",
          },
        ],

    content:
      "The Dark Was Safer is a 3D puzzle-adventure game built in Unity for a game jam around the theme “Inverted.” In a world where darkness is safe and light is dangerous, players must strategically use their lantern to destroy obstacles, trigger environmental interactions, awaken enemies, and solve puzzles. The project features light-driven gameplay systems, enemy encounters, level progression, checkpoints, and a complete gameplay loop.",

    stack: [
      {
        id: "proj1-icon-1",
        icon: SiUnity,
        name: "Unity",
      },
      {
        id: "proj1-icon-2",
        icon: SiSharp,
        name: "C#",
      },
    ],
  },
];

// Add links to blogs here






// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/amaan-gupta-7bba7b329/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/AmaanGupta",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:06amaangupta@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/filson_whisk",
  },
  {
    id: "social-media-5",
    icon: FaItchIo,
    link: "https://aman53.itch.io/",
  }
];
export const socialMediaTop = [

  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/amaan-gupta-7bba7b329/",
  },
  
  {
    
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/AmaanGupta",
  },
  
  {
    id: "social-media-5",
    icon: FaItchIo,
    link: "https://aman53.itch.io/",
  }
];


// Your professional summary
export const aboutMe = {
  name: "Amaan Gupta",
  githubUsername: "AmaanGupta",
  tagLine:
    "Gameplay Programmer | Unity | C#",
  intro:
    "Unity gameplay programmer focused on combat systems, movement mechanics, enemy AI, and physics-driven interactions.",
};



// GitHub repos to show open source contributions from.
// Each entry is either "owner/repo" or ["owner/repo", "public-display-name"].
// When the display name is omitted, the repo slug (part after "/") is used in filters.
export const includedRepos = [
  ["publiclab/plots2", "publiclab-plots2"],
  "zulip/zulip",
  "paritytech/polkadot-sdk",
  ["supabase/cli", "supabase-cli"],
];
