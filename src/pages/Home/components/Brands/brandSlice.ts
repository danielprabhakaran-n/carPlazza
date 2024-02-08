import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Brand, BrandsProps, Model } from "./interfaces";

import TataLogo from "../../../../assets/logos/tata-logo.png";
import ToyotaLogo from "../../../../assets/logos/toyoto-logo.png";
import SuzukiLogo from "../../../../assets/logos/suzuki-logo.png";
import FordLogo from "../../../../assets/logos/ford-logo.png";
import HundaiLogo from "../../../../assets/logos/hyundai-logo.jpeg";

interface InitialStateProps {
  brands: Brand[];
  selectedBrand: Brand | undefined;
}

const initialState: InitialStateProps = {
  brands: [
    {
      id: 1,
      name: "Tata",
      img: TataLogo,
      models: [],
    },
    {
      id: 2,
      name: "Toyota",
      img: ToyotaLogo,
      models: [],
    },
    {
      id: 3,
      name: "Suzuki",
      img: SuzukiLogo,
      models: [],
    },
    {
      id: 4,
      name: "Hundai",
      img: HundaiLogo,
      models: [],
    },
    {
      id: 5,
      name: "Ford",
      img: FordLogo,
      models: [],
    },
  ],
  selectedBrand: undefined,
};

export const brandSlice = createSlice({
  name: "Brands",
  initialState,
  reducers: {
    setSelectedBrand: (state, action: PayloadAction<Brand>) => {
      console.log(state.selectedBrand, action.payload);
      state.selectedBrand = action.payload;
    },
    addNewModel: (state, action: PayloadAction<Brand[]>) => {
      state.brands = action.payload;
    },
  },
});

export const { setSelectedBrand, addNewModel } = brandSlice.actions;
export default brandSlice.reducer;
