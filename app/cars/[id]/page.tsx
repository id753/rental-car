import ItemDetails from "@/app/components/ItemDetails/ItemDetails";
import { getCarById } from "@/app/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

const CarPage = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
  });

  const car = await getCarById(id);
  // console.log(car);

  return (
    <section>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ItemDetails car={car} />
      </HydrationBoundary>
    </section>
  );
};

export default CarPage;
