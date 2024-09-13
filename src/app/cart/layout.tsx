import { Banner } from "./component/banner"

export default function CartLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div>
			<Banner title={'현대카드 무이자 이벤트 중'} />

			{children}
		</div>
	)
}
