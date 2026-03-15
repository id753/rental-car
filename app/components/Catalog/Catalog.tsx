// components/Catalog/Catalog.tsx
"use client";

import { useState } from "react";
import { Car, getCars } from "../../lib/api";
import Item from "../Item/Item";
import css from "./Catalog.module.css";

interface CatalogProps {
  initialCars: Car[];
}

const Catalog = ({ initialCars }: CatalogProps) => {
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false); // Чтобы скрыть кнопку, если данных больше нет

  const handleLoadMore = async () => {
    if (isLoading) return; // Защита от двойного клика
    setIsLoading(true);

    const nextPage = page + 1;

    try {
      // 1. Получаем данные (это объект типа CarsResponse)
      const data = await getCars(nextPage);

      // 2. Извлекаем массив машин из свойства cars
      const newCars = data.cars;

      if (newCars && newCars.length > 0) {
        setCars((prev) => [...prev, ...newCars]);
        setPage(nextPage);
      }

      // Если мы достигли лимита страниц, скрываем кнопку
      if (nextPage >= data.totalPages || newCars.length === 0) {
        setIsEnd(true);
      }
    } catch (error) {
      console.error("Failed to load cars", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {cars.map((item) => (
          <li key={item.id}>
            <Item car={item} />
          </li>
        ))}
      </ul>

      {/* Показываем кнопку только если есть что грузить */}
      {!isEnd && (
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className={css.button}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </section>
  );
};

export default Catalog;
