import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import bcrypt from 'bcryptjs';

const FacSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [flag, setFlag] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const enteredUsername = email;
        const enteredPassword = password;
        const hashedpw=await bcrypt.hash(enteredPassword, 10);
        // console.log(hashedpw)

        // Find the user in the hardcodedUsers array
        const user = hardcodedUsers.find((user) => user.username === enteredUsername);

        if (user) {
            // Use bcrypt.compare to check if entered password matches stored hashed password
            const isPasswordMatch = await bcrypt.compare(enteredPassword, user.password);

            if (isPasswordMatch) {
                // Authentication successful, proceed to the next steps
                console.log('Authentication successful');
                setFlag(false);
                router.push({
                    pathname: '/FacultyDashboard',
                    query: { auth_user: enteredUsername }
                });
            } else {
                // Authentication failed
                console.log('Authentication failed');
                setFlag(true);
            }
        } else {
            // User not found
            console.log('User not found');
            setFlag(true);
        }
    };

    //for testing purposes
    const hardcodedUsers = [
        { username: 'ashwin.ramanathan', password: '$2a$10$9KownP0BZMYwIgHTCGbhCeRWBGygAFTL/4IIit7NLdfv1oQxs1OUO' },
        { username: 'sonia.khetarpaul', password: '$2a$10$kOVEyoRUPUbJNjFysu19pOTdXXdnkaMV0jLCbk9LqXOdZEFtyj/W.' },
        { username: 'vikash.kumar', password: '$2a$10$N7pl6E5OzMdy.1OQOkbN1uPXf0KLThT/d2kf4j4DZ686IQqHlkGWW' },
    ];

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formRollNumber">
                        <Form.Label>Email Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="EmailId(without snu.edu.in)"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
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
}

export default FacSignIn;