import Image from "next/image";
import css from "./Item.module.css";
import React, { useEffect, useState } from "react";
import { HeartIcon } from "../Icons/Icons";
import { Car } from "../../services/lib/api";
import Link from "next/link";
import { useFavoritesStore } from "@/src/store/favoritesStore";

interface ItemProps {
  car: Car; // объект car типа Car
}

const Item = ({ car }: ItemProps) => {
  const { toggleFavorite, favorites } = useFavoritesStore();
  const [isHydrated, setIsHydrated] = useState(false);

  const addressParts = car.address.split(",");
  const city = addressParts[1]?.trim();
  const country = addressParts[2]?.trim();

  // const formattedMileage = car.mileage.toLocaleString("ru-RU");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const active = isHydrated && favorites.some((item) => item.id === car.id);
  return (
    <div className={css.container}>
      <div className={css.containerImage}>
        <Image
          src={car.img}
          alt={car.brand}
          width="401"
          height="268"
          className={css.image}
        />
        <button onClick={() => toggleFavorite(car)} className={css.heartIcon}>
          <HeartIcon isFavorite={active} />
        </button>
      </div>

      <div className={css.groupTitle}>
        <p className={css.carInfo}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <p className={css.rentalPrice}>${car.rentalPrice}</p>
      </div>

      <div className={css.groupTags}>
        <p className={`${css.address} ${css.tag}`}>
          {city}, {country}
        </p>
        <p className={`${css.rentalCompany} ${css.tag}`}>{car.rentalCompany}</p>
        <p className={`${css.type} ${css.tag}`}>{car.type}</p>
        <p className={`${css.mileage} ${css.tag}`}>
          {car.mileage.toLocaleString("ru-RU")} km
        </p>
      </div>
      <Link href={`/cars/${car.id}`} className={css.button}>
        Read more
      </Link>
    </div>
  );
};

export default Item;
