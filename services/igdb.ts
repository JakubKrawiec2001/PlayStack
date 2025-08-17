"use server";

import { IgdbApiRequestType, IgdbFiltersType } from "@/types/igdb.type";

const buildBody = (q: IgdbFiltersType = {}) => {
  const parts: string[] = [];
  parts.push("fields *;");
  if (q.search) parts.push(`search "${q.search}";`);
  if (q.where) parts.push(`where ${q.where};`);
  if (q.sort) parts.push(`sort ${q.sort};`);
  if (q.limit) parts.push(`limit ${q.limit};`);
  return parts.join(" ");
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
  try {
    const response = await fetch(`${process.env.IGDB_BASE_URL}${path}`, {
      method: method,
      headers: headers,
      body: buildBody(filters),
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
