import { Client, Account } from "appwrite";

export const client = new Client();

const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
const APPWRITE_ENDPOINT = process.env.APPWRITE_ENDPOINT;

if (!APPWRITE_PROJECT_ID || !APPWRITE_ENDPOINT) {
  throw new Error(
    "Appwrite project ID and endpoint must be set in environment variables."
  );
}

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export { ID } from "appwrite";
