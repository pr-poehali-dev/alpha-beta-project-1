import Icon from "@/components/ui/icon"

const stats = [
  { value: "150+", label: "Клиентов из среднего и крупного бизнеса" },
  { value: "8 лет", label: "На рынке digital-маркетинга" },
  { value: "×3.4", label: "Средний рост трафика за 6 месяцев" },
  { value: "94%", label: "Клиентов продлевают договор" },
]

const advantages = [
  {
    icon: "FileText",
    title: "Прозрачная отчётность",
    description: "Ежемесячные отчёты в понятном формате: позиции, трафик, лиды, расходы и ROI по каждому каналу.",
  },
  {
    icon: "Users",
    title: "Персональный менеджер",
    description: "За каждым клиентом закреплён выделенный менеджер. Ответ на запрос — в течение 2 часов в рабочее время.",
  },
  {
    icon: "Lock",
    title: "NDA и защита данных",
    description: "Подписываем соглашение о конфиденциальности. Ваши данные, стратегии и бюджеты не передаём третьим лицам.",
  },
  {
    icon: "Zap",
    title: "Гарантия результата",
    description: "Фиксируем KPI в договоре. Если не достигаем — работаем бесплатно до выхода на целевые показатели.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Почему нам доверяют</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Работаем только с реальными результатами — без воды, обещаний и накруток
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 font-orbitron mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl border border-red-500/20 bg-white/5 hover:border-red-500/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <Icon name={item.icon} size={24} fallback="CheckCircle" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
