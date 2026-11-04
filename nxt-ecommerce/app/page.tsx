import { products } from "@/app/lib/placeholder-data";
import ProductCard from "@/app/ui/product-card";

export default function Home() {
	return (
		<main>
			<section className="flex items-center justify-center p-2.5 lg:py-20 2xl:px-40">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</section>
		</main>
	)
}