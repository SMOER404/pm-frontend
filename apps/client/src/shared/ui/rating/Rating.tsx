import {PublicSvg} from "@/shared/ui/PublicSvg";

interface RatingProps {
    value: number;
    reviewCount?: number;
    max?: number;
}

export const Rating = ({ value, reviewCount, max = 5 }: RatingProps) => (
    <div className="rating">
        {[...Array(max)].map((_, i) => (
            <PublicSvg src={'/static/images/star.svg'} key={i} filled={i < value}/>
        ))}
        {reviewCount && <span>({reviewCount})</span>}
    </div>
);