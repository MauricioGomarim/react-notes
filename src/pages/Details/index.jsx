import { Container, Links, Content } from "./styles";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            veniam quaerat dolorum ipsam, eaque ullam provident illo vel at.
            Recusandae deleniti, mollitia nulla est aliquam doloremque
            distinctio sed facilis voluptas.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
