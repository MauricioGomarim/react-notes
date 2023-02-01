import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Background } from './style'


export function SignIn(){
    return (
        <Container>

            <Form>
                <h1>Rockeat Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>
                <Input 
                    placeholder="E-Mail"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>
                <Link to="/signup">Criar conta</Link>



            </Form>

            <Background />
        </Container>
    )
}