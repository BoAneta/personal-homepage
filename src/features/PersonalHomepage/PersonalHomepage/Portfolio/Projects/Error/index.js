import { ButtonLink } from "../../../ButtonLink/styled";
import { Header, Paragraph, Wrapper } from "./styled";
import { githubUserName } from "../../githubUserName";
import { ReactComponent as DangerIcon} from "./danger.svg"; 

export const Error = () => (
    <Wrapper>
        <DangerIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check then directly on Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUserName}`}
            title="BoAneta Github"
            target="_blank"
            rel="noreferrer">
            Go to Github
        </ButtonLink>
    </Wrapper>
);