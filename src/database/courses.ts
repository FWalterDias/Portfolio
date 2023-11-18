import { CoursesProps } from "../types/types";
import senacImg from "../assets/Courses/senac.png"
import techAcademyImg from "../assets/Courses/techcacademy.jpg"
import descomplicaImg from "../assets/Courses/descomplica-logo.png"
import certifierSenac from "../assets/Downloads/senac.pdf";
import certifierDescomplica from "../assets/Downloads/descomplica.pdf";
import certifierTechAcademy from "../assets/Downloads/techAcademy.pdf";


export const courses: CoursesProps[] = [
    {   
        id: 1,
        img: senacImg,
        name: "Programador Web",
        link: `${certifierSenac}`
    },
    {
        id: 2,
        img: descomplicaImg,
        name: "Fundamentos de FrontEnd Development",
        link: `${certifierDescomplica}`
    },
    {
        id: 3,
        img: techAcademyImg,
        name: "Tech Academy",
        link: `${certifierTechAcademy}`
    }
]