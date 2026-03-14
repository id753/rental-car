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

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const getCars = async (): Promise<CarsResponse> => {
  const res = await axios.get<CarsResponse>("/cars");
  return res.data;
};
