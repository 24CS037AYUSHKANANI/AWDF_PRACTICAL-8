const data = Array.from({ length: 120 }, (_, i) => ({
  id: i + 1,
  name: `Project ${i + 1}`,
  note: "Project information included in the initial bundle."
}));

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      {data.slice(0, 12).map(item => (
        <div className="card" key={item.id}><strong>{item.name}</strong><p>{item.note}</p></div>
      ))}
    </section>
  );
}
