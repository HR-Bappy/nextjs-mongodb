import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
