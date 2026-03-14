import Image from "next/image";
import css from "./Item.module.css";
import React from "react";
import { HeartIcon } from "../Icons/Icons";
import { Car } from "@/app/lib/api";

interface ItemProps {
  car: Car; // объект car типа Car
}

const Item = ({ car }: ItemProps) => {
  const isFavorite = false;
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
        <HeartIcon isFavorite={isFavorite} className={css.heartIcon} />
      </div>

      <div className={css.groupTitle}>
        <p className={css.carInfo}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
        </p>
        <p className={css.rentalPrice}>${car.rentalPrice}</p>
      </div>

      <div className={css.groupTags}>
        <p className={`${css.address} ${css.tag}`}>{car.address}</p>
        <p className={`${css.rentalCompany} ${css.tag}`}>{car.rentalCompany}</p>
        <p className={`${css.type} ${css.tag}`}>{car.type}</p>
        <p className={`${css.mileage} ${css.tag}`}>{car.mileage}</p>
      </div>
      <button className={css.button}>Read more</button>
    </div>
  );
};

export default Item;
