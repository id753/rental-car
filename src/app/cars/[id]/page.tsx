import { Metadata } from "next";
import ItemDetails from "../../../components/ItemDetails/ItemDetails";
import { getCarById } from "../../../services/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const car = await getCarById(id);

  const title = `${car.brand} ${car.model} (${car.year})`;
  const description = `Rent ${car.brand} ${car.model} for only ${car.rentalPrice}$. ${car.engineSize} engine, ${car.mileage} km mileage. Book now!`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: `Rent ${title} | Rental Car`,
      description: description,
      url: `https://rental-car-eight-flax.vercel.app/cars/${id}`,  
      siteName: "Rental Car",
      images: [
        {
          url: car.img || "/back-img-homepage-car.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [car.img || "/back-img-homepage-car.jpg"],
    },
  };
}

const CarPage = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
  });

  const car = await getCarById(id);

  return (
    <section>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ItemDetails car={car} />
      </HydrationBoundary>
    </section>
  );
};

export default CarPage;
