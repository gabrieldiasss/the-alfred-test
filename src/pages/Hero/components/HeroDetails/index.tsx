import { RegularText, TitleText } from "@/components/Typography";
import {
  Assessment,
  ComicsAndMovies,
  HeroDetailsContainer,
  HeroHeader,
  HeroImage,
  HeroInfo,
  LastComic,
} from "./styles";
import { FaBook } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { IHeroDetails } from "../..";
import { HeroStats } from "../HeroStats";
import { HeartFavorite } from "@/components/HeartFavorite";

interface HeroDetailsProps {
  hero: IHeroDetails;
}

export function HeroDetails({ hero }: HeroDetailsProps) {

  return (
    <HeroDetailsContainer>
      <HeroInfo>
        <HeroHeader>
          <TitleText size="l">{hero.name}</TitleText>
          <HeartFavorite hero={hero} size={30} />
        </HeroHeader>

        <RegularText size="l">{hero.description}</RegularText>

        <ComicsAndMovies>
          <HeroStats title={"Quadrinhos"} icon={<FaBook />} heroCount={3000} />
          <HeroStats title={"Filmes"} icon={<BiMoviePlay />} heroCount={40} />
        </ComicsAndMovies>

        <Assessment>
          Rating <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
        </Assessment>

        <LastComic>Último quadrinho: 13 fev 2020</LastComic>
      </HeroInfo>

      <HeroImage>
        <img
          src={`${hero.thumbnail?.path}.${hero.thumbnail?.extension}`}
          alt=""
        />
      </HeroImage>
    </HeroDetailsContainer>
  );
}
