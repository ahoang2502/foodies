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
	name: z.string().min(3, "Name must be at least 3 characters long!"),
	email: z.string().email(),
	password: z.string().min(8, "Password must be at least 8 characters long!"),
	phone_number: z
		.number()
		.min(11, "Phone number must be at least 11 characters!"),
});

type SignupSchema = z.infer<typeof formSchema>;

const Signup = ({
	setActiveState,
}: {
	setActiveState: (e: string) => void;
}) => {
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<SignupSchema>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: SignupSchema) => {
		reset();
	};

	return (
		<div className="mb-6">
			<h1 className="text-black text-lg font-medium my-6 ">
				Sign up with Foodies
			</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full mt-5 relative mb-1">
					<label htmlFor="" className={`${styles.label}`}>
						Name
					</label>
					<input
						type="text"
						placeholder="John Smith"
						className={`${styles.input}`}
						{...register("name")}
					/>
					{errors.name && (
						<span className="text-rose-500 block mt-1 text-xs">{`${errors.name.message}`}</span>
					)}
				</div>

				<div className="w-full mt-3 relative mb-1">
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
						<span className="text-rose-500 block mt-1 text-xs">{`${errors.email.message}`}</span>
					)}
				</div>

				<div className="w-full mt-3 relative mb-1">
					<label htmlFor="" className={`${styles.label}`}>
						Phone number
					</label>
					<input
						type="number"
						placeholder="+61 234 567 890"
						className={`${styles.input}`}
						{...register("phone_number")}
					/>
					{errors.phone_number && (
						<span className="text-rose-500 block mt-1 text-xs">{`${errors.phone_number.message}`}</span>
					)}
				</div>

				<div className="w-full mt-3 relative mb-1">
					<label htmlFor="password" className={`${styles.label}`}>
						Password
					</label>
					<input
						type={!showPassword ? "password" : "text"}
						placeholder="password!@#"
						className={`${styles.input}`}
						{...register("password")}
					/>

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
				{errors.password && (
					<span className="text-rose-500 block mt-1 text-xs">{`${errors.password.message}`}</span>
				)}

				<div className="w-full mt-5">
					<input
						type="submit"
						value="Sign up"
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
					Already have an account?
					<span
						className="text-[#24a17c] font-semibold pl-1 cursor-pointer"
						onClick={() => setActiveState("login")}
					>
						Login
					</span>
				</h5>
			</form>
		</div>
	);
};

export default Signup;
