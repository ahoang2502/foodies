import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import Providers from "./providers/NextUiProvider";

const dm_Sans = DM_Sans({
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
			<body className={`${dm_Sans.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
