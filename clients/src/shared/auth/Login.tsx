import styles from "@/src/utils/style";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	AiFillGithub,
	AiOutlineEye,
	AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const formSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, "Password must be at least 8 characters long!"),
});

type LoginSchema = z.infer<typeof formSchema>;

const Login = ({ setActiveState }: { setActiveState: (e: string) => void }) => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<LoginSchema>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: LoginSchema) => {
		reset();
	};

	return (
		<div className="mb-6">
			<h1 className="text-black text-lg font-medium my-6 ">Login to Foodies</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="" className={`${styles.label}`}>
					Email address
				</label>
				<input
					type="email"
					placeholder="loginemail@gmail.com"
					className={`${styles.input}`}
					{...register("email")}
				/>
				{errors.email && (
					<span className="text-rose-500 block mt-1">{`${errors.email.message}`}</span>
				)}

				<div className="w-full mt-5 relative mb-1">
					<label htmlFor="password" className={`${styles.label}`}>
						Password
					</label>
					<input
						type={!showPassword ? "password" : "text"}
						placeholder="password!@#"
						className={`${styles.input}`}
						{...register("password")}
					/>
					{errors.password && (
						<span className="text-rose-500 block mt-1">{`${errors.password.message}`}</span>
					)}

					{!showPassword ? (
						<AiOutlineEyeInvisible
							size={20}
							onClick={() => setShowPassword(true)}
							className="text-zinc-500 absolute bottom-1 right-2 z-1 cursor-pointer"
						/>
					) : (
						<AiOutlineEye
							size={20}
							onClick={() => setShowPassword(false)}
							className="text-zinc-500 absolute bottom-1 right-2 z-1 cursor-pointer"
						/>
					)}
				</div>

				<div className="w-full mt-5">
					<span className="py-2 text-zinc-500 text-xs font-Poppins block text-right cursor-pointer hover:underline">
						Forgot password?
					</span>
					<input
						type="submit"
						value="Login"
						disabled={isSubmitting}
						className={`${styles.button}`}
					/>
				</div>

				<br />

				<div className="flex items-center ">
					<div className="h-[1px] w-full bg-zinc-200" />
					<h5 className="text-center w-auto font-Poppins text-xs text-zinc-500 px-1">
						Or
					</h5>
					<div className="h-[1px] w-full bg-zinc-200" />
				</div>

				<div className="flex items-center justify-center my-3">
					<FcGoogle size={30} className="cursor-pointer mr-2" />
					<AiFillGithub size={30} className="cursor-pointer text-black ml-2" />
				</div>

				<h5 className="text-center pt-4 font-Poppins text-xs text-black">
					Don&apos;t have an account yet?{" "}
					<span
						className="text-[#ffc976] pl-1 cursor-pointer"
						onClick={() => setActiveState("signup")}
					>
						Sign up
					</span>
				</h5>
			</form>
		</div>
	);
};

export default Login;
