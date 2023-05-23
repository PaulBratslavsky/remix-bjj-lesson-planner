import qs from "qs";

export async function fetchStrapiData(path: string, urlParamsObject = {}, options = {}) {
  const STRAPI_PUBLIC_URL = process.env.STRAPI_PUBLIC_URL;
  const STRAPI_PUBLIC_TOKEN = process.env.STRAPI_PUBLIC_TOKEN;
  
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_PUBLIC_TOKEN}`,
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = 
    `${STRAPI_PUBLIC_URL}/api${path}${queryString ? `?${queryString}` : ""}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occurred please try again`);
  }
  const data = await response.json();
  return data;
}