"use client";

import React, { useEffect, useState } from "react";
import css from "./Filter.module.css";
import { useRouter } from "next/navigation";
import { useFilterDraftStore } from "@/app/src/store/carStore";
import { DownIcon } from "../Icons/Icons";

interface FilterProps {
  brands: string[];
}

const Filter = ({ brands }: FilterProps) => {
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useFilterDraftStore();
  const [isHydrated, setIsHydrated] = useState(false);

  // 2. После первого рендера (useEffect) мы точно знаем, что Zustand прочитал localStorage
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // 4. Коли користувач змінює будь-яке поле форми — оновлюємо стан
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

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
    let brand = formData.get("brand");
    let price = formData.get("price");
    const minMileage = kmFrom;
    const maxMileage = kmTo;

    // Создаем объект параметров для URL
    const params = new URLSearchParams();

    if (brand === "all") {
      brand = "";
    }
    if (price === "all") {
      price = "";
    }
    if (brand) params.set("brand", brand.toString());
    if (price) params.set("rentalPrice", price.toString());
    if (minMileage) params.set("minMileage", kmFrom.toString());
    if (maxMileage) params.set("maxMileage", kmTo.toString());
    console.log(params);

    router.push(`/cars?${params.toString()}`);
    clearDraft();
  };

  return (
    <div className={css.filterContainer}>
      <form className={css.form} action={handleSubmit}>
        <label className={css.label}>
          Car brand
          <div className={css.selectWrapper}>
            <select
              name="brand"
              className={css.select}
              // 3. Используем value. Если еще не гидратировались — ставим "",
              value={isHydrated ? draft?.brand || "" : ""}
              onChange={handleChange}
            >
              <option value="" hidden>
                Choose a brand
              </option>
              <option value="all">All brands</option>
              {brands.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {/* Иконка стрелочки */}
            {/* <DownIcon className={css.selectIcon} /> */}
          </div>
        </label>

        <label className={css.label}>
          Price/ 1 hour
          <select
            name="price"
            className={css.select}
            value={isHydrated ? draft?.price || "" : ""}
            onChange={handleChange}
          >
            <option value="" hidden>
              Choose a price
            </option>

            <option value="all">All price</option>

            {prices.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <fieldset className={css.kmGroup}>
          <legend className={css.label}>Сar mileage / km</legend>
          <div className={css.inputsWrapper}>
            <input
              type="number"
              name="kmFrom"
              placeholder="From"
              min="0" // Запрещает выбор отрицательных чисел через стрелочки
              className={css.inputFrom}
              value={isHydrated ? draft?.kmFrom || "" : ""}
              onChange={handleChange}
            />
            <input
              type="number"
              name="kmTo"
              placeholder="To"
              min="0" // Запрещает выбор отрицательных чисел через стрелочки
              className={css.inputTo}
              value={isHydrated ? draft?.kmTo || "" : ""}
              onChange={handleChange}
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
