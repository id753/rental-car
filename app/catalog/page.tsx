import React from "react";
import Filter from "../components/Filter/Filter";
import Catalog from "../components/Catalog/Catalog.tsx";

const page = () => {
  return (
    <section>
      <Filter />
      <Catalog />
    </section>
  );
};

export default page;
