import React from "react";
import { useSession } from "../hooks/useSession";

const Home = () => {
    const { session, logout } = useSession();

    return (
        <div>
            {session.isAuthenticated ? (
                <div>
                    <h2>Welcome {session.user.username}</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <h2>You are not logged in</h2>
            )
            }
        </div>
    )
}

export default Home;