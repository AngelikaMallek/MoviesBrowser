import { ButtonsWrapper, Button, Wrapper, Page, Number, TextWrapper, ArrowStyled } from "./styled";

const Pagination = () => (
    <Wrapper>
        <ButtonsWrapper>
            <Button>
                <ArrowStyled />
                First
            </Button>
            <Button>
                <ArrowStyled />
                Previous
            </Button>
        </ButtonsWrapper>
        <TextWrapper>
            <Page>Page</Page>
            <Number>1</Number>
            <Page>of</Page>
            <Number>500</Number>
        </TextWrapper>
        <ButtonsWrapper>
            <Button>
                Next
                <ArrowStyled right/>
            </Button>
            <Button>
                Last
                <ArrowStyled right/>
            </Button>
        </ButtonsWrapper>
    </Wrapper>
)

export default Pagination;