import { Container, ImageBlock, Content} from "./styles";
import Location from '../../assets/location.svg'

interface IBlockProps {
    id: number;
    name: string;
    description: string;
    image: string;
    city: string;
    UF: string;
}


export default function Block({id, name, description, image, city, UF} : IBlockProps) {
    return(

        <Container key={id}>
            <ImageBlock image={image}/>
            <Content>
                <h1>{name}</h1>
                <p>{description}</p>
                <p><img src={ Location } alt="Localização" /> {city} - {UF}</p>
            </Content>
        </Container>
    )
}