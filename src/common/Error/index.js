import { Wrapper, Paragraph, Description, Button } from "./styled";
import { ReactComponent as Icon } from '../../images/icon.svg';

const Error = () => (
    <Wrapper>
        <Icon />
        <Paragraph>Ooops! Something went wrong... </Paragraph>
        <Description>Please check your network connection <br /> and try again</Description>
        <Button to="/movies">Back to home page</Button>
    </Wrapper>
)

export default Error;