import Link from "next/link"

export default function Cart() {
	return (
		<div>
			<h4 className="title" style={{ fontSize: 30 }}>
				Cart
			</h4>

			<div className="cart-item">
				<p>상품명</p>
				<p>$40</p>
				<p>1개</p>
			</div>

			<Link href="/cart/payment">Payment</Link>
		</div>
	)
}
