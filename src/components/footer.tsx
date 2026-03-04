import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              PROMO<span className="text-red-500">DRIVE</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-4 max-w-md leading-relaxed">
              Рекламное агентство полного цикла для среднего и крупного бизнеса. SEO, контекст, разработка сайтов
              и приложений, техническая поддержка.
            </p>
            <p className="font-space-mono text-gray-400 text-sm mb-6">
              Работаем по всей России и СНГ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200" aria-label="VK">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200" aria-label="Telegram">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@promodrive.ru" className="text-gray-400 hover:text-red-500 transition-colors duration-200" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  SEO-продвижение
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контекстная реклама
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Разработка сайтов
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Разработка приложений
                </a>
              </li>
              <li>
                <a href="#services" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Техподдержка
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#cases" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <Phone size={14} />
                  +7 (800) 000-00-00
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 PromoDrive. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Условия использования
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
