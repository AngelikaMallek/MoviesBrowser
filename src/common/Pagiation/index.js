import { ButtonsWrapper, Button, Wrapper, Page, Number, TextWrapper, ArrowStyled } from "./styled";
import { usePagination } from "./usePagination";

const Pagination = () => {

    const { page, pagePrevious, pageNext, setFirstPage, setLastPage } = usePagination();

    return (
        <Wrapper>
            <ButtonsWrapper>
                <Button onClick={setFirstPage}>
                    <ArrowStyled />
                    First
                </Button>
                <Button onClick={pagePrevious}>
                    <ArrowStyled />
                    Previous
                </Button>
            </ButtonsWrapper>
            <TextWrapper>
                <Page>Page</Page>
                <Number>{page}</Number>
                <Page>of</Page>
                <Number>500</Number>
            </TextWrapper>
            <ButtonsWrapper>
                <Button onClick={pageNext}>
                    Next
                    <ArrowStyled right/>
                </Button>
                <Button onClick={setLastPage}>
                    Last
                    <ArrowStyled right/>
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )

}

export default Pagination;