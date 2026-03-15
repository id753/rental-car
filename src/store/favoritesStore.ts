import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Car } from "@/app/lib/api";

interface FavoritesState {
  favorites: Car[];
  toggleFavorite: (car: Car) => void;
  isFavorite: (carId: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (car) => {
        const { favorites } = get();
        const isExist = favorites.some((item) => item.id === car.id);

        if (isExist) {
          // Видаляємо, якщо вже є
          set({ favorites: favorites.filter((item) => item.id !== car.id) });
        } else {
          // Додаємо, якщо немає
          set({ favorites: [...favorites, car] });
        }
      },

      isFavorite: (carId) => {
        return get().favorites.some((item) => item.id === carId);
      },
    }),
    {
      name: "favorites-storage", // ключ у localStorage
    }
  )
);
