import Avatar from "../Avatar";
import Bio from "../Bio";
import { Data } from "./../../types";

const Card = ({ data }: { data: Data }) => {
  return (
    <div className="card">
      <Avatar url={data.avatar} />
      <Bio name={data.name} title={data.jobTitle} food={data.favoriteFood} />
    </div>
  );
};

export default Card;
