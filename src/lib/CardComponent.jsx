import React from 'react'
import { Card, CardContent,} from "../components/ui/card"

export default function CardComponent() {
  return (
    <Card className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <img
            src="/placeholder.svg"
            width={400}
            height={225}
            alt="News Article"
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                Technology
              </div>
              <div className="text-xs text-muted-foreground">April 15, 2024</div>
            </div>
            <h3 className="text-lg font-bold mb-2">The Future of Artificial Intelligence</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              Explore the latest advancements in AI technology and its potential impact on our lives. From machine
              learning to natural language processing, this article delves into the cutting-edge developments shaping
              the future.
            </p>
          </CardContent>
        </Card>
  )
}
