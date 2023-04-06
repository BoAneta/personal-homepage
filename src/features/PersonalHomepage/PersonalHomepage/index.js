import { Container } from "./styled";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ModeSwitcher } from "../../../common/ModeSwitcher";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { skills, toLearn } from "./Skills/skillsList";

const PersonalHomepage = () => (
  <Container>
    <ModeSwitcher />
    <Header />
    <Skills
      title="My skillset includes 🛠️"
      skills={skills}
    />
    <main>
      <Skills
        title="What I want to learn next 🚀"
        skills={toLearn} />
      <Portfolio />
    </main>
    <Footer />
  </Container>
);

export default PersonalHomepage;
