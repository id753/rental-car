// app\catalog\page.tsx
import React from "react";
import Filter from "../components/Filter/Filter";
import Catalog from "../components/Catalog/Catalog";
import { getCars } from "../lib/api";

const CatalogPage = async () => {
  const data = await getCars(); // Теперь тут объект { cars, totalCars, ... }

  // const cars = await getCars();

  console.log("cars", data.cars);

  return (
    <section>
      <Filter />

      {data.cars && data.cars.length > 0 ? (
        <Catalog initialCars={data.cars} />
      ) : (
        <p>Cars not found.</p>
      )}
    </section>
  );
};

export default CatalogPage;
