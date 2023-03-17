import { Contact, Container, FooterContent, Icon, Icons } from "./styled";
import gitIconBlack from "./icons/git-icon-black.png";
import fbIconBlack from "./icons/Facebook_black.png";
import linkedIconBack from "./icons/LinkedIN_black.png";
import instaIconBlack from "./icons/Instagram_black.png";
import { GreyHeader } from "../Header/styled";

export const Footer = () => (
    <Container>
        <GreyHeader>LET'S TALK</GreyHeader>
        <Contact>borowski.aneta@gmail.com</Contact>
        <FooterContent>I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me</FooterContent>
        <Icons>
            <Icon src={gitIconBlack} alt="" />
            <Icon src={fbIconBlack} alt="" />
            <Icon src={linkedIconBack} alt="" />
            <Icon src={instaIconBlack} alt="" />
        </Icons>
    </Container>
);