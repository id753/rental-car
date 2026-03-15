"use client";

import React from "react";
import css from "./Filter.module.css";
import { useRouter } from "next/navigation";

interface FilterProps {
  brands: string[];
}

const Filter = ({ brands }: FilterProps) => {
  const router = useRouter();
  // Генеруєм масив цін для селекту
  const prices = [];
  for (let i = 30; i <= 200; i += 10) {
    prices.push(i);
  }

  const handleSubmit = async (formData: FormData) => {
    const kmFrom = Number(formData.get("kmFrom"));
    const kmTo = Number(formData.get("kmTo"));

    if (kmFrom > 0 && kmTo > 0 && kmFrom > kmTo) {
      alert("The 'From' mileage cannot be greater than the 'To' mileage");
      return;
    }

    //    filters
    const brand = formData.get("brand");
    const price = formData.get("price");
    const minMileage = kmFrom;
    const maxMileage = kmTo;

    // Создаем объект параметров для URL
    const params = new URLSearchParams();

    if (brand) params.set("brand", brand.toString());
    if (price) params.set("rentalPrice", price.toString());
    if (minMileage) params.set("minMileage", kmFrom.toString());
    if (maxMileage) params.set("maxMileage", kmTo.toString());
    console.log(params);

    router.push(`/cars?${params.toString()}`);
  };

  return (
    <div className={css.filterContainer}>
      <form className={css.form} action={handleSubmit}>
        <label className={css.label}>
          Car brand
          <select name="brand" className={css.select} defaultValue="">
            <option value="" hidden>
              Choose a brand
            </option>
            <option value="">All brands</option>
            {brands.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className={css.label}>
          Price/ 1 hour
          <select name="price" className={css.select} defaultValue="">
            <option value="" hidden>
              Choose a price
            </option>

            {prices.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <fieldset className={css.kmGroup}>
          <legend className={css.label}>Сar mileage / km</legend>
          <div className={css.inputWrapper}>
            <input
              type="number"
              name="kmFrom"
              placeholder="From"
              className={css.inputFrom}
            />
            <input
              type="number"
              name="kmTo"
              placeholder="To"
              className={css.inputTo}
            />
          </div>
        </fieldset>

        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
