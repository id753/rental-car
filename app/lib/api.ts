// lib/api.ts
import axios from "axios";

export type Car = {
  id: string;
  brand: string;
  type: string;
  model: string;
  rentalCompany: string;
  year: number;
  img: string;
  rentalPrice: string;
  address: string;
  mileage: number;
  fuelConsumption: string;
  engineSize: string;
  description: string;
  accessories: string[];
  functionalities: string[];
  rentalConditions: string[];
};

export type CarsResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

export type NewFormData = {
  comment: string;
  date: string;
  email: string;
  name: string;
};

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getCars = async (): Promise<CarsResponse> => {
  const res = await axios.get<CarsResponse>("/cars");
  // console.log("Full URL:", axios.defaults.baseURL + `/cars`);

  return res.data;
};

export const getCarById = async (id: string) => {
  const res = await axios.get<Car>(`/cars/${id}`);

  return res.data;
};

export const createForm = async (data: NewFormData) => {
  // Имитируем задержку сети
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Просто возвращаем данные назад, как будто сервер их принял
  console.log("Данные успешно отправлены в 'бэкенд':", data);
  return data;
};
