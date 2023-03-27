import styled from "styled-components";

export const ButtonLink = styled.button`
    border: 1px solid ${({ theme }) => theme.color.buttonLink.border};
    font-size: 20px;
    letter-spacing: 0.05em;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.buttonLink.text};
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
        ${({ theme }) => theme.color.buttonLink.shadow};
    }

    &:active {
        box-shadow: 0 -2px 0 0
        ${({ theme }) => theme.color.buttonLink.active};
    }
`;