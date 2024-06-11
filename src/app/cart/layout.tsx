export default function CartLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<h4 className="title">현대카드 무이자 이벤트 중</h4>

			{children}
		</div>
	)
}
