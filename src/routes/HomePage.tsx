import { NavLink, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <h1>Välkommen till Monster UI</h1>
      <p>Här kan du som administratör göra följande:</p>
      <button className="btn all-monsters">
        <NavLink key={"see-all-monsters"} to={"/allamonster"}>
          Se alla monster
        </NavLink>
      </button>
      <button className="btn search-monster">
        <NavLink key={"searc-monster"} to={"/sökmonster"}>
          Söka på ett specifikt monster
        </NavLink>
      </button>
      <button className="btn add-monster">
        <NavLink key={"add-monster"} to={"/läggtillmonster"}>
          Lägga till ett monsterkort
        </NavLink>
      </button>
      <button className="btn update-monster">
        <NavLink key={"update-monster"} to={"/uppdateramonster"}>
          Ändra info i ett monsterkort
        </NavLink>
      </button>
      <button className="btn delete-monster">
        <NavLink key={"delete-monster"} to={"/deletemonster"}>
          Radera ett monsterkort
        </NavLink>
      </button>
      <Outlet />
    </div>
  );
}

export default HomePage;
