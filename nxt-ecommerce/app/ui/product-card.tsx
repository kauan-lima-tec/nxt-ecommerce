import { Product } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product} : { product: Product}) {
    return (
        <div className="flex flex-col gap-0 items-center w-full bg-neutral-100 shadow-sm border border-neutral-400">
            <div className="relative w-full h-80 bg-white">
                <Image
                    src={product.thumbnail}
                    alt={`${product.name} thumbnail`}
                    fill
                    className="object-contain p-5 border-b border-neutral-400"
                />
            </div>
            <div className="flex flex-col gap-4 p-4 w-full">
                <Link href={product.slug} className="line-clamp-2 hover:text-emerald-500">
                    {product.name}
                </Link>
                <p className="text-lg">R$ {product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}