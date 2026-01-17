import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Module() {
  const {dipId, modId} = useParams();

  const { name, desc, lecturer } = getModule({ dipId, modId });

  return (
    <>
      <h2>Module</h2>

      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{lecturer.name}</h4>
      <span>
        {lecturer.title}
      </span>
    </>
  );
}
