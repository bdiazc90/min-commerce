import { type Product } from "../models/product";


export default function ProductCard(props: Product) {
	return (
		<div className="group relative p-4 sm:p-6 rounded-xl bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
			<div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
				<img 
					src={props.imageUrl} 
					alt={props.title} 
					className="w-40 transform transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			
			<div className="space-y-4">
				<span className="inline-block text-xs px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#374151] text-[#4B5563] dark:text-[#D1D5DB]">
					{props.category}
				</span>

				<h3 className="text-lg leading-tight font-medium text-[#111827] dark:text-[#F9FAFB] truncate">
					{props.title}
				</h3>

				<p className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">
					US$ {props.price}
				</p>
			</div>
		</div>
	);
}
