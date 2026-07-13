import cinechat from "../assets/images/projects/cinechatquiz.png";
import filming from "../assets/images/projects/filmingapp.png";
import alejandro from "../assets/images/projects/alejandromagno.png";
import torneo from "../assets/images/projects/torneo-arquero.png";

export const projects = [
  {
    title: "CineChat Quiz",
    tag: "FINAL DEGREE PROJECT",
    image: cinechat,
    description:
      "Android application that combines a real-time chat system with a movie quiz. Includes user authentication, multiplayer chat rooms and PHP/MySQL backend communication.",
    technologies: [
      "Java",
      "Groovy",
      "Android",
      "Volley",
      "PHP",
      "MySQL"
    ],
    github: "https://github.com/ManuelCastro-Peinado/CineChat_Quiz"
  },

  {
    title: "Filming App",
    tag: "ANDROID PROJECT",
    image: filming,
    description:
      "Android application for exploring movies and TV series with detailed information, ratings and modern navigation components.",
    technologies: [
      "Java",
      "Groovy",
      "Android",
      "XML"
    ],
    github: "https://github.com/ManuelCastro-Peinado/FilmingApp"
  },

  {
    title: "Alexander The Great",
    tag: "ANDROID PROJECT",
    image: alejandro,
    description:
      "Educational Android application about Alexander the Great using Fragments, Navigation Drawer and a clean Material Design interface.",
    technologies: [
      "Java",
      "Groovy",
      "Android",
      "XML"
    ],
    github: "https://github.com/ManuelCastro-Peinado/AlejandroMagno"
  },

  {
    title: "Archery Tournament",
    tag: "PERSONAL PROJECT",
    image: torneo,
    description:
      "Python console application that simulates an archery tournament. Users configure the tournament, participants and accuracy levels, while the system generates scores, ranks competitors and provides detailed statistics such as averages, maximum and minimum scores.",
    technologies: [
      "Python"
    ],
    github: "https://github.com/ManuelCastro-Peinado/Torneo-arquero-Python-"
  }
];