import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ExternalNewsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url } = location.state || {};

  useEffect(() => {
    if (url) {
      window.open(url);
    }
    const previousPage = sessionStorage.getItem("previousPage");
    if (previousPage) {
      navigate(previousPage);
    } else {
      navigate("/");
    }
  }, [url, navigate]);

  return <div>Redirecting...</div>;
}
