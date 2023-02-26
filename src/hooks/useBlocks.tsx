import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface IBlock {
    id: number;
    name: string;
    description: string;
    image: string;
    city: string;
    UF: string;
    latitude: number;
    longitude: number;
    location_id: number;
}

interface ILocation {
    id: number;
    name: string;
}

interface BlocksContextData {
    blocks: IBlock[];
    locations: ILocation[];
    setLocationId: Dispatch<SetStateAction<number>>;
    setLocationName: Dispatch<SetStateAction<string>>;
}

interface IBlocksProvider {
    children: ReactNode;
}

const BlocksContext = createContext<BlocksContextData>(
    {} as BlocksContextData
)

export function BlocksProvider({children} : IBlocksProvider) {

    const [ blocks, setBlocks ] = useState<IBlock[]>([])
    const [ locations, setLocations] = useState<ILocation[]>([])
    const [ locationId, setLocationId ] = useState(0);
    const [ locationName, setLocationName ] = useState('');

    const fetchBlocks = async () => {
        let url = '/blocks';

        if (locationId === 0 && locationName !== '') {
            url = `/blocks?name=${locationName}`
        } else if(locationId !== 0 && locationName === '') {
            url = `/blocks?location_id=${locationId}`
        } else if(locationId !== 0 && locationName !== '') {
            url = `/blocks?location_id=${locationId}&name=${locationName}`
        }

        api(url)
            .then((response) => setBlocks(response.data))

    }

    useEffect(() => {
        fetchBlocks();
    }, [ locationId, locationName ])

    useEffect(() => {
        api('/locations')
            .then(response => setLocations(response.data))
    }, [])


    return (
        <BlocksContext.Provider value={{blocks, locations, setLocationId, setLocationName}}>
            { children }
        </BlocksContext.Provider>
    )

}

export function useBlocks() {
    const context = useContext(BlocksContext)

    return context
}