import { CoursesProps } from "../types/types";
import senacImg from "../assets/Courses/senac.png"
import techAcademyImg from "../assets/Courses/techcacademy.jpg"
import descomplicaImg from "../assets/Courses/descomplica-logo.png"


export const courses: CoursesProps[] = [
    {   
        id: 1,
        img: senacImg,
        name: "Programador Web"
    },
    {
        id: 2,
        img: descomplicaImg,
        name: "Fundamentos de FrontEnd Development"
    },
    {
        id: 3,
        img: techAcademyImg,
        name: "Tech Academy"
    }
]