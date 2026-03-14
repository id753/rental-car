import Image from "next/image";
import css from "./Item.module.css";
import React from "react";
import { HeartIcon } from "../Icons/Icons";

const Item = () => {
  const isFavorite = false;
  return (
    <div className={css.container}>
      <div className={css.containerImage}>
        <Image src="/" alt="" width="401" height="268" className={css.image} />
        <HeartIcon isFavorite={isFavorite} className={css.heartIcon} />
      </div>

      <div className={css.groupTitle}>
        <h2 className={css.name}>Buick Enclave, 2008</h2>
        <p className={css.price}>$40</p>
      </div>

      <div className={css.groupTags}>
        <p className={css.tag}>Kiev</p>
        <p className={css.tag}>Ukraine</p>
        <p className={css.tag}>Luxury Car Rentals</p>
        <p className={css.tag}>Suv</p>
        <p className={css.tag}>9 582 km</p>
      </div>

      <button className={css.button}>Read more</button>
    </div>
  );
};

export default Item;
