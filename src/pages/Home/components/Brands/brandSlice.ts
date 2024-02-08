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
      models: [
        {
          id: 1,
          name: "Nexon",
          location: "Chennai",
          color: "Dark",
          numberOfOwners: "1",
          yearOfManufacture: "2023",
          transmission: "Manual",
          insuranceValidUpto: "2040",
          externalFitments: "Good",
          kms: "20000",
          photo: "",
        },
      ],
    },
    {
      id: 2,
      name: "Toyota",
      img: ToyotaLogo,
      models: [
        {
          id: 1,
          name: "Innova",
          location: "Chennai",
          color: "Gray",
          numberOfOwners: "1",
          yearOfManufacture: "2023",
          transmission: "Manual",
          insuranceValidUpto: "2040",
          externalFitments: "Good",
          kms: "20000",
          photo: "",
        },
        {
          id: 2,
          name: "Fortunure",
          location: "Chennai",
          color: "White",
          numberOfOwners: "1",
          yearOfManufacture: "2023",
          transmission: "Manual",
          insuranceValidUpto: "2040",
          externalFitments: "Good",
          kms: "20000",
          photo: "",
        },
      ],
    },
    {
      id: 3,
      name: "Suzuki",
      img: SuzukiLogo,
      models: [
        {
          id: 1,
          name: "Dezire",
          location: "Bangalore",
          color: "White",
          numberOfOwners: "1",
          yearOfManufacture: "2023",
          transmission: "Manual",
          insuranceValidUpto: "2040",
          externalFitments: "Good",
          kms: "20000",
          photo: "",
        },
      ],
    },
    {
      id: 4,
      name: "Hundai",
      img: HundaiLogo,
      models: [
        {
          id: 1,
          name: "Grand i10",
          location: "Bangalore",
          color: "Meroon",
          numberOfOwners: "1",
          yearOfManufacture: "2023",
          transmission: "Manual",
          insuranceValidUpto: "2040",
          externalFitments: "Good",
          kms: "20000",
          photo: "",
        },
      ],
    },
    {
      id: 5,
      name: "Ford",
      img: FordLogo,
      models: [
        {
          id: 1,
          name: "Pogo",
          location: "Chennai",
          color: "Red",
          numberOfOwners: "1",
          yearOfManufacture: "2023",
          transmission: "Manual",
          insuranceValidUpto: "2040",
          externalFitments: "Good",
          kms: "20000",
          photo: "",
        },
      ],
    },
  ],
  selectedBrand: undefined,
};

export const brandSlice = createSlice({
  name: "Brands",
  initialState,
  reducers: {
    setSelectedBrand: (state, action: PayloadAction<Brand>) => {
      state.selectedBrand = action.payload;
    },
    addNewModel: (state, action: PayloadAction<Brand[]>) => {
      state.brands = action.payload;
    },
  },
});

export const { setSelectedBrand, addNewModel } = brandSlice.actions;
export default brandSlice.reducer;
