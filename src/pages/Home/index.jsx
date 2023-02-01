import { Container, Brand, Menu, Search, Content, NewNote} from './styles';
import { Header } from '../../components/header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { FiPlus, FiSearch} from 'react-icons/fi'
import { Link } from 'react-router-dom'




export function Home(){
    return (
        <Container>
            <Brand>
            <h1>RockeatNotes</h1>
            </Brand>
            <Header>

            </Header>

            <Menu>
            
                <li><ButtonText title="Todos" /></li>
                <li><ButtonText title="React" isActive/></li>
                <li><ButtonText title="Nodejs"/></li>

            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />

            </Search>

            <Content>
             <Section title="Minhas notas">
                      <Note data={{ 
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rockeatseat'} 
                        ]
                    }} />
                    
            
             </Section>
            </Content>

            <NewNote to="/new">
            <FiPlus />
            Criar nota
            </NewNote>
   
        </Container>


    )
}