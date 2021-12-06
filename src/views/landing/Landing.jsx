import { Link } from "react-router-dom";
import gameOne_volcano from "../../assets/images/volcano/volcano.gif";

const Landing = () => {
  return (
    <div className="landing">
      <div className="navbar-spacing"></div>

      {/* game one */}
      <div className="gameOne_volcano">
        <Link to="/volcano" className="game ">
          <span>Volcano</span>
          <img src={gameOne_volcano} alt="volcano game" />
        </Link>
      </div>

      {/* game two */}

      <div className="gameTwo_">
        <Link to="" className="game ">
          <span>Game Two</span>
          <img src="" alt="" />
        </Link>
      </div>

      {/* game three */}
      <div className="gameThree_">
        <Link to="" className="game ">
          <span>Game Three</span>
          <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
