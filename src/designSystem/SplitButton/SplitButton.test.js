import { render, screen } from '@testing-library/react'
import SplitButton from './'

/*
    Example of a simple unit test for React component.

    Since this is a view, we use react-testing-library to scope our tests
    only to those things visible to the user.
*/
describe('SplitButton', () => {
    let props

    beforeEach(() => {
        props = {
            initialValue: 1,
            options: [{ id: 1, name: 'Test' }],
            onClick: jest.fn(),
            itemRenderer: jest.fn(),
        }
    })

    test('should render a button', () => {
        render(<SplitButton {...props} />)

        expect(screen.getByText(/Test/i)).toBeInTheDocument()
    });
})