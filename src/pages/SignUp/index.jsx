import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Background } from './style'


export function SignUp(){
    return (
        <Container>
            <Background />
            <Form>
                <h1>Rockeat Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu cadastro</h2>


                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
 

                <Input 
                    placeholder="E-Mail"
                    type="email"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>
                <Link to="/">Fazer login</Link>



            </Form>

            
        </Container>
    )
}