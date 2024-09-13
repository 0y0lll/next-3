import Link from "next/link"
import { CartItem } from "./component/cartItem"

export default function Cart() {
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
				Cart
			</h4>

			{products.map((item, index) => (
				<CartItem key={index} name={item.name} price={item.price} image={item.imgSrc} />
			))}
			
			<div style={{
				display: "flex",
				justifyContent: "space-between",
				marginTop: 20,
			}}>
				<div>
				<div>
					Total: $120
				</div>
					<Link href="/cart/payment">Payment</Link>
				</div>
				<button style={{
					border: 'none',
					backgroundColor: 'red',
					color: 'white',
				}}>Click</button>
			</div>
		</div>
	)
}
