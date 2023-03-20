import styled from "styled-components";

export const ProjectSection = styled.div`
    margin: 0 62px 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        margin: 0;
    }
`;

export const Tile = styled.div`
    max-width: 592px;
    background-color: ${({ theme }) => theme.color.white};
    border: 6px solid ${({ theme }) => theme.color.irontransparent};
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    transition: 1s;

    &:hover {
        border: 6px solid ${({ theme }) => theme.color.sciencebluelight};
    }
`;
export const Content = styled.div`
    padding: 56px;

    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        padding: 24px;
        font-size: 14px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.color.scienceblue};
    font-weight: 700;
    font-size:24px;
    margin: 0;
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
`;

export const LinksName = styled(Paragraph)`
    line-height: 25px;
`;

export const Links = styled.a`
    color: ${({ theme }) => theme.color.scienceblue};
    text-decoration: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.sciencebluelight};
    transition: 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.dodgerblue};
    }
`;