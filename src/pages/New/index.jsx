import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { Container, Form } from './style';

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NoteItem value="https://rockeat.com.br"/>
                        <NoteItem value=""/>
                        <NoteItem  isNew/>
                    </Section>


                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem  isNew placeholder="Nova tag"/>
                        </div>
                    </Section>
                    
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    );
}