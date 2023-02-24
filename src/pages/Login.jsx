import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Contexts/AuthProvider";

const Login = () => {
    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const googleProvider = new GoogleAuthProvider();

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((e) => console.log(e.message));
    };

    const onSubmit = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                navigate("/");
            })
            .catch((e) => {
                console.log(e.message);
                setLoginError(e.message);
            });
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <section className=" flex justify-center">
            <div className="w-[350px] p-8 mt-24 shadow-md rounded-sm bg-gray-100">
                <h1 className="text-center mb-6 text-3xl font-bold text-yellow-500">
                    Login
                </h1>
                {loginError && <p className="text-red-400">{loginError}</p>}
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-3">
                        <input
                            className="p-2 w-full rounded-sm border-none outline-yellow-500"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span style={{ color: "red" }}>
                                Email is required
                            </span>
                        )}
                        <br />
                    </div>
                    <div className="w-full mb-3">
                        <input
                            className="p-2 w-full rounded-sm border-none outline-yellow-500"
                            type="password"
                            placeholder="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be 6 character or longer",
                                },
                            })}
                        />
                        {errors.password && (
                            <span style={{ color: "red" }}>
                                {errors.password?.message}
                            </span>
                        )}
                        <br />
                    </div>

                    <button className="p-2 mt-3 mb-3 bg-yellow-300 hover:bg-yellow-400 w-full rounded-sm">
                        Login
                    </button>
                </form>

                <button
                    className="p-2  bg-yellow-300 hover:bg-yellow-400 w-full rounded-sm "
                    onClick={handleGoogleSignIn}
                >
                    Continue with Google
                </button>
                <p className="mt-4">
                    Not Sign up yet?{" "}
                    <Link
                        to="/register"
                        className="hover:underline text-yellow-500"
                    >
                        Register Now
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
