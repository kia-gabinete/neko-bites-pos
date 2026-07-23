const Sidebar = () => {
  const menu = [
    "🏠 Inicio",
    "📦 Inventario",
    "🛒 Ventas",
    "💰 Caja",
    "📊 Reportes",
    "🚨 Alertas",
    "⚙️ Configuración",
  ];

  return (
    <aside
      style={{
        width: "250px",
        background: "#ffffff",
        borderRight: "1px solid var(--color-border)",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2
        style={{
          color: "var(--color-brown)",
          textAlign: "center",
        }}
      >
        🐱 Neko Bites
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {menu.map((item) => (
          <button
            key={item}
            style={{
              background: "var(--color-primary-light)",
              padding: "12px",
              borderRadius: "12px",
              textAlign: "left",
              fontSize: "15px",
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;