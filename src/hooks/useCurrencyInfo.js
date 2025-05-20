import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/3a55f25f4f749c387a54af08/latest/${currency}`
    );
  }, []);
}
