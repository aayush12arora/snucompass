import { useRouter } from 'next/router';

const UserDashboard = () => {
    const router = useRouter();
    return (
        <div>
            <h1>User Dashboard</h1>
            <h2> Welcome {router.query.rollNumber}</h2>
        </div>
    )
}

export default UserDashboard;