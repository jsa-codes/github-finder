import { useEffect } from 'react';

export const UserResults = () => {

    useEffect(() => {
        fetchUsers();
    }, []
    )

    const fetchUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {

            },
        }
        );

        const data = await response.json()

        console.log(data)
    }
    return <div>User Results</div>
}