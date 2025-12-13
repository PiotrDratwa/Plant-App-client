"use client"
import { Carousel } from "react-responsive-carousel";
import PlantItem from "./PlantItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";


type PlantCarouselProps = {
    title: string;
    labels: string[];
}

function PlantCarousel({title, labels}: PlantCarouselProps) {
  const Group = (() => {
    const result: string[][] = [];
    for (let i = 0; i < labels.length; i += 4) {
        result.push(labels.slice(i, i + 4));
    }
    return result;
  })();

  return (
    <div>
        <h3 className="text-2xl text-stone-900 font-medium text-center pb-4">{title}</h3>
        <Carousel>
            {Group.map((group, i) => (
            <div key={i} className="flex justify-center gap-8">
                {group.map((l) => (
                <PlantItem key={l} label={l} />
                ))}
            </div>
            ))}
        </Carousel>
    </div>
  );
}

export default PlantCarousel

