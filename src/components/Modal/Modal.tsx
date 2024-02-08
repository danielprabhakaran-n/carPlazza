import { FC, SyntheticEvent, useEffect, useState } from "react";
import style from "./Modal.module.css";

interface ModalProps {
  visible: boolean;
  title: string;
  okBtnText: string;
  cancelBtnText: string;
  discription: React.ReactNode;
  onOkClick: (e: any) => void;
  onCancelClick: (e: any) => void;
}

const Modal: FC<ModalProps> = ({
  visible,
  title,
  discription,
  okBtnText,
  cancelBtnText,
  onCancelClick,
  onOkClick,
}) => {
  return (
    <div
      className={`${style["modalOverlay"]} ${
        visible ? style["show"] : style["hide"]
      }`}
    >
      <div className={style["modal"]}>
        <header className={style["modalHeader"]}>
          <div>{title}</div>
          <div className={style["closeIcon"]} onClick={(e) => onCancelClick(e)}>
            x
          </div>
        </header>
        <div className={style["modalContent"]}>{discription}</div>
        <footer className={style["modalFooter"]}>
          <button
            className={`${style["modalBtn"]} ${style["btn"]} ${style["default"]}`}
            onClick={onCancelClick}
          >
            {cancelBtnText}
          </button>
          <button
            type="submit"
            className={`${style["modalBtn"]} ${style["btn"]} ${style["primary"]}`}
            onClick={onOkClick}
          >
            {okBtnText}
          </button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
