

const Footer = () => {
  return (
    <footer className="h-52 flex items-center justify-evenly border-t-8 border-teal-800 bg-teal-400 dark:bg-slate-800 dark:border-lime-200">
        <div className="flex items-center">
          <p className="dark:text-white">Powered by</p>
          <img className="w-52 dark:invert" src="./images/DH.png" alt='DH-logo' />
        </div>
        <ul className="list-none flex gap-4">
          <li><img className="w-7 invert hover:invert-0 dark:invert-0 dark:hover:invert" src="./images/ico-facebook.png" alt="Facebook" /></li>
          <li><img className="w-7 invert hover:invert-0 dark:invert-0 dark:hover:invert" src="./images/ico-instagram.png" alt="Instagram" /></li>
          <li><img className="w-7 invert hover:invert-0 dark:invert-0 dark:hover:invert" src="./images/ico-whatsapp.png" alt="Whatsapp" /></li>
          <li><img className="w-7 invert hover:invert-0 dark:invert-0 dark:hover:invert" src="./images/ico-tiktok.png" alt="Tik Tok" /></li>
        </ul>
    </footer>
  )
}

export default Footer
