import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import noImage from "../img/noImage.jpg";

export default function FurthestDownComp() {
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const readableDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <img
              src={noImage}
              width={64}
              height={64}
              alt="Trending News"
              className="rounded-lg w-16 h-16 object-cover"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-medium">
                The Future of Artificial Intelligence
              </h4>
              <p className="text-xs text-muted-foreground">{readableDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              src={noImage}
              width={64}
              height={64}
              alt="Trending News"
              className="rounded-lg w-16 h-16 object-cover"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-medium">
                Breakthrough in Renewable Energy Storage
              </h4>
              <p className="text-xs text-muted-foreground">{readableDate}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              src={noImage}
              width={64}
              height={64}
              alt="Trending News"
              className="rounded-lg w-16 h-16 object-cover"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-medium">
                Advancements in Telemedicine: Improving Healthcare Access
              </h4>
              <p className="text-xs text-muted-foreground">{readableDate}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
