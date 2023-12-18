import { ButtonsWrapper, Button, Wrapper, Page, Number, TextWrapper, ArrowStyled, Paragraph } from "./styled";
import { usePagination } from "./usePagination";

const LAST_PAGE = 500;

const Pagination = () => {

    const page = usePagination();

    const isFirstPage = page === 1;
	const isLastPage = page === LAST_PAGE;

    return (
        <Wrapper>
            <ButtonsWrapper>
                <Button disabled={isFirstPage} to={`?page=1`}>
                    <ArrowStyled disabled={isFirstPage}/>
                    <ArrowStyled small/>
                    <Paragraph>First</Paragraph>
                </Button>
                <Button disabled={isFirstPage} to={`?page=${page - 1}`}>
                    <ArrowStyled disabled={isFirstPage}/>
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
                <Button disabled={isLastPage} to={`?page=${page + 1}`}>
                    <Paragraph>Next</Paragraph>
                    <ArrowStyled right disabled={isLastPage}/>
                </Button>
                <Button disabled={isLastPage} to={`?page=${LAST_PAGE}`}>
                    <Paragraph>Last</Paragraph>
                    <ArrowStyled right disabled={isLastPage}/>
                    <ArrowStyled right small/>
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    )

}

export default Pagination;