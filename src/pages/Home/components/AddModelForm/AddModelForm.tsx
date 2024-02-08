import { FC } from "react";
import { formProps } from "./interface";
import style from  "./AddModelForm.module.css"

interface AddModelFormProps {
  formData: formProps;
  setFormData: (data: formProps) => void;
}

const AddNewModelForm: FC<AddModelFormProps> = ({ formData, setFormData }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <div className={style["row"]}>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Name:
            <input
              className={style["inputField"]}
              name="name"
              // value={formData?.name}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Location:
            <input
              className={style["inputField"]}
              name="location"
              // value={formData?.location}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className={style["row"]}>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Color:
            <input
              className={style["inputField"]}
              name="color"
              // value={formData?.color}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Number of Owners:
            <input
              className={style["inputField"]}
              name="numberOfOwners"
              // value={formData?.numberOfOwners}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className={style["row"]}>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Year of Manufacture:
            <input
              className={style["inputField"]}
              name="yearOfManufacture"
              // value={formData?.yearOfManufacture}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Transmission:
            <input
              className={style["inputField"]}
              name="transmission"
              // value={formData?.transmission}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className={style["row"]}>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Insurance Valid Upto:
            <input
              className={style["inputField"]}
              name="insuranceValidUpto"
              // value={formData?.insuranceValidUpto}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            External Fitments:
            <input
              className={style["inputField"]}
              name="externalFitments"
              // value={formData?.externalFitments}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className={style["row"]}>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Kms:
            <input
              className={style["inputField"]}
              name="kms"
              // value={formData?.kms}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={`${style["col"]} ${style["col-6"]}`}>
          <label>
            Photo:
            <input
              className={style["inputField"]}
              name="photo"
              // value={formData?.photo}
              onChange={onChangeHandler}
              type="file"
            />
          </label>
        </div>
      </div>
    </form>
  );
};

export default AddNewModelForm;
