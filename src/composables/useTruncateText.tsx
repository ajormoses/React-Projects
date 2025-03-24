import { useCallback } from "react";

const useTruncateText = () => {
  const truncateText = useCallback((value: string, limit: number): string => {
    return value?.length > limit ? value.substring(0, limit) + "..." : value;
  }, []);

  return { truncateText };
};

export default useTruncateText;
