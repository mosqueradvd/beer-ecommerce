import stockData from "../../../stock-price";

export default function handler(req, res) {
  const { code } = req.query;

  if (!stockData[code]) {
    res.status(404).json({ error: "Not Found" });
    return;
  }

  const { stock, price } = stockData[code];
  const priceInDollars = (price / 100).toFixed(2);

  res.status(200).json({ stock, price: priceInDollars });
}
