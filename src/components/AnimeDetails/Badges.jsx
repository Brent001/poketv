const Badges = ({ anime }) => {
  return (
    <div className="flex gap-2 lowercase">
      <span className="badge badge-primary">{anime.status}</span>
      <span className="badge badge-primary">{anime.subOrDub}</span>
      <span className="badge badge-primary">{anime.type}</span>
      <span className="badge badge-primary">{anime.duration}m</span>
    </div>
  );
};

export default Badges;
