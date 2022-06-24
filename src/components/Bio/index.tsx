import { Bio as BioType } from "./../../types";

const Bio = ({ name, title, food }: BioType) => {
  return (
    <div className="bio">
      <h2>{name}</h2>
      <p>{title}</p>
      <p>
        <em>Favourite food: </em>
        {food}
      </p>
    </div>
  );
};

export default Bio;
