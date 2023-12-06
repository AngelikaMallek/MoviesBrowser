import { Container, Image, Paragraph } from "./styled";
import { imageURL } from "../API/APIData";

const PersonTile = ({ id, name, profile_path }) => (
    <Container to={`/people/${id}`}>
        <Image src={imageURL + "/w342/" + profile_path} />
        <Paragraph>{name}</Paragraph>
    </Container>
)

export default PersonTile;