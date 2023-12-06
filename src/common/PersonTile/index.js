import { Container, Image, Paragraph, Character } from "./styled";
import { imageURL } from "../API/APIData";

const PersonTile = ({ id, name, profile_path, character }) => (
    <Container to={`/people/${id}`}>
        <Image src={imageURL + "/w342/" + profile_path} />
        <Paragraph>{name}</Paragraph>
        <Character>{character}</Character>
    </Container>
)

export default PersonTile;