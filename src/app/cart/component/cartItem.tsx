import Image from "next/image"

interface CartItemProps {
    name: string;
    price: number;
    image: string;
}


export const CartItem = ({ name, price, image }: CartItemProps) => {
    return (
        <div className="cart-item">
            <Image src={image} alt={name} width={100} height={100} />
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}