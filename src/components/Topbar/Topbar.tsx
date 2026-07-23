const Topbar = () => {
  return (
    <header
      style={{
        height: "80px",
        background: "#ffffff",
        borderBottom: "1px solid var(--color-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
      }}
    >
      <h2>Panel Principal</h2>

      <div
        style={{
          background: "var(--color-primary-light)",
          padding: "10px 18px",
          borderRadius: "30px",
        }}
      >
        Kia 👋
      </div>
    </header>
  );
};

export default Topbar;