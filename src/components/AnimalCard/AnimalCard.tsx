import "./styles.ts";
import {AnimalCardWrapper} from "./styles";
import { AnimalCardProps } from './types';

// interface Animal {
//   name: string
//   species: string
//   role: string
//   skills: string[]
//   image: string
// }

// interface AnimalCardProps {
//   animalData: Animal
// }

function AnimalCard({ animalData }: AnimalCardProps) {
    return (
        <AnimalCardWrapper>
            <h3>{animalData.name}</h3>
            <div>{animalData.species}</div>
            <img alt="animal photo" src={animalData.image} />
        </AnimalCardWrapper>
    );
}

export default AnimalCard;