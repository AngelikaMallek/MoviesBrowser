import { ButtonsWrapper, Button, Wrapper, Page, Number, TextWrapper, ArrowStyled } from "./styled";
import { usePagination } from "./usePagination";

const Pagination = () => {

    const { page, pagePrevious, pageNext, setFirstPage, setLastPage } = usePagination();

    return (
        <Wrapper>
            <ButtonsWrapper>
                <Button onClick={setFirstPage} disabled={page === 1}>
                    <ArrowStyled disabled={page === 1}/>
                    First
                </Button>
                <Button onClick={pagePrevious} disabled={page === 1}>
                    <ArrowStyled disabled={page === 1}/>
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
                <Button onClick={pageNext} disabled={page === 500}>
                    Next
                    <ArrowStyled right disabled={page === 500}/>
                </Button>
                <Button onClick={setLastPage} disabled={page === 500}>
                    Last
                    <ArrowStyled right disabled={page === 500}/>
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )

}

export default Pagination;