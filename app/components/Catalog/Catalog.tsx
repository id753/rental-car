// components/Catalog/Catalog.tsx
import { Car } from "../../lib/api";
import Item from "../Item/Item";
import css from "./Catalog.module.css";

interface CatalogProps {
  cars: Car[];
}

const Catalog = ({ cars }: CatalogProps) => {
  console.log("Catalog");

  return (
    <section className={css.section}>
      <ul className={css.list}>
        {cars.map((item) => (
          <li key={item.id}>
            <Item car={item} />
            {/* {item.brand} {item.model} */}
          </li>
        ))}
      </ul>
      <button type="submit" className={css.button}>
        Load more
      </button>
    </section>
  );
};

export default Catalog;
