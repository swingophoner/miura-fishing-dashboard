export default async function handler(req, res) {
  try {
    // 三浦海岸・野比海岸に最も近い観測点：横須賀（気象庁）
    const stationCode = "46106"; // 横須賀

    // 気象庁 海洋観測データ（JSON）
    const url = `https://www.jma.go.jp/bosai/amedas/data/point/${stationCode}.json`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("JMA fetch failed");
    }

    const data = await response.json();

    res.status(200).json({
      message: "Data fetched",
      raw: data
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
