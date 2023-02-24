import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setSignUpError("");
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User Created Successfully", {
                    // icon: "👏",
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });

                const userInfo = {
                    displayName: data.name,
                };

                updateUser(userInfo)
                    .then(() => {})
                    .catch((err) => console.log(err));
                navigate("/");
            })
            .catch((e) => {
                console.log(e.message);
                setSignUpError(e.message);
            });
    };

    return (
        <section className=" flex justify-center">
            <div className="w-[350px] p-8 mt-24 shadow-md rounded-sm bg-gray-100">
                <h1 className="text-center mb-6 text-3xl font-bold text-yellow-500">
                    Register
                </h1>
                {signUpError && <p className="text-red-400">{signUpError}</p>}
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-3">
                        <input
                            {...register("name")}
                            className="p-2 w-full rounded-sm border-none outline-yellow-500"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full mb-3">
                        <input
                            {...register("email", { required: true })}
                            className="p-2 w-full rounded-sm border-none outline-yellow-500"
                            type="email"
                            placeholder="Email"
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
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be 6 character or longer",
                                },
                            })}
                            className="p-2 w-full rounded-sm border-none outline-yellow-500"
                            type="password"
                            placeholder="password"
                        />
                        {errors.email && (
                            <span style={{ color: "red" }}>
                                Email is required
                            </span>
                        )}
                        <br />
                    </div>

                    <button className="p-2 mt-3 mb-3 bg-yellow-300 hover:bg-yellow-400 w-full rounded-sm">
                        Sign up
                    </button>
                </form>

                <button className="p-2  bg-yellow-300 hover:bg-yellow-400 w-full rounded-sm">
                    Continue with Google
                </button>
                <p className="mt-4">
                    Already Sign in?{" "}
                    <Link
                        to="/login"
                        className="hover:underline text-yellow-500"
                    >
                        Sign in Now
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Register;
