export default async function handler(req, res) {
  try {
    const url =
      "https://aws.amazon.com/api/dirs/items/search?item.locale=ja_JP&item.directoryId=free-tier&size=300";

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json",
      },
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "proxy failed", detail: err.message });
  }
}
