import React from "react";
import css from "./Filter.module.css";
// TODO

const Filter = () => {
  return (
    <div className={css.filterContainer}>
      {/* <form className={css.form} action={handleSubmit}> */}
      <form className={css.form}>
        <label className={css.label}>
          Car brand
          <select name="brand" className={css.select}>
            {/* {ARRAY.map((ITEM) => (
              <option key={ITEM.id} value={ITEM.id}>
                {ITEM.name}
              </option>
            ))} */}
            <option value="">Choose a brand</option>
          </select>
        </label>

        <label className={css.label}>
          Price/ 1 hour
          <select name="price" className={css.select}>
            {/* {ARRAY.map((ITEM) => (
              <option key={ITEM.id} value={ITEM.id}>
                {ITEM.name}
              </option>
            ))} */}
            <option value="">Price/ 1 hour</option>
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
