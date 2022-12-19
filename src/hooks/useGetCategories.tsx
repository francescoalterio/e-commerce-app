import React, { useState, useEffect } from "react";
import { getCategories } from "../Firebase/services/getCategories";
import { Category } from "../types/Category";

export function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function getData() {
    const data = await getCategories();
    setCategories(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return { categories };
}
