import styled from "styled-components";
import { ReactComponent as Danger} from "./danger.svg"; 

export const Wrapper = styled.div`
    margin-top: 95px;
    display: grid;
    justify-items: center;
    text-align: center;
    color: ${({theme}) => theme.color.textPrimary};
`;

export const Header = styled.h3`
    font-weight: 700;
    font-size: 24px;
`;

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
`;

export const Icon = styled(Danger)`
    max-width: 37px;
    max-height: 33px;
`;

export const Website = styled.a`
    text-decoration: none;
`;