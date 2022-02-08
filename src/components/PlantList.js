import PlantCard from "./PlantCard";

function PlantList({plants}) {

  return (
    <ul className="cards">{plants.map((plant) => {
      return (
        <PlantCard
        plant={plant}
        />
      );
    })}
    </ul>
  );
}

export default PlantList;
