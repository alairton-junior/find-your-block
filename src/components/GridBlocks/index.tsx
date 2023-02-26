import { useBlocks } from "../../hooks/useBlocks";
import Block from "../Block";
import { ContainerGrid } from "./styles";

export default function GridBLocks() {

    const { blocks } = useBlocks();

    return(
        <ContainerGrid>
            {
                blocks.map((block) => 
                    <Block 
                        id={block.id}
                        name={block.name}
                        image={block.image}
                        description={block.description}
                        city={block.city}
                        UF={block.UF}

                    />
                )
            }
        </ContainerGrid>
    )
}