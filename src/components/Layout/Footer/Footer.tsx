import style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={style["copyright"]}>All rights reserved @ Find My Car 2024</div>
    </footer>
  )
}

export default Footer;