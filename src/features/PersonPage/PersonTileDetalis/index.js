import {
   PersonTileContainer,
   Image,
   PersonDataContainer,
   Name,
   BirthText,
   Span,
   BirthDate,
   DescriptionText,
} from "./styled";
import { useState, useEffect } from "react";
import { imageURL } from "../../../common/API/APIData";
import { Container } from "../../../common/Container";


const PersonTileDetalis = ({ poster, name, birthDate, birthPlace, description }) => {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1140);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1140);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <Container>
            <PersonTileContainer>
                <Image src={imageURL + "w500" + poster} alt="Famous person" />
                <PersonDataContainer>
                    <Name>{name ? name : "Unknown name"}</Name>
                    <BirthDate>
                        <BirthText><Span></Span></BirthText>
                        {birthDate ? new Date(birthDate).toLocaleDateString(undefined, {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                        }) : "Unknown"}
                    </BirthDate>
                    <BirthDate>
                        <BirthText>Place of birth:  </BirthText>
                        {birthPlace ? birthPlace : "Unknown"}
                    </BirthDate>
                    {isWideScreen && <DescriptionText>{description}</DescriptionText>}
                </PersonDataContainer>
                {!isWideScreen && <DescriptionText>{description}</DescriptionText>}
            </PersonTileContainer>
        </Container>
    )
}

export default PersonTileDetalis;
