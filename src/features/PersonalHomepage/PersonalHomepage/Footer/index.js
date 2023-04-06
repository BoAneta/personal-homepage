import { Contact, Wrapper, FooterContent, Icons, Mail, SocialLink, LetsTalk, Address, EmailWrapper } from "./styled";
import { SocialIcons } from "./SocialIcons";


export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <Contact href="mailto:borowski.aneta@gmail.com">borowski.aneta@gmail.com</Contact>
            </EmailWrapper>
            <FooterContent>
                I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
            </FooterContent>
            <SocialIcons />
        </Address>
    </Wrapper>
);