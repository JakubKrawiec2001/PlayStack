"use server";

import { IgdbApiRequestType, IgdbFiltersType } from "@/types/igdb.type";

const handleFieldsArray = (f?: IgdbFiltersType | IgdbFiltersType[]) => {
  return Array.isArray(f) ? f.join(",") : f || "*";
};

const headers = {
  Accept: "application/json",
  "Client-ID": `${process.env.IGDB_CLIENT_ID}`,
  Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
};

export async function fetchFromIgdbApi({
  path,
  method = "POST",
  filters,
}: IgdbApiRequestType) {
  const body = "fields " + handleFieldsArray(filters) + ";";

  try {
    const response = await fetch(`${process.env.IGDB_BASE_URL}${path}`, {
      method: method,
      headers: headers,
      body: body,
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching data from IGDB API");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data from IGDB API:", error);
  }
}
