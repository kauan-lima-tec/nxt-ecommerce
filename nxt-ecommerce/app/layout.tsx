import { inter } from "@/app/ui/types";
import "@/app/ui/globals.css";

export default function RootLayout({ children } : LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${inter.className} antialiased`}
		>
			<body>
				{ children }
			</body>
		</html>
	)
}