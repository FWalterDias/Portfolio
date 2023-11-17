import { CardProjectProps } from "../../types/types";
import { Button } from "../Button";
import { ContainerCardProject, ContainerDescription } from "./styles";

export function CardProject({ id, img, title, description }: CardProjectProps) {
    return (
        <ContainerCardProject className={id % 2 !== 0 ? "impar" : ""}>
            <img src={img} alt="img-card-project" />

            <ContainerDescription>
                <h3>
                    {title}
                </h3> 

                <p>
                    {description}
                </p>

                <Button
                    text="Ir para projeto"
                    style="normal"
                    width="biggest"
                    navigateTo={`/projects/${id}`}
                />
            </ContainerDescription>
        </ContainerCardProject>
    )
}