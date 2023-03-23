import { About, Image, GreyHeader, Wrapper, Name, Content, HireMe, HireMeIcon, Mail } from "./styled";
import myPhoto from "./images/ab.png";
import hireMeIcon from "./images/message.svg";

export const Header = () => (
    <Wrapper>
        <Image src={myPhoto} />
        <About>
            <GreyHeader>this is</GreyHeader>
            <Name>Aneta Borowski</Name>
            <Content>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
            <Mail href="mailto:borowski.aneta@gmail.com">
            <HireMe>
                <HireMeIcon src={hireMeIcon} alt="" />
                Hire Me
            </HireMe>
            </Mail>
        </About>
    </Wrapper>
);