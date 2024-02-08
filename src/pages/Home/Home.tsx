import { FC, useEffect, useState } from "react";
import Brands from "./components/Brands/Brands";
import { Brand, Model } from "./components/Brands/interfaces";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedBrand, addNewModel } from "./components/Brands/brandSlice";

import Modal from "../../components/Modal/Modal";
import AddNewModelForm from "./components/AddModelForm/AddModelForm";
import { formProps } from "./components/AddModelForm/interface";

const Home: FC = () => {
  const dispatch = useDispatch();
  const brandsData = useSelector((state: RootState) => state.brands);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState({} as formProps);
  const [errorMsg, setErrorMsg] = useState("");

  const onCancelHandler = () => {
    setModalVisible(false);
    setFormData({} as formProps);
    setErrorMsg("");
  };
  
  const onBrandClickHandler = (brand: Brand) => {
    dispatch(setSelectedBrand(brand));
    setModalVisible(true);
  };

  const addNewModalSubmitHandler = () => {
    if (Object.entries(formData).length > 0) {
      const { selectedBrand } = brandsData;
      const modelLength = selectedBrand?.models?.length as number;
      const newModel: Model = {
        ...formData,
        id: modelLength + 1,
      };
      const udateBrand = { ...(selectedBrand as Brand) };
      if (udateBrand.models) {
        udateBrand.models = [...udateBrand.models, ...[newModel]];
      }

      const updateBrands = [...brandsData.brands];
      const brandIndx = updateBrands.findIndex(
        (item) => item.id === udateBrand.id
      );
      updateBrands[brandIndx] = udateBrand;
      dispatch(addNewModel(updateBrands));
      onCancelHandler();
    } else {
      setErrorMsg("Must fill model information");
    }
  };

  return (
    <>
      <Brands brands={brandsData.brands} onClickBrand={onBrandClickHandler} />
      <Modal
        visible={modalVisible}
        title={"Add New Model"}
        okBtnText={"SUBMIT"}
        cancelBtnText={"Cancel"}
        discription={
          <>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <AddNewModelForm formData={formData} setFormData={setFormData} />
          </>
        }
        onOkClick={addNewModalSubmitHandler}
        onCancelClick={onCancelHandler}
      />
    </>
  );
};

export default Home;
