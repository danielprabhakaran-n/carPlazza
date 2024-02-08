import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./FilterBrands.module.css";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { Model } from "../Brands/interfaces";

const FilterBrands = () => {
  const brandsData = useSelector((state: RootState) => state.brands);
  const [modelData, setModelData] = useState<Model[]>([]);

  useEffect(() => {
    console.log(brandsData.brands);
    const modifiedModelData = brandsData.brands.map((item) => {
      const modelsArray = [...(item.models as Model[])];
      return modelsArray;
    });
    setModelData(modifiedModelData.flat());
  }, []);

  return (
    <div className={style["pageContainer"]}>
      <div className={style["sideBar"]}>
        <div>Filter</div>
        <div>
          <div>Location</div>
          <select>
            <option>Chennai</option>
            <option>Bangalore</option>
          </select>
        </div>

        <div>
          <div>Body type</div>
          <div>
            <input name="bodyType" type="radio" />
            Hatchback
            <input name="bodyType" type="radio" />
            Sedon
            <input name="bodyType" type="radio" />
            SUV
            <input name="bodyType" type="radio" />
            XUV
          </div>
        </div>

        <div>
          <div>Brand</div>
          <div>
            <input name="brand1" type="checkbox" />
            Toyota
            <input name="brand2" type="checkbox" />
            Suzuki
            <input name="brand3" type="checkbox" />
            Ford
            <input name="brand4" type="checkbox" />
            Tata
          </div>
        </div>

        <div>
          <div>Owners</div>
          <div>
            <input name="owner" type="radio" />
            1st owner
            <input name="owner" type="radio" />
            2nd owner
            <input name="owner" type="radio" />
            3rd owner
            <input name="owner" type="radio" />
            4th owner
          </div>
        </div>
      </div>
      <div className={style["mainContent"]}>
        {modelData &&
          modelData.map((item) => (
            <div className={style["cardItem"]}>
              <div className={style["modelName"]}>{item.name}</div>
              <div className={style["cardItem--content"]}>{item.location}</div>
              <div className={style["cardItem--content"]}>{item.color}</div>
              <div className={style["cardItem--content"]}>{item.transmission}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(FilterBrands);
