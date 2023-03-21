import { Container } from "./common/Container/styled";
import { Footer } from "./features/PersonalHomepage/Footer";
import { Header } from "./features/PersonalHomepage/Header";
import { ModeSwitcher } from "./common/ModeSwitcher";
import { Portfolio } from "./features/PersonalHomepage/Portfolio";
import { Skills } from "./features/PersonalHomepage/Skills";
import { skills, toLearn } from "./features/PersonalHomepage/Skills/skillsList";

function App() {
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
      <Portfolio
        title="Portfolio" 
        subTitle="My recent projects"
      />
      <Footer />
    </Container>
  );
}

export default App;
