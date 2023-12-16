import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Providers from "./providers/NextUiProvider";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	variable: "--font-Poppins",
});

export const metadata: Metadata = {
	title: "Foodies",
	description: "food delivery",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
