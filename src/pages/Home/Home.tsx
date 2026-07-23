const cards = [
  {
    titulo: "Productos",
    valor: "248",
  },
  {
    titulo: "Stock Bajo",
    valor: "12",
  },
  {
    titulo: "Por vencer",
    valor: "6",
  },
  {
    titulo: "Ventas Hoy",
    valor: "$32.500",
  },
];

const Home = () => {
  return (
    <div>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        ¡Bienvenida a Neko Bites POS! 💜
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.titulo}
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "18px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h3
              style={{
                marginBottom: "10px",
                color: "var(--color-text-light)",
              }}
            >
              {card.titulo}
            </h3>

            <h1>{card.valor}</h1>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "35px",
          background: "#ffffff",
          borderRadius: "18px",
          padding: "25px",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <h2>📋 Actividad reciente</h2>

        <ul
          style={{
            marginTop: "15px",
            lineHeight: "2",
          }}
        >
          <li>Producto agregado: Pocky Cookies & Cream</li>
          <li>Venta registrada: KitKat Matcha</li>
          <li>Stock bajo: Pringles BBQ</li>
          <li>Vence pronto: Ramune Original</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;