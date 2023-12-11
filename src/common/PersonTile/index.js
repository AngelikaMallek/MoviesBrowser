import { Container, Image, Paragraph, Character } from "./styled";
import { imageURL } from "../API/APIData";
import noPhoto from "../../images/noPhoto.svg";

const PersonTile = ({ id, name, poster, character }) => (
    <Container to={`/people/${id}`}>
        {
            poster ? <Image src={imageURL + "/w342/" + poster} alt="Famous person"/>
            : <Image src={noPhoto} alt="Famous person"/>
        }
        <Paragraph>{name ? name : "Unknown Name"}</Paragraph>
        <Character>{character ? character : ""}</Character>
    </Container>
)

export default PersonTile;