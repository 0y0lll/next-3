'use client'

import Image from "next/image"
import { useState } from "react"

interface ProductItemProps {
	name: string
	price: number
	imgSrc: string
	count: number
}

export default function List() {
	const [count, setCount] = useState(0)
	
	const products: ProductItemProps[] = [
		{
			name: "상품1",
			price: 40,
			imgSrc: "/food0.png",
			count: 0,
		},
		{
			name: "상품2",
			price: 30,
			imgSrc: "/food1.png",
			count: 0,
		},
		{
			name: "상품3",
			price: 50,
			imgSrc: "/food2.png",
			count: 0,
		},
	]
	
	const addCount = (product: ProductItemProps) => {
		const newCount = count + 1
		
		if (newCount >= 0 && newCount <= 20) {
			setCount(newCount)
		}
	}
	
	const removeCount = (product: ProductItemProps) => {
		const newCount = count - 1
		
		if (newCount >= 0) {
			setCount(count - 1)
		}		
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
					<button onClick={() => removeCount(item)}>-</button>
					<span>{count}</span>
					<button onClick={() => addCount(item)}>+</button>
				</div>
			))}
		</div>
	)
}
