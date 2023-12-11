import { Container, Image, Paragraph, Character } from "./styled";
import { imageURL } from "../API/APIData";
import { NoPhoto } from "../Placeholders";
import noPhoto from "../Placeholders/noPhoto.svg"

const PersonTile = ({ id, name, poster, character }) => (
    <Container to={`/people/${id}`}>
        {
            poster ? <Image src={imageURL + "/w342/" + poster} alt="photo"/>
            : <NoPhoto small src={noPhoto} alt="Photo"/>
        }
        <Paragraph>{name ? name : "Unknown Name"}</Paragraph>
        <Character>{character ? character : ""}</Character>
    </Container>
)

export default PersonTile;