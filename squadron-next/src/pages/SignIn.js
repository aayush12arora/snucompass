import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const SignIn = () => {
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [flag, setFlag] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Roll Number: ${rollNumber}, Password: ${password}`);
        const enteredUsername = rollNumber;
        const enteredPassword = password;

        // Check if the entered credentials match any of the hardcoded users
        const isAuthenticated = hardcodedUsers.some(
            (user) => user.username === enteredUsername && user.password === enteredPassword
        );

        if (isAuthenticated) {
            // Authentication successful, proceed to the next steps
            console.log('Authentication successful');
            // Redirect to a protected route
            //need to configure protected route
            setFlag(false)
            router.push({
                pathname: '/UserDashboard',
                query: { rollNumber: enteredUsername }
            });
        } else {
            // Authentication failed
            console.log('Authentication failed');
            setFlag(true);
            // Show an error message or handle the failure accordingly
        }
    };

    //for testing purposes
    const hardcodedUsers = [
        { username: '2110110410', password: '123' },
        { username: '2110110017', password: '456' },
        { username: '2110110842', password: '789' },
        { username: '2110110883', password: '012' },
        { username: '2110110414', password: '414' },
        { username: '2110110543', password: '543' },
    ];

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formRollNumber">
                        <Form.Label>Roll Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter roll number"
                            value={rollNumber}
                            onChange={(event) => setRollNumber(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </Form.Group>

                    <Button style={{ marginTop: '20px' }} variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
            {flag && (
                <div style={{ textAlign: 'center', color: 'red' }}>
                    Authentication failed. Please enter correct credentials.
                </div>
            )}
        </>
    );
};

export default SignIn;
