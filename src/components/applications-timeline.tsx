import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "SEO и органический трафик",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Выстраиваем долгосрочное присутствие бизнеса в поисковых системах. Технический аудит, работа с семантикой,
            контент-стратегия и ссылочный профиль — всё для стабильного роста органических позиций.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Технический SEO-аудит и устранение ошибок
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Сбор и кластеризация семантического ядра
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Контент-маркетинг и работа со ссылочной массой
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Контекстная реклама и лиды",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Запускаем рекламные кампании, которые приводят целевых клиентов уже в первый месяц. Точный таргетинг,
            сплит-тестирование и постоянная оптимизация для максимальной отдачи от каждого рубля бюджета.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Яндекс.Директ и Google Ads под ключ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Ретаргетинг и look-alike аудитории
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Снижение стоимости заявки при росте объёма
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Разработка и техподдержка",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Создаём цифровые продукты, которые продают: корпоративные сайты, интернет-магазины, мобильные приложения.
            После запуска обеспечиваем ежемесячную техподдержку и развитие без простоев.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Разработка сайтов и приложений под ключ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Интеграция с CRM, 1C и другими системами
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Ежемесячная поддержка и обновления 24/7
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="cases" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы растим ваш бизнес</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три направления, которые в связке дают синергетический эффект: стабильный органический трафик,
            мгновенный поток лидов из рекламы и надёжная техническая база.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
