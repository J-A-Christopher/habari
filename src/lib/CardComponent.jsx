import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";
import { useGetNewsQuery } from "../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import ShowAlertComponent from "./ShowAlertComponent";

import noImage from "../img/noImage.jpg";

export default function CardComponent({ catData }) {
  const {
    data: news,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNewsQuery(catData || "general");
  const navigate = useNavigate();
  const [showInvalidDialog, setShowInvalidDialog] = useState(false);

  useEffect(() => {
    if (isSuccess && news && news.articles && news.articles.length === 0) {
      setShowInvalidDialog(true);
    } else {
      setShowInvalidDialog(false);
    }
  }, [isSuccess, news]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <Card className="flex items-center justify-center h-48 bg-red-50">
        <div className="text-center">
          <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
          <p className="text-sm text-red-600">Error: {error.message}</p>
        </div>
      </Card>
    );
  }



  if (isSuccess && news) {
    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    const executeOnClick = (newsItemUrl) => {
      navigate("/external-news", { state: { url: newsItemUrl } });
    };

    return (
      <>
        {showInvalidDialog && (
          <ShowAlertComponent
            isOpen={showInvalidDialog}
            onClose={() => setShowInvalidDialog(false)}
          />
        )}
        {news.articles.map((newsItem) => (
          <Card
            key={newsItem.title}
            className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            onClick={() => executeOnClick(newsItem.url)}
          >
            <img
              src={newsItem.urlToImage || noImage}
              width={600}
              height={337}
              alt={newsItem.title || "News Article"}
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {"Business"}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(newsItem.publishedAt) || "April 15, 2024"}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">
                {newsItem.title || "Title not Included"}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {newsItem.description || "No description to show !"}
              </p>
            </CardContent>
          </Card>
        ))}
      </>
    );
  }
  return null;
}
