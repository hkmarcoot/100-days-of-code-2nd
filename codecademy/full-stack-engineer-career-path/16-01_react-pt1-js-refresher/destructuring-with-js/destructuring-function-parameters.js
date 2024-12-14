let prairieRose = {
  name: "Prairie Rose",
  scientificName: "Rosa arkansana",
  kingdom: "Plantae",
  genus: "Rosa",
  use: "ornamental",
};

const printPlantInfo = ({ name, scientificName, kingdom }) => {
  console.log(
    `The ${name}, or ${scientificName}, is in the kingdom ${kingdom}`
  );
};

printPlantInfo(prairieRose);
