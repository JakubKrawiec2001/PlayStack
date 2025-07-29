/* TODO:
    - Create igdb config file
    - Example fetch below
*/

export const fetchGameData = async () => {
  try {
    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": `${process.env.IDGB_CLIENT_ID}`,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
      },
      body: "fields *;",
    });

    if (!response) return;

    const data = response.json();

    return data;
  } catch (error) {
    console.log(console.log(error));
  }
};
