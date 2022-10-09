import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { Login } from "../src/pages/Login";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";

const queryClient = new QueryClient();

const onSubmit = jest.fn();

beforeEach(() => {
	render(
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Login />
			</QueryClientProvider>
		</BrowserRouter>
	);
});

afterEach(() => {
	onSubmit.mockReset();
});

test("should show a form with valid inputs and login button", () => {
	expect(screen.getByLabelText("Email")).toBeInTheDocument();
	expect(screen.getByLabelText("Password")).toBeInTheDocument();
	expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
});

test("should show the user's entered username", async () => {
	const username = "codegirl";
	userEvent.type(screen.getByLabelText("Email"), username);
	await waitFor(() => {
		expect(screen.getByLabelText("Email")).toHaveValue("codegirl");
	});
});
