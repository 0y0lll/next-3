import Link from "next/link"

export default function Cart() {
	return (
		<div>
			<h4 className="title" style={{ fontSize: 30 }}>
				Cart
			</h4>
			<Link href="/cart/payment">Payment</Link>
		</div>
	)
}
