// app\catalog\page.tsx
import React from "react";

import Filter from "@/src/components/Filter/Filter";
import Catalog from "@/src/components/Catalog/Catalog";
import { getBrands, getCars } from "@/src/services/lib/api";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export const metadata = {
  title: "Catalog",
  description:
    "Browse our extensive fleet of rental cars. From economy to luxury, find the perfect match for your trip.",
};

const CatalogPage = async ({ searchParams }: PageProps) => {
  const filters = await searchParams;

  const data = await getCars(1, 12, filters);

  const brands = await getBrands();
  return (
    <section>
      <Filter brands={brands} />

      {data.cars && data.cars.length > 0 ? (
        <Catalog
          key={JSON.stringify(filters)}
          initialCars={data.cars}
          totalPages={data.totalPages}
        />
      ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          No cars found matching your criteria.
        </p>
      )}
    </section>
  );
};

export default CatalogPage;
