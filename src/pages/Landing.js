import main from "../assets/images/main2.svg";
import Wraper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<Wraper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						repellendus voluptatibus cum similique magni odio? Vero ipsum odio
						in reprehenderit doloremque, reiciendis corporis aliquid porro
						maiores ratione quis quibusdam quos fugit? Dicta qui iusto
						voluptatem dolores vitae magni quis ipsam.
					</p>
					<Link to="/register" className="btn btn-hero">
						Login/Register
					</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wraper>
	);
};

export default Landing;
