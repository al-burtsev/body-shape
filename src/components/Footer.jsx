import { socials } from "../../constants"
const Footer = () => {
  return (
    <footer className="py-9 md:py-17.5">
      <div className="container mx-auto max-w-6xl px-4">
        <ul className="flex gap-6 md:gap-12.5 mb-4 md:mb-7.5">
          {socials.map(({ id, src, title }) => (<li key={id}><a href="#!"><img src={src} alt={`social ${title}`} /></a></li>))}
        </ul>
        <address className="grid md:grid-cols-2 md:w-1/2 gap-y-2 md:gap-y-0 md:gap-x-12.5">
          <div className="font-roboto font-light text-sm/7 row-span-2">г. Москва, ул. Тверская, д. 12, стр. 1
            Россия, 125009</div>
          <div className="font-roboto font-light text-sm">
            Телефон <a href="tel:+78001234567">+7 (800) 12 34 567</a>
          </div>
          <div className="font-roboto font-light text-sm">
            <a href="mailto:info@bodyshape.ru">info@bodyshape.ru</a>
          </div>
        </address>
      </div>
    </footer>
  )
}

export default Footer