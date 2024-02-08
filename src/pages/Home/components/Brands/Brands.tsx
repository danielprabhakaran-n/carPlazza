import { FC } from "react";
import style from "./Brands.module.css";
import { Brand, BrandsProps } from "./interfaces";

const Brands: FC<BrandsProps> = ({ brands, onClickBrand }) => {
  return (
    <div className={style["brandsCard"]}>
      {brands &&
        brands.map((brandItem: Brand) => {
          return (
            <div className={style["brandItem"]} key={brandItem.id} onClick={() => onClickBrand(brandItem)}>
              <div className={style["imgContainer"]}><img className={style["brandImg"]} src={brandItem.img} /></div>
              <div className={style["brandName"]}>{brandItem.name}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Brands;
