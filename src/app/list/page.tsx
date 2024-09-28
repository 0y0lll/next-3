"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductItemProps {
	id: number
	name: string
	price: number
	imgSrc: string
	count: number
}

export default function List() {
	const [products, setProducts] = useState<ProductItemProps[]>([
		{
			id: 1,
			name: "상품1",
			price: 40,
			imgSrc: "/food0.png",
			count: 0,
		},
		{
			id: 2,
			name: "상품2",
			price: 30,
			imgSrc: "/food1.png",
			count: 0,
		},
		{
			id: 3,
			name: "상품3",
			price: 50,
			imgSrc: "/food2.png",
			count: 0,
		},
	])

	const addCount = (id: number) => {
		setProducts((prevItems) =>
			prevItems.map((item) =>
				item.id === id && item.count >= 0 && item.count < 10
					? { ...item, count: item.count + 1 }
					: item,
			),
		)
	}

	const removeCount = (id: number) => {
		setProducts((prevItems) =>
			prevItems.map((item) =>
				item.id === id && item.count > 0
					? { ...item, count: item.count - 1 }
					: item,
			),
		)
	}

	return (
		<div>
			<h4 className="title" style={{ fontSize: 30 }}>
				List
			</h4>

			{products.map((item, index) => (
				<div key={index} className="food">
					<Image
						src={item.imgSrc}
						alt={item.name}
						width={400}
						height={400}
					/>
					<h4>
						{item.name} ${item.price}
					</h4>
					<button onClick={() => removeCount(item.id)}>-</button>
					<span>{item.count}</span>
					<button onClick={() => addCount(item.id)}>+</button>
				</div>
			))}
		</div>
	)
}
