import React from 'react'
import { Form } from 'semantic-ui-react'

const LoginForm = () => {
    return(
        <Form>
                <Form.Input label='Username' type='text' name='username' placeholder='Username' />
                <Form.Input label='Password' type='password' name='password' placeholder='Password' />
                <Form.Button>Submit</Form.Button>
        </Form>
    )
}

export default LoginForm