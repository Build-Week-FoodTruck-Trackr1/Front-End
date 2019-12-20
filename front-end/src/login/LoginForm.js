import React from 'react'
import { Form } from 'semantic-ui-react'
import {useInput} from '../components/hooks/useInput'
import { FormContainer } from '../styled-components';

const LoginForm = () => {

    const [username, setUsername, handleUsername] = useInput('');
    const [password, setPassword, handlePassword] = useInput('')
    return(
        <FormContainer>
            <Form>
                    <Form.Input 
                    required
                    label='Username' 
                    type='text' 
                    name='username' 
                    value={username} 
                    onChange={e => handleUsername(e.target.value)} 
                    />
                    <Form.Input
                    required
                    label='Password'
                    type='password'
                    value={password}
                    name='password'
                    onChange={e => handlePassword(e.target.value)}  
                    />
                    <Form.Button>Submit</Form.Button>
            </Form>
        </FormContainer>
    )
}

export default LoginForm