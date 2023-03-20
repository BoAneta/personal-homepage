import { Contact, Container, FooterContent, Icons, SocialLink } from "./styled";
import { GreyHeader } from "../Header/styled";
import { ReactComponent as FbIcon } from "./icons/Facebook_black.svg";
import { ReactComponent as GhIcon } from "./icons/Github_black.svg";
import { ReactComponent as InstIcon } from "./icons/Instagram_black.svg";
import { ReactComponent as LinkedIcon } from "./icons/LinkedIN_black.svg";


export const Footer = () => (
    <Container>
        <GreyHeader>LET'S TALK</GreyHeader>
        <Contact>borowski.aneta@gmail.com</Contact>
        <FooterContent>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</FooterContent>
        <Icons>
            <SocialLink href="https://github.com/BoAneta"><GhIcon /></SocialLink>
            <SocialLink href="https://www.facebook.com/aneta.grobelna.56"><FbIcon /></SocialLink>
            <SocialLink href="https://www.instagram.com/zyciolubna/"><InstIcon /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/aneta-borowski/"><LinkedIcon /></SocialLink>
        </Icons>
    </Container>
);