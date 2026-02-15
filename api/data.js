export default async function handler(req, res) {
  try {
    // 気象庁 潮位（例：横須賀）
    const tideResponse = await fetch(
      "https://www.jma.go.jp/bosai/tide/data/forecast/1401.json"
    );

    const tideData = await tideResponse.json();

    // 気象庁 波浪（例データ）
    const waveResponse = await fetch(
      "https://www.jma.go.jp/bosai/wave/data/forecast/1401.json"
    );

    const waveData = await waveResponse.json();

    res.status(200).json({
      tide: tideData,
      wave: waveData,
    });
  } catch (error) {
    res.status(500).json({ error: "Data fetch failed" });
  }
}
