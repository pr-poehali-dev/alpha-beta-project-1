import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "SEO-продвижение",
    description: "Выводим сайты в топ поисковых систем. Комплексная работа с семантикой, контентом и технической оптимизацией для стабильного органического трафика.",
    icon: "TrendingUp",
    badge: "Органика",
  },
  {
    title: "Контекстная реклама",
    description: "Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads. Максимальный ROI при минимальном бюджете — платите только за результат.",
    icon: "Target",
    badge: "PPC",
  },
  {
    title: "Разработка сайтов",
    description: "Создаём продающие сайты и корпоративные порталы под ключ. Современный дизайн, высокая скорость загрузки и конверсионные страницы.",
    icon: "Globe",
    badge: "Web",
  },
  {
    title: "Разработка приложений",
    description: "Мобильные и веб-приложения для автоматизации бизнеса. iOS, Android и кроссплатформенные решения с интеграцией в ваши бизнес-процессы.",
    icon: "Smartphone",
    badge: "App",
  },
  {
    title: "Техническая поддержка",
    description: "Ежемесячное сопровождение вашего цифрового присутствия: обновления, мониторинг, безопасность и оперативное решение любых задач.",
    icon: "Shield",
    badge: "24/7",
  },
  {
    title: "Аналитика и отчётность",
    description: "Прозрачные отчёты по всем каналам: трафик, лиды, продажи. Принимайте решения на основе реальных данных, а не ощущений.",
    icon: "BarChart3",
    badge: "Data",
  },
]

export function FeaturesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Комплексный digital-маркетинг</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Полный цикл продвижения бизнеса в интернете — от разработки до стабильного потока клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-red-500">
                    <Icon name={feature.icon} size={32} fallback="Star" />
                  </div>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
