import { useState } from "react";
import pocketbaseEs from "pocketbase";
import { Navigate } from "react-router-dom";

const PocketBase = new pocketbaseEs("http://localhost:8090");

const Signup = () => {
    const [user, setUser] = useState(null)
    const [created, setCreated] = useState(false);
    const [error, setError] = useState(null);
    const handleSubmit = async () => {
        try {
            await PocketBase.collection("users").create({
                username: user.username,
                password: user.password,
                passwordConfirm: user.password,
                name: user.nickname,
            });
            setCreated(true);
        } catch (error) {
            console.log(error.data);
            setError(error.data.message);
        }
    };

    return (
        <>
            {created && <Navigate to="/login" replace={true} />}
            {error && <p>{error}</p>}
            <h1>註冊頁面</h1>
            <input
                type="text"
                placeholder="暱稱"
                onChange={(event) => {
                    setUser({ ...user, nickname: event.target.value });
                }}
            />
            <input
                type="text"
                placeholder="使用者名稱"
                onChange={(event) => {
                    setUser({ ...user, username: event.target.value });
                }}
            />
            <input
                type="password"
                placeholder="密碼"
                onChange={(event) => {
                    setUser({ ...user, password: event.target.value });
                }}
            />
            <button onClick={() => handleSubmit()}>送出</button>
        </>
    );
};

export default Signup;
