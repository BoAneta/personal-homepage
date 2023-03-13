import { About, Image, ThisIs, Wrapper, Name, Content, HireMe, HireMeIcon } from "./styled";
import myPhoto from "./images/ab.png";
import hireMeIcon from "./images/message.svg";

export const Header = () => (
    <Wrapper>
        <Image src={myPhoto} />
        <About>
            <ThisIs>THIS IS</ThisIs>
            <Name>Aneta Borowski</Name>
            <Content>👨🏻‍💻  I’m a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Content>
            <HireMe>
                <HireMeIcon src={hireMeIcon} alt="" />
                Hire Me
            </HireMe>
        </About>
    </Wrapper>
);