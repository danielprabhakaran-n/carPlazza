import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "./FilterBrands.module.css";
import { RootState } from "../../../../redux/store";
import { useEffect } from "react";
import { Model } from "../Brands/interfaces";

interface FilterValuesProps {
  name: string;
  location: string;
  brand: string;
  owner: string;
}

const FilterBrands = () => {
  const brandsData = useSelector((state: RootState) => state.brands);
  const [modelData, setModelData] = useState<Model[]>([]);
  const [fliterValue, setFilterValues] = useState<FilterValuesProps>(
    {} as FilterValuesProps
  );

  useEffect(() => {
    const modifiedModelData = brandsData.brands.map((item) => {
      const modelsArray = [...(item.models as Model[])];
      const formateArr = modelsArray.map((obj) => {
        return {
          ...obj,
          brand: item.name,
          id: obj.id + Math.random(),
        };
      });
      return formateArr;
    });
    setModelData(modifiedModelData.flat());
  }, []);

  useEffect(() => {
    if (Object.entries(fliterValue).length > 0) {
      let modelArray = [...modelData];
      if (fliterValue.location) {
        modelArray = modelData.filter(
          (item) =>
            item?.location?.toLowerCase() === fliterValue.location.toLowerCase()
        );
      }
      if (fliterValue.brand) {
        modelArray = modelData.filter(
          (item) =>
            item?.brand?.toLowerCase() === fliterValue.brand.toLowerCase()
        );
      }
      if (fliterValue.owner) {
        modelArray = modelData.filter(
          (item) =>
            item?.numberOfOwners?.toLowerCase() ===
            fliterValue.owner.toLowerCase()
        );
      }
      setModelData(modelArray);
    }
  }, [fliterValue]);

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterValues({ ...fliterValue, [e.target.name]: e.target.value });
  };

  return (
    <div className={style["pageContainer"]}>
      <div className={style["sideBar"]}>
        <div>Filter</div>
        <div>
          <div>Location</div>
          <select name="location" onChange={onChangeHandler}>
            <option value={"chennai"}>Chennai</option>
            <option value={"bangalore"}>Bangalore</option>
          </select>
        </div>

        {/* <div>
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
        </div> */}

        <div>
          <div>Brand</div>
          <div>
            <input
              name="brand"
              type="checkbox"
              value="Toyota"
              onChange={onChangeHandler}
            />
            Toyota
            <input
              name="brand"
              type="checkbox"
              value="Suzuki"
              onChange={onChangeHandler}
            />
            Suzuki
            <input
              name="brand"
              type="checkbox"
              value="Ford"
              onChange={onChangeHandler}
            />
            Ford
            <input
              name="brand"
              type="checkbox"
              value="Tata"
              onChange={onChangeHandler}
            />
            Tata
          </div>
        </div>

        <div>
          <div>Owners</div>
          <div>
            <input
              name="owner"
              type="radio"
              value="1"
              onChange={onChangeHandler}
            />
            1st owner
            <input
              name="owner"
              type="radio"
              value="2"
              onChange={onChangeHandler}
            />
            2nd owner
            <input
              name="owner"
              type="radio"
              value="3"
              onChange={onChangeHandler}
            />
            3rd owner
            <input
              name="owner"
              type="radio"
              value="4"
              onChange={onChangeHandler}
            />
            4th owner
          </div>
        </div>
      </div>
      <div className={style["mainContent"]}>
        {modelData ? (
          modelData.map((item) => (
            <div key={item.id} className={style["cardItem"]}>
              <div className={style["modelName"]}>{item.name}</div>
              <div className={style["cardItem--content"]}>{item.location}</div>
              <div className={style["cardItem--content"]}>{item.color}</div>
              <div className={style["cardItem--content"]}>
                {item.transmission}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Available </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(FilterBrands);
