import { Address } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type AddressState = {
  addresses: Address[];
  addAddress: (addr: Address) => void;
  removeAddress: (id: string) => void;
  clearAddress: () => void;
};

const useAddressStore = create<AddressState>()(
  persist(
    (set) => ({
      addresses: [],
      addAddress: (addr) =>
        set((state) => ({ addresses: [...state.addresses, addr] })),
      removeAddress: (id) =>
        set((state) => ({
          addresses: state.addresses.filter((addr) => addr.id !== id),
        })),
      clearAddress: () => set({ addresses: [] }),
    }),
    {
      name: "address-storage",
    }
  )
);

export default useAddressStore;
