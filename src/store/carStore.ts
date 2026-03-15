import { create } from "zustand";
import { persist } from "zustand/middleware";

type FilterDraftStore = {
  draft: NewFilterData;
  setDraft: (filter: NewFilterData) => void;
  clearDraft: () => void;
};
type NewFilterData = {
  brand: string;
  price: string;
  kmFrom: string;
  kmTo: string;
};

const initialDraft: NewFilterData = {
  brand: "",
  price: "",
  kmFrom: "",
  kmTo: "",
};

export const useFilterDraftStore = create<FilterDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (filter) => set(() => ({ draft: filter })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "filter-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
