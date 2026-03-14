import Image from "next/image";
import css from "./ItemDetails.module.css";

const ItemDetails = () => {
  return (
    <div className={css.container}>
      <div className={css.leftColumn}>
        <div className={css.imageContainer}>
          <Image
            src="/car-placeholder.jpg"
            alt="Buick Enclave"
            width="640"
            height="512"
            className={css.mainImage}
          />
        </div>
        <div className={css.formContainer}>
          <h3 className={css.formTitle}>Book your car now</h3>
          <p className={css.formSubtitle}>
            Stay connected! We are always ready to help you.
          </p>
          <form className={css.form}>
            <input
              className={css.input}
              name="name"
              type="text"
              placeholder="Name*"
              required
            />
            <input
              className={css.input}
              name="email"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              className={css.input}
              name="date"
              type="text"
              placeholder="Booking date"
            />
            <textarea
              className={css.textarea}
              name="comment"
              placeholder="Comment"
            ></textarea>
            <button className={css.submitButton} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className={css.rightColumn}>
        <div className={css.contentContainer}>
          <div className={css.header}>
            <div className={css.titleGroup}>
              <h1 className={css.title}>Buick Enclave, 2008</h1>
              <p className={css.idCar}>Id: 9582</p>
            </div>
            <div className={css.locationGroup}>
              <p className={css.location}> Kyiv, Ukraine</p>
              <p className={css.mileage}>Mileage: 5 858 km</p>
            </div>
            <p className={css.price}>$40</p>
          </div>

          <p className={css.description}>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </p>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>Rental Conditions:</h2>
            <ul className={css.specList}>
              <li>Minimum age : 25</li>
              <li>Security deposite required </li>
              <li>Valid driver’s license</li>
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>Car Specifications:</h2>
            <ul className={css.specList}>
              <li>Year: 2008</li>
              <li>Type: SUV</li>
              <li>Fuel Consumption: 10.5</li>
              <li>Engine Size: 3.6L V6</li>
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>
              Accessories and functionalities:
            </h2>
            <ul className={css.specList}>
              <li>Leather seats</li>
              <li>Panoramic sunroof</li>
              <li>Remote start</li>
              <li>Blind-spot monitoring</li>
              <li>Power liftgate</li>
              <li>Premium audio system</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
