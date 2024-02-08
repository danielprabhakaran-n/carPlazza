export interface Model {
  id: number;
  name: string;
  location: string; 
  color: string;
  numberOfOwners: string;
  yearOfManufacture: string;
  transmission: string;
  insuranceValidUpto: string;
  externalFitments: string;
  kms: string;
  photo: string;
  brand?: string;
} 

export interface Brand {
  id: number;
  name: string;
  img?: string;
  models?: Model[]
}

export interface BrandsProps {
  brands: Brand[];
  onClickBrand: (brand: Brand) => void;
}