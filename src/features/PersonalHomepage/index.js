import { Container } from "../../common/Container/styled";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ModeSwitcher } from "../../common/ModeSwitcher";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { skills, toLearn } from "./Skills/skillsList";

const PersonalHomepage = () => {
  return (
    <Container>
      <ModeSwitcher />
      <Header />
      <Skills
        title="My skillset includes 🛠️"
        skills={skills}
      />
      <Skills
        title="What I want to learn next 🚀"
        skills={toLearn} />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default PersonalHomepage;
