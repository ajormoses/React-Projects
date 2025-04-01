import { useCallback } from "react";

const useCurrencyFormatter = () => {
  const formatCurrency = useCallback(
    (amount: number, currency: "USD" | "NGN" | "EUR" | "GBP" = "USD") => {
      if (isNaN(amount)) return "";

      const symbols = {
        USD: "$",
        NGN: "\u20A6", // Naira symbol
        EUR: "\u20AC", // Euro symbol
        GBP: "\u00A3", // Pound symbol
      };

      const symbol = symbols[currency] || "$";
      return `${symbol}${Math.floor(amount).toLocaleString()}`;
    },
    []
  );

  return { formatCurrency };
};

export default useCurrencyFormatter;
