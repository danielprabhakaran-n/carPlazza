import { FC } from "react";
import { formProps } from "./interface";

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
      <div className="row">
        <div className="col col-6">
          <label>
            Name:
            <input
              name="name"
              // value={formData?.name}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className="col col-6">
          <label>
            Location:
            <input
              name="location"
              // value={formData?.location}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col col-6">
          <label>
            Color:
            <input
              name="color"
              // value={formData?.color}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className="col col-6">
          <label>
            Number of Owners:
            <input
              name="numberOfOwners"
              // value={formData?.numberOfOwners}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col col-6">
          <label>
            Year of Manufacture:
            <input
              name="yearOfManufacture"
              // value={formData?.yearOfManufacture}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className="col col-6">
          <label>
            Transmission:
            <input
              name="transmission"
              // value={formData?.transmission}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col col-6">
          <label>
            Insurance Valid Upto:
            <input
              name="insuranceValidUpto"
              // value={formData?.insuranceValidUpto}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className="col col-6">
          <label>
            External Fitments:
            <input
              name="externalFitments"
              // value={formData?.externalFitments}
              onChange={onChangeHandler}
            />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col col-6">
          <label>
            Kms:
            <input
              name="kms"
              // value={formData?.kms}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className="col col-6">
          <label>
            Photo:
            <input
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
