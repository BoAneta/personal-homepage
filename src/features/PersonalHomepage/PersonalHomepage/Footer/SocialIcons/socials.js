import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon} from "./icons/github.svg";
import { ReactComponent as FacebookIcon} from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon} from "./icons/instagram.svg";
import { ReactComponent as LinkedInIcon} from "./icons/linkedIn.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/BoAneta",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/aneta.grobelna.56",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/zyciolubna/",
        Icon: styleIcon(InstagramIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aneta-borowski/",
        Icon: styleIcon(LinkedInIcon),
    },
];