import { About, Image, GreyHeader, Wrapper, Name, Content, HireMeIcon, Mail } from "./styled";
import myPhoto from "./images/ab.png";
import hireMeIcon from "./images/message.svg";
import { ButtonLink } from "../ButtonLink/styled";

export const Header = () => (
    <Wrapper>
        <Image src={myPhoto} />
        <About>
            <GreyHeader>this is</GreyHeader>
            <Name>Aneta Borowski</Name>
            <Content>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
            <Mail href="mailto:borowski.aneta@gmail.com" title="borowski.aneta@gmail.com">
            <ButtonLink>
                <HireMeIcon src={hireMeIcon} alt="" />
                Hire Me
            </ButtonLink>
            </Mail>
        </About>
    </Wrapper>
);