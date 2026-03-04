import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько времени занимает SEO-продвижение до видимых результатов?",
      answer:
        "Первые улучшения позиций заметны уже через 4-8 недель. Стабильный рост трафика — через 3-4 месяца. Это связано с тем, как поисковые системы индексируют и оценивают изменения. Контекстная реклама даёт результат с первого дня запуска.",
    },
    {
      question: "Какой минимальный бюджет нужен для контекстной рекламы?",
      answer:
        "Для среднего бизнеса рекомендуем стартовый бюджет от 50 000 руб./месяц на рекламный расход. Наша комиссия за управление — фиксированная, не зависит от объёма бюджета. Работаем с крупными клиентами от 300 000 руб./месяц.",
    },
    {
      question: "Вы работаете только с крупным бизнесом или с любым?",
      answer:
        "Наша специализация — средний и крупный бизнес с оборотом от 50 млн руб. в год. Это позволяет нам применять продвинутые стратегии и давать гарантированный результат. Для малого бизнеса рекомендуем другие форматы работы.",
    },
    {
      question: "Что входит в ежемесячную техническую поддержку?",
      answer:
        "Мониторинг работоспособности сайта 24/7, обновление CMS и плагинов, резервное копирование, мелкие правки контента и дизайна (до 8 часов в месяц), консультации разработчика, ежемесячный технический отчёт.",
    },
    {
      question: "Можно ли передать нам проект, который уже вёл другой подрядчик?",
      answer:
        "Да, мы регулярно принимаем проекты в работу. Начинаем с полного аудита текущего состояния — SEO, рекламных кабинетов, технической части. Разрабатываем план развития и берём всё под управление без потери накопленных данных.",
    },
    {
      question: "Как выглядит ваша система отчётности?",
      answer:
        "Ежемесячный отчёт включает: позиции по ключевым запросам, динамику трафика, количество и стоимость лидов, расход рекламного бюджета, ROI по каждому каналу. Доступ к аналитическим дашбордам в режиме реального времени.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на вопросы, которые задают руководители и директора по маркетингу перед началом сотрудничества.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
