import React ,{useState} from 'react'

function Practice6() {

    const [isLoggedin, setIsLoggedin] = useState(false);

    function handleLogin(){
        setIsLoggedin(true);
    }

    function handleLogout(){
        setIsLoggedin(false);
    }
  return (
    <div>
        <h1>conditional rendering </h1>

        {isLoggedin ? (

            <div>
                <h2>Welcome back , niraj!</h2>
                <p>You are logged in successfully
                    <button onClick={handleLogout}>Logout</button>
                </p>
            </div>
        ) : (
            <div>
                <h2>Please login to continue</h2>
                <p>You are not logged in yet
                    <button onClick={handleLogin}>Login</button>
                </p>
            </div>
        )}
    </div>
  )
}

export default Practice6