import { inter } from "@/app/ui/types";

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