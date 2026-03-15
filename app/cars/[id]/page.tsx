import ItemDetails from "@/app/components/ItemDetails/ItemDetails";
import { getCarById } from "@/app/lib/api";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const CarPage = async ({ params }: Props) => {
  const { id } = await params;
  const car = await getCarById(id);

  return (
    <section>
      <ItemDetails car={car} />
    </section>
  );
};

export default CarPage;
