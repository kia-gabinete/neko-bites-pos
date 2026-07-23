import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Home from "../../pages/Home/Home";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "var(--color-background)",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar />

        <main
          style={{
            padding: "30px",
            flex: 1,
          }}
        >
          <Home />
        </main>
      </div>
    </div>
  );
};

export default Layout;