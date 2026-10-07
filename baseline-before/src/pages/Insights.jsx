const observations = Array.from({ length: 80 }, (_, i) => `Performance observation ${i + 1}: route code is included before navigation.`);

export default function Insights() {
  return <section><h1>Insights</h1><div className="card">{observations.slice(0, 20).map(item => <p key={item}>{item}</p>)}</div></section>;
}
