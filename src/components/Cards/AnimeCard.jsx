import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  return (
    <Link className="card overflow-hidden rounded-md" to={`/anime/${anime.id}`}>
      <figure className="relative h-48 w-full overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title?.english || anime.title.native}
          title={anime.title?.english || anime.title.native}
          className="h-full w-full object-cover object-center transition-all hover:scale-110"
        />

        <span className="badge badge-primary absolute left-2 bottom-2">
          {anime.type}
        </span>

        <span className="badge badge-secondary absolute right-2 bottom-2">
          {anime?.rating || "??"} %
        </span>
      </figure>

      <div className="card-body bg-base-300 p-3">
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
          {anime.title?.english || anime.title.native}
        </h3>
      </div>
    </Link>
  );
};

export default AnimeCard;
