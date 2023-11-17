import { useParams } from "react-router-dom";

export function ProjectId(){

    const { id } = useParams();

    console.log(id);
    
    return(
        <h1>Pagina do projeto {id}</h1>
    )
}