import React from 'react'
import { Form } from 'semantic-ui-react'

const SignupForm = () => {
    return(
        <Form>
            <Form.Input label='Username' type='text' name='username' placeholder='Username' />
            <Form.Input label='Password' type='text' name='password' placeholder='Password' />
            <Form.Input label='Location' type='text' name='location' placeholder='Current Location' />
        </Form>
    )
}