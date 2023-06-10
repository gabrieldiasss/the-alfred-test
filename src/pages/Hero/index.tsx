import { useParams } from "react-router-dom";
import { HeroDetails } from "./components/HeroDetails";
import { LastReleases } from "./components/LastReleases";
import { HeroContainer, HeroContent } from "./styles";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { HeaderHero } from "./components/HeaderHero";

export interface Comics {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IHeroDetails {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    collectionURI: string;
  };
}

export function Hero() {
  const { id } = useParams();

  const [hero, setHero] = useState<IHeroDetails>({} as IHeroDetails);
  const [comics, setComics] = useState<Comics[]>([]);

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((response) => setHero(response.data.data.results[0]));
  }, []);

  useEffect(() => {
    api
      .get(`/characters/${id}/comics`)
      .then((response) => setComics(response.data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        <HeaderHero />
        
        <HeroDetails hero={hero} />

        <LastReleases comics={comics} />
      </HeroContent>
    </HeroContainer>
  );
}
