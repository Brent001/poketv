import Badges from "./Badges";
import ActionButtons from "./ActionButtons";

const AnimeDetails = ({ anime, isDub, toggleDub }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-md bg-base-300 bg-opacity-80 p-4 backdrop-blur-lg">
      <h2 className="text-2xl font-semibold">
        {anime.title?.english || anime.title.native}
      </h2>
      {/* <p>Genre(s): {anime.genres.join(", ")}</p> */}

      <Badges anime={anime} />
      <ActionButtons anime={anime} isDub={isDub} toggleDub={toggleDub} />
    </div>
  );
};

export default AnimeDetails;
