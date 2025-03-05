function UserGreeting(props) {
    const welcomeMessage = <h1 className="welcome-message">Welcome, {props.userName}!</h1>;
    const loginMessage = <h1 className="login-message">Please log in.</h1>;

    return (
        <>
            {props.isLoggedIn ? welcomeMessage : loginMessage}
        </>
    );
   

    
}



export default UserGreeting;