import { Button, ButtonsContainer, ButtonSelect, Container, ContainerFindBlock, FormContainer, InputContainer, TitleContainer } from "./style";
import Ilustra01 from '../../assets/ilustra-01.svg';
import Ilustra02 from '../../assets/ilustra-02.svg';
import Search from '../../assets/search.svg';
import Location from '../../assets/location.svg';
import { useState, FormEvent } from "react";
import GridBlocks from "../../components/GridBlocks";
import MapBlocks from "../../components/MapBlocks";
import { useBlocks } from "../../hooks/useBlocks";


export default function Home() {

    const [locationNameInput, setLocationNameInput] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const [ displayBlocksMap, setDisplayBlocksMap] = useState(false);
    const { blocks, locations, setLocationId, setLocationName } = useBlocks();

    function handleDisplayBlocksLocation(event: FormEvent) {
        event.preventDefault();

        setLocationName(locationNameInput);
        setLocationId(Number(selectedLocation));
    }

    return (
        <>
            <ContainerFindBlock>
                <img src={Ilustra01} className="ilustra_01"/>
                <img src={Ilustra02} className="ilustra_02" />

                <p>FIND YOUR BLOCK</p>
                <h1>Encontre os <span>melhores blocos</span> <br/> de carnaval de 2023</h1>

                <FormContainer onSubmit={handleDisplayBlocksLocation}>
                    <InputContainer>
                        <img src={Search} alt="Search" />
                        <input type="text" placeholder="Pesquise por nome" value={locationNameInput} onChange={event => setLocationNameInput(event.target.value)}/>
                    </InputContainer>
                    
                    <InputContainer>
                        <img src={Location} alt="Location" />
                        <select  value={selectedLocation} onChange={event =>  setSelectedLocation(event.target.value)}>
                            <option value="0" selected>Todos</option>
                            {
                                locations.map(location => (
                                    <option value={location.id}>{ location.name }</option> 
                                ))
                            }
                        </select>
                        
                    </InputContainer>    
                    <Button type="submit"> BUSCAR AGORA </Button>
                </FormContainer>
            </ContainerFindBlock>
                
            <Container>
                <TitleContainer>
                    <h1>Blocos recomendados</h1>
                    <ButtonsContainer>
                            <ButtonSelect
                                onClick={ () => setDisplayBlocksMap(false)}
                                isActive={displayBlocksMap == false}
                            >
                                LISTA
                            </ButtonSelect>
                            <ButtonSelect
                                 onClick={ () => setDisplayBlocksMap(true)}
                                 isActive={displayBlocksMap == true}
                            >
                                MAPA
                            </ButtonSelect>
                    </ButtonsContainer>
                </TitleContainer>

                {
                    blocks.length ? null : <h2>Nenhum bloco encontrado!</h2>
                }

                {
                    !displayBlocksMap ?  <GridBlocks/> : <MapBlocks/>
                }
               
            </Container>

            
        </>
    )
}