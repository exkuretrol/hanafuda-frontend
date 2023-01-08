import { useEffect, useState } from "react";
import pocketbaseEs from "pocketbase";
import { useSearchParams } from "react-router-dom";

const PocketBase = new pocketbaseEs("http://localhost:8090");

const Login = () => {
    const [username, setUsername] = useState("kuaz");
    const [password, setPassword] = useState("zxcv7890");
    const [user, setUser] = useState(null);

    PocketBase.authStore.onChange(() => {
        setUser(PocketBase.authStore.model);
    });

    const handleSubmit = async () => {
        await PocketBase.collection("users").authWithPassword(
            username,
            password
        );
    };

    const handleLogout = async () => {
        PocketBase.authStore.clear();
        setUser(PocketBase.authStore.model);
    };

    return (
        <>
            {PocketBase.authStore.isValid ? (
                <>
                    <button onClick={() => handleLogout()}>登出</button>
                    <p>以 {PocketBase.authStore.model.name} 登入</p>
                </>
            ) : (
                <>
                    <h1>登入頁面</h1>
                    <input
                        type="text"
                        placeholder="使用者名稱"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder="密碼"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <button onClick={() => handleSubmit()}>登入</button>
                    <p>尚未登入</p>
                </>
            )}
        </>
    );
};

export default Login;
