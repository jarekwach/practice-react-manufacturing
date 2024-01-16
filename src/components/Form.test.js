import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

jest.mock('../getUserRepos');

describe('Form', () => {
	it('should render the form with an input and submit button', () => {
		render(<Form />);

		expect(
			screen.getByLabelText(/Sprawdź repozytoria użytkownika/i)
		).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/GitHub login/i)).toBeInTheDocument();
		expect(screen.getByText(/Wyślij/i)).toBeInTheDocument();
	});
});
