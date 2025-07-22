import { cn } from "@/utils/cn";
import Image from "next/image";

interface ReviewCardProps {
    src: string;
}

const ReviewCard = ({
    src
}: ReviewCardProps) => {
    return (
        <figure
            className={cn(
                "relative h-auto w-auto cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    width={1000}
                    height={1000}
                    alt="" src={src}
                    className="lg:h-80 md:h-64 h-48 w-auto object-contain"
                />
            </div>
        </figure>
    );
};

export default ReviewCard;