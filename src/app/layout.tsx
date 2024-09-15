import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Providers } from "./providers";

export const metadata = {
	title: "Cahaya Dewi's Rental",
	description: "Cahay Dewi's Rental Website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
