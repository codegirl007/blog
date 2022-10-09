import React from "react";
import Typography from "@mui/material/Typography";
import { HBox } from "../styles/customComponents.tsx/HBox";
import photo from "../images/CVfoto.jpg";
import { styled } from "@mui/material/styles";
import { Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

const Styled = {
	Photo: styled("img")({
		width: "auto",
		height: "30rem",
		borderRadius: "0.8rem",
	}),
	InfoContainer: styled("div")({
		width: "100%",
		height: "100%",
		boxShadow: "0rem 1.6rem 4.8rem rgba(0, 0, 0, 0.175)",
		marginLeft: "2rem",
		padding: "3.2rem 3.2rem 8.2rem 3.2rem",
		borderRadius: "0.8rem",
		position: "relative",
	}),
	Image: styled("img")({
		width: "5rem",
		height: "auto",
	}),
	TableCell: styled(TableCell)({
		maxWidth: "18rem",
		fontWeight: "700 !important",
	}),
};

export const About = (): JSX.Element => {
	return (
		<>
			<Typography variant="h1">About</Typography>
			<HBox sx={{ marginTop: "2rem", alignItems: "start" }}>
				<Styled.Photo src={photo} alt="profilePhoto" />
				<Styled.InfoContainer>
					<Table>
						<TableBody>
							<TableRow>
								<Styled.TableCell>Project</Styled.TableCell>
								<TableCell>Single-user Blogging Engine based on Applifting API</TableCell>
							</TableRow>
							<TableRow>
								<Styled.TableCell>Created by</Styled.TableCell>
								<TableCell>Jana Koutníková</TableCell>
							</TableRow>
							<TableRow>
								<Styled.TableCell>Main Technologies</Styled.TableCell>
								<TableCell>React, Typescript, Material UI</TableCell>
							</TableRow>
							<TableRow>
								<Styled.TableCell>State Management for Keeping Credentials</Styled.TableCell>
								<TableCell>Zustand Persist</TableCell>
							</TableRow>
							<TableRow>
								<Styled.TableCell>HTTP Requests</Styled.TableCell>
								<TableCell>Axios and React-query</TableCell>
							</TableRow>
							<TableRow>
								<Styled.TableCell>Helper Libraries</Styled.TableCell>
								<TableCell>React Hook Form, Lodash, Date-fns, Prettier, ESLint</TableCell>
							</TableRow>
							<TableRow>
								<Styled.TableCell>Repository</Styled.TableCell>
								<TableCell>
									<Link target="_blank" href="https://github.com/codegirl007/blog">
										https://github.com/codegirl007/blog
									</Link>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<HBox sx={{ gap: "1rem", position: "absolute", bottom: "1rem", right: "3.2rem" }}>
						<Link target="_blank" href="https://www.linkedin.com/in/jana-koutnikova-codegirl007/">
							<Styled.Image src={linkedin} alt="linkedin" />
						</Link>
						<Link target="_blank" href="https://github.com/codegirl007">
							<Styled.Image src={github} alt="github" />
						</Link>
						<Link target="_blank" href="https://www.facebook.com/jana.koudelkova.7">
							<Styled.Image src={facebook} alt="facebook" />
						</Link>
					</HBox>
				</Styled.InfoContainer>
			</HBox>
		</>
	);
};
