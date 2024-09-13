interface BannerProps {
    title: string;
}

export const Banner = ({ title }: BannerProps) => {
    return (
        <h4 className="title">{title}</h4>
    )
}