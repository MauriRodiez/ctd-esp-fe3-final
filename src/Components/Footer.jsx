import footerStyle from "../Styles/Footer.module.css"

const Footer = () => {
  return (
    <footer>
        <div className={footerStyle.dh}>
          <p>Powered by</p>
          <img src="./images/DH.png" alt='DH-logo' />
        </div>
        <ul className={footerStyle.redes}>
          <li><img src="./images/ico-facebook.png" alt="Facebook" /></li>
          <li><img src="./images/ico-instagram.png" alt="Instagram" /></li>
          <li><img src="./images/ico-whatsapp.png" alt="Whatsapp" /></li>
          <li><img src="./images/ico-tiktok.png" alt="Tik Tok" /></li>
        </ul>
    </footer>
  )
}

export default Footer
