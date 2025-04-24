//* TS
import { ImageDataType } from "./App.types";

type Props = {
  topic: string;
  page: number;
};

type Result = {
  totalPages: number;
  results: ImageDataType[];
};

//* Axios
// https://api.unsplash.com/
import axios from "axios";

export const FetchImages = async ({ topic, page }: Props): Promise<Result> => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=V9s52oULpu8WRWv8K7pVDQOWQZRSeMxiEbTDfW1pjiw&query=${topic}&page=${page}&per_page=9&orientation=landscape`
  );

  const data: Result = {
    totalPages: response.data.total_pages,
    results: response.data.results,
  };

  return data;
};
