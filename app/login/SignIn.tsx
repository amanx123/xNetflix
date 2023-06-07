"use client"
import axios from "axios";
import Link from "next/link";
import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SignIn = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [variant, setVariant] = useState("signin")

    const toggleVariant = useCallback(() => {
        setVariant((c: String) => c === 'signin' ? 'register' : 'signin')
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            })
            router.push('/')
        }
        catch (error) {
            console.error(error)
        }
    }, [email, password, router])
    const register = useCallback(async () => {
        try {
            await axios.post("/api/register", {
                name,
                email,
                password
            })
            login();
        }
        catch (error) {
            console.error(error)
        }
    }, [email, name, password, login])

    return (
        <>
            <div className="bg-black bg-opacity-60 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-lg">
                <h1 className="text-3xl text-white font-medium mb-6">{variant === "signin" ? "Sign In" : "Register"}</h1>
                <div className="flex flex-col gap-4">
                    {variant === "register" &&
                        (<input required
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            className="placeholder-neutral-400 px-4 py-3 w-full bg-zinc-800 rounded-md text-white"
                        />)}
                    <input required
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        placeholder="Email or phone number"
                        className="placeholder-neutral-400 px-4 py-3 w-full bg-zinc-800 rounded-md text-white"
                    />
                    <input required
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="placeholder-neutral-400 px-4 py-3 w-full bg-zinc-800 rounded-md text-white"
                    />
                    <button onClick={variant === 'signin' ? login : register} type="submit"
                        className="font-semibold mt-6 px-4 py-3 text-white bg-red-600 rounded-md">
                        {variant === 'signin' ? 'Sign In' : 'Register'}
                    </button>
                    <div
                        className="flex flex-row items-center justify-center gap-10 mt-2"
                    >
                        <div className="w-10 h-10 bg-white flex rounded-full items-center justify-center cursor-pointer hover:opacity-80">
                            <FcGoogle size={30} />
                        </div>
                        <div onClick={() => signIn('github', { callbackUrl: '/' })} className="w-10 h-10 bg-white flex rounded-full items-center justify-center cursor-pointer hover:opacity-80">
                            <FaGithub size={30} />
                        </div>
                    </div>
                    <span className="flex justify-between text-sm text-neutral-400">
                        <label>
                            <input type="checkbox" id="checkbox" name="rememberMe" defaultChecked={true} />
                            {" "}
                            Remember me
                        </label>
                        <button type="submit">Need help?</button>
                    </span>
                </div>
                <span className="flex mt-10">
                    <h2 className="text-neutral-400 mr-2">{variant === 'signin' ? 'New to Netflix? ' : 'Have an account?'}</h2>
                    <button onClick={toggleVariant} className="text-slate-100 hover:underline">
                        {variant === 'signin' ? 'Sign up now.' : 'Login'}
                    </button>
                </span>
            </div>
        </>
    )
}

export default SignIn