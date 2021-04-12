import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Container>
			<Carousel>
				<Carousel.Item>
					<Link to="/characters">
						<img
							className="d-block w-100"
							src="https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-s2-single-hero-b-desktop_28751c8d.jpeg?region=0,0,1200,509"
							alt="people"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Characters</h3>
						<p>Find Your Favorites Star Wars Characters</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/planetsView">
						<img
							className="d-block w-100"
							src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=280%2C0%2C720%2C720"
							alt="planets"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Planets</h3>
						<p>Have a Look at The Names of The Planets</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};
