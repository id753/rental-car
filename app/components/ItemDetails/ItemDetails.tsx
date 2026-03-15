"use client";

import Image from "next/image";
import css from "./ItemDetails.module.css";
import { Car, createForm, getCarById, NewFormData } from "@/app/lib/api";
import { useFormDraftStore } from "@/app/src/store/formStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

interface ItemDetailsProps {
  car: Car;
}

const ItemDetails = ({ car: initialCar }: ItemDetailsProps) => {
  const { id } = useParams<{ id: string }>();

  const { data: car = initialCar } = useQuery({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
    initialData: initialCar,
    refetchOnMount: false,
  });

  const { draft, setDraft, clearDraft } = useFormDraftStore();

  const { mutate } = useMutation({
    mutationFn: createForm,
    onSuccess: () => {
      alert("Booking successful! We will contact you soon.");
      clearDraft();
    },
    onError: (error: Error) => {
      alert(`Something went wrong: ${error.message}`);
    },
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (formData: FormData) => {
    const formValues = Object.fromEntries(formData) as NewFormData;
    const data: NewFormData & { carId: string } = {
      ...formValues,
      carId: car.id,
    };
    // Вызываем мутацию для отправки данных на сервер
    mutate(data);
  };

  return (
    <div className={css.container}>
      <div className={css.leftColumn}>
        <div className={css.imageContainer}>
          <Image
            src={car.img}
            alt={car.brand}
            width={640}
            height={512}
            className={css.mainImage}
            priority
          />
        </div>
        <div className={css.formContainer}>
          <h3 className={css.formTitle}>Book your car now</h3>
          <p className={css.formSubtitle}>
            Stay connected! We are always ready to help you.
          </p>
          <form action={handleSubmit} className={css.form}>
            <input
              className={css.input}
              name="name"
              type="text"
              placeholder="Name*"
              required
              defaultValue={draft.name}
              onChange={handleChange}
            />
            <input
              className={css.input}
              name="email"
              type="email"
              placeholder="Email*"
              required
              onChange={handleChange}
              defaultValue={draft.email}
            />
            <input
              className={css.input}
              name="date"
              type="date"
              placeholder="Booking date"
              onChange={handleChange}
              defaultValue={draft.date}
            />
            <textarea
              className={css.textarea}
              name="comment"
              placeholder="Comment"
              onChange={handleChange}
              defaultValue={draft.comment}
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
              <h1 className={css.title}>
                {car.brand} <span className={css.model}>{car.model}</span>,{" "}
                {car.year}
              </h1>
              <p className={css.idCar}>Id: {car.id.slice(0, 4)}</p>
            </div>
            <div className={css.locationGroup}>
              <p className={css.location}> {car.address}</p>
              <p className={css.mileage}>Mileage: {car.mileage} km</p>
            </div>
            <p className={css.price}>${car.rentalPrice}</p>
          </div>

          <p className={css.description}>{car.description}</p>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>Rental Conditions:</h2>
            <ul className={css.specList}>
              {car.rentalConditions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>Car Specifications:</h2>
            <ul className={css.specList}>
              <li>Year: {car.year}</li>
              <li>Type: {car.type}</li>
              <li>Fuel Consumption: {car.fuelConsumption}</li>
              <li>Engine Size: {car.engineSize}</li>
            </ul>
          </section>

          <section className={css.section}>
            <h2 className={css.sectionTitle}>
              Accessories and functionalities:
            </h2>
            <ul className={css.specList}>
              {[...car.accessories, ...car.functionalities].map(
                (item, index) => (
                  <li key={index} className={css.specItem}>
                    {item}
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
