import React from "react";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function PeopleDetails(props) {
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<Media className="mt-5">
				{props.data.map((each, i) => {
					if (i == intId) {
						return (
							<div key={i}>
								<Row>
									<Col>
										<img
											width={400}
											height={300}
											className="align-self-center mr-3"
											src="https://www.swapi.tech/api/people/1"
											alt="Generic placeholder"
										/>
									</Col>
									<Col>
										<Media.Body className="text-center">
											<h5>{each.name}</h5>
											<p>
												During the Clone Wars, a coup orchestrated by Death Watch topples the
												pacifist regime of the New Mandalorians and returns the armored warrior
												culture to a position of power over the isolated world. What the average
												Mandalorian citizen does not realize, however, is that the takeover is
												in truth masterminded by a secret syndicate of criminals the Shadow
												Collective led by Maul. Mauls loyal Mandalorians modify their armor to
												reflect allegiance to the Dark Lord. These super commandos wear armor of
												red and black, and some even fashion horns atop their helmets, to better
												resemble their Nightbrother leader. During the Siege of Mandalore, Gar
												Saxon leads the elite fighting force.
											</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Name</th>
											<th>Birth Year</th>
											<th>Gender</th>
											<th>Heigth</th>
											<th>Skin Color</th>
											<th>Eye Color</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{each.name}</td>
											<td>{each.birth_year}</td>
											<td>{each.gender}</td>
											<td>{each.height}</td>
											<td>{each.skin_color}</td>
											<td>{each.eye_color}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="dark" onClick={() => goBack()}>
									Go Back
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</Container>
	);
}

PeopleDetails.propTypes = {
	data: PropTypes.any
};
