import { Container, Image, Paragraph, Character, NoPhoto } from "./styled";
import { imageURL } from "../API/APIData";

const PersonTile = ({ id, name, poster, character }) => (
    <Container to={`/people/${id}`}>
        {
            poster ? <Image src={imageURL + "/w342/" + poster} alt={"photo"}/>
            : <NoPhoto />
        }
        <Paragraph>{name ? name : "Unknown Name"}</Paragraph>
        <Character>{character ? character : ""}</Character>
    </Container>
)

export default PersonTile;