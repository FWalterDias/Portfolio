import { useState, useEffect } from "react";
import arrowLeft from "../../../assets/Icons/arrow-left.svg";
import arrowRight from "../../../assets/Icons/arrow-right.svg";
import iconCourses from "../../../assets/Icons/certificate-fill.svg";
import imgCertifier from "../../../assets/Icons/scroll-fill.svg";
import { courses } from "../../../database/courses";
import { Button } from "../../Button";
import {
    ArrowLeft,
    ArrowRight,
    ContainerCourses,
    ContainerSlides,
    Course,
    LabelsInputsSlides,
    SectionTittleCourses,
    Slides,
    SlidesAutoNavigate
} from "./styles";


export function SectionCourses() {

    const [count, setCount] = useState<number>(0);

    const totalSlides = courses.length;

    const nextImg = () => {
        setCount((prevCount) => (prevCount + 1) % totalSlides);
    };

    const prevImg = () => {
        setCount((prevCount) => (prevCount - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(nextImg, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleRadioChange = (index: number) => {
        setCount(index);
    };


    return (
        <ContainerCourses>
            <SectionTittleCourses>
                <h1>Formações</h1>
                <img src={iconCourses} alt="icon-formations" />
            </SectionTittleCourses>

            <ContainerSlides>
                <Slides>

                    {
                        courses
                            .map((course, index) => (
                                <input 
                                key={index} 
                                type="radio" 
                                name="radio-btn" 
                                id={`radio${course.id}`}
                                checked={index === count}
                                onChange={() => handleRadioChange(index)} />
                            ))
                    }

                    {
                        courses
                            .map((course, index) => (
                                <Course key={index} className={index === 0 ? "first" : ""}>
                                    <img src={course.img} alt="logo-course" />
                                    <p>{course.name}</p>

                                    <Button
                                        text="Certificado"
                                        style="transparent"
                                        width="small"
                                        img={imgCertifier} />
                                </Course>
                            ))
                    }

                    <SlidesAutoNavigate>

                        {
                            courses
                                .map((course, index) => (
                                    <div key={index} className={`autoBtn${course.id}`}></div>
                                ))
                        }
                    </SlidesAutoNavigate>
                </Slides>

                <LabelsInputsSlides>
                    {
                        courses
                            .map((course, index) => (
                                <label key={index} htmlFor={`radio${course.id}`} className="manualBtn"></label>
                            ))
                    }
                </LabelsInputsSlides>
            </ContainerSlides>

            <ArrowLeft onClick={prevImg}>
                <img src={arrowLeft} alt="arrow-left" />
            </ArrowLeft>

            <ArrowRight onClick={nextImg}>
                <img src={arrowRight} alt="arrow-right" />
            </ArrowRight>
        </ContainerCourses>
    )
}