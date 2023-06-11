import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function HeroCardSkeleton({ cards }: { cards: any }) {
  return (
    Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} >
        <Skeleton height={250} width={250} />

        <div>
          <Skeleton style={{ marginTop: "0.5rem" }} />
        </div>
      </div>
    ))
  )
}
