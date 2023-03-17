import styled from "styled-components";

export const Wrapper = styled.article`
    max-width: 1098px;
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr; 
`;

export const Image = styled.img`
    max-width: 384px;
    width: 30vw;
`;

export const About = styled.div`
    max-width: 633px;
    text-align: left;
    margin-left: 66px;
    padding-top: 64px;
`;

export const GreyHeader = styled.p`
    font-weight: 700;
    font-size: 12px;
`;

export const Name = styled.h1`
    font-weight: 900;
    color: ${({ theme }) => theme.color.black};
`;

export const Content = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.color.slategrey};
    line-height: 28px;
    margin: 0;
`;

export const HireMe = styled.button`
    border: 1px solid ${({ theme }) => theme.color.irontransparent};
    font-size: 20px;
    letter-spacing: 0.05em;
    background-color: ${({ theme }) => theme.color.scienceblue};
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0;
    padding: 12px 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    text-align: center;
    transition: 1s;

    &:hover {
        box-shadow: 0 0 2px 2px
        ${({ theme }) => theme.color.anakiwa};
    }

    &:active {
        box-shadow: 0 -2px 0 0
        ${({ theme }) => theme.color.parsley};
    }
`;

export const HireMeIcon = styled.img`
    color: ${({ theme }) => theme.color.white};
    max-width: 19.23px;
    max-height: 17.12px;
    margin-right: 19px;
`;
