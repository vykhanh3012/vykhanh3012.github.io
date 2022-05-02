import About from "../Components/About/About";
import HomePage from "../Components/HomePage/HomePage";
import Contact from "../Components/Contact/Contact";
import Information from "../Components/Information/Infomation";

export const ComponentsData = [
  {
    id: 0,
    name: "Home",
    icons: <i class="fa-solid fa-house"></i>,
    components: <HomePage />,
  },
  {
    id: 1,
    name: "About",
    icons: <i class="fa-solid fa-user"></i>,
    components: <About />,
  },
  {
    id: 2,
    name: "Information",
    icons: <i class="fa-solid fa-briefcase"></i>,
    components: <Information />,
  },
  {
    id: 3,
    name: "Contact",
    icons: <i class="fa-solid fa-message"></i>,
    components: <Contact />,
  },
];
