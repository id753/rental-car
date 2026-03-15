import { NewFormData } from "@/app/lib/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FormDraftStore = {
  draft: NewFormData;
  setDraft: (form: NewFormData) => void;
  clearDraft: () => void;
};

const initialDraft: NewFormData = {
  comment: "",
  date: "",
  email: "",
  name: "",
};

export const useFormDraftStore = create<FormDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (form) => set(() => ({ draft: form })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "form-draft",
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
