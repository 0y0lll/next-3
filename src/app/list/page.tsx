import Image from "next/image"

export default function List() {
	const products = [
		{
			name: "상품1",
			price: 40,
			imgSrc: "/food0.png",
		},
		{
			name: "상품2",
			price: 30,
			imgSrc: "/food1.png",
		},
		{
			name: "상품3",
			price: 50,
			imgSrc: "/food2.png",
		},
	]

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
				</div>
			))}
		</div>
	)
}
