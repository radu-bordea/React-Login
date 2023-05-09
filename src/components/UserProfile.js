import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <div>Loading!</div>
    }

    return (
        isAuthenticated && (
            <div>
                <h1>I am the User</h1><br />
                <img src={user.picture}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni iste possimus unde exercitationem voluptatem! Deleniti voluptas beatae ex quidem!</p>
            </div>
        )
    )
  
};

export default UserProfile;
