import { ButtonsWrapper, Button, Wrapper, Page, Number, TextWrapper, ArrowStyled, Paragraph } from "./styled";
import { usePagination } from "./usePagination";
import { useLocation } from "react-router-dom";

const Pagination = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("page");

    const { page, pagePrevious, pageNext, setFirstPage, setLastPage } = usePagination(query);

    return (
        <Wrapper>
            <ButtonsWrapper>
                <Button onClick={setFirstPage} disabled={page === 1}>
                    <ArrowStyled disabled={page === 1}/>
                    <ArrowStyled small/>
                    <Paragraph>First</Paragraph>
                </Button>
                <Button onClick={pagePrevious} disabled={page === 1}>
                    <ArrowStyled disabled={page === 1}/>
                    <Paragraph>Previous</Paragraph>
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
                    <Paragraph>Next</Paragraph>
                    <ArrowStyled right disabled={page === 500}/>
                </Button>
                <Button onClick={setLastPage} disabled={page === 500}>
                    <Paragraph>Last</Paragraph>
                    <ArrowStyled right disabled={page === 500}/>
                    <ArrowStyled right small/>
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )

}

export default Pagination;