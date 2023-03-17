import { Container } from "./common/Container/styled";
import { Header } from "./features/Header";
import { ModeSwitcher } from "./features/ModeSwitcher";
import { Portfolio } from "./features/Portfolio";
import { Skills } from "./features/Skills";
import { skills, toLearn } from "./features/Skills/skillsList";

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
    </Container>
  );
}

export default App;
