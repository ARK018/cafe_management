import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Stats() {
  const stats = [
    {
      title: "Categories",
      value: "13",
    },
    {
      title: "Products",
      value: "20",
    },
    {
      title: "Orders",
      value: "89",
    },
  ]

  return (
    <section className="px-5 py-10 bg-gray-50">
      <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-5">
        {stats.map((stat) => {
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
