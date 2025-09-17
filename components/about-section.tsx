"use client"

import { Card } from "@/components/ui/card"
import { Brain, TrendingUp, Users, Zap } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analysis",
      description:
        "Our sophisticated AI algorithms analyze multiple data points from social media platforms to provide comprehensive influencer assessments.",
    },
    {
      icon: TrendingUp,
      title: "Market Cap Predictions",
      description:
        "Get accurate cryptocurrency market capitalization estimates based on influencer reach, engagement, and market dynamics.",
    },
    {
      icon: Users,
      title: "Social Media Intelligence",
      description:
        "Deep analysis of follower quality, engagement rates, and audience demographics across all major platforms.",
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description:
        "Instant valuations powered by live data feeds and continuous learning from market trends and pump activities.",
    },
  ]

  return (
    <section className="px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About CLOV</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          CLOV revolutionizes influencer valuation by combining cutting-edge AI technology with comprehensive social
          media analytics. Our platform provides unprecedented insights into the potential cryptocurrency market value
          of social media influencers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-8 border border-border">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We believe in democratizing access to influencer valuation data. By leveraging multiple large AI models and
            analyzing pump activities across various platforms, CLOV provides investors, marketers, and creators with
            the tools they need to make informed decisions in the rapidly evolving creator economy and cryptocurrency
            landscape.
          </p>
        </div>
      </div>
    </section>
  )
}
