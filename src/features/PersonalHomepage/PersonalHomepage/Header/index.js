import { Image, ThisIs, Wrapper, Name, Content, HireMeIcon, StyledButtonLink } from "./styled";
import myPhoto from "./images/ab.png";

export const Header = () => (
    <Wrapper>
        <Image src={myPhoto} alt="Aneta Borowski" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Aneta Borowski</Name>
            <Content>
                👨🏻‍💻  I’m a passionate Frontend Developer in love with React,
                currently looking for new job opportunities.
            </Content>
            <StyledButtonLink href="mailto:borowski.aneta@gmail.com" title="borowski.aneta@gmail.com">
                <HireMeIcon />
                Hire Me
            </StyledButtonLink>
        </div>
    </Wrapper>
);