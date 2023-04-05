import { ButtonLink } from "../../../ButtonLink/styled";
import { Header, Icon, Paragraph, Website, Wrapper } from "./styled";

export const Error = () => (
    <Wrapper>
        <Icon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check then directly on Github.
        </Paragraph>
        <Website
            href="https://github.com/BoAneta"
            title="BoAneta Github"
            target="_blank"
            rel="noreferrer">
            <ButtonLink>Go to Github</ButtonLink>
        </Website>
    </Wrapper>
);