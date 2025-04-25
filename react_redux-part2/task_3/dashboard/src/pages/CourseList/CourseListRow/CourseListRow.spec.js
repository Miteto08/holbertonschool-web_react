import { render, screen, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('Should render a header row with one cell', () => {
        render(
            <table>
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                </thead>
            </table>
        );
        const headerCell = screen.getByRole('columnheader', { name: 'Available courses' });
        expect(headerCell).toHaveAttribute('colSpan', '2');
    });

    it('Should render a header row with two cells', () => {
        render(
            <table>
                <thead>
                    <CourseListRow
                        isHeader={true}
                        textFirstCell="Course name"
                        textSecondCell="Credit"
                    />
                </thead>
            </table>
        );
        const headerCell1 = screen.getByRole('columnheader', { name: 'Course name' });
        const headerCell2 = screen.getByRole('columnheader', { name: 'Credit' });
        expect(headerCell1).toBeInTheDocument();
        expect(headerCell2).toBeInTheDocument();
    });

    it('Should render a regular row', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={false}
                        textFirstCell="ES6"
                        textSecondCell="60"
                    />
                </tbody>
            </table>
        );
        const cell1 = screen.getByRole('cell', { name: 'ES6' });
        const cell2 = screen.getByRole('cell', { name: '60' });
        expect(cell1).toBeInTheDocument();
        expect(cell2).toBeInTheDocument();
    });

    it('Should not render checkbox if id is null', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={false}
                        textFirstCell="ES6"
                        textSecondCell="60"
                    />
                </tbody>
            </table>
        );
        expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });

    it('Should render checkbox if id is provided', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={false}
                        textFirstCell="ES6"
                        textSecondCell="60"
                        id={1}
                    />
                </tbody>
            </table>
        );
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('Should call onChangeRow when checkbox is checked', () => {
        const mockOnChangeRow = jest.fn();
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={false}
                        textFirstCell="ES6"
                        textSecondCell="60"
                        id={1}
                        onChangeRow={mockOnChangeRow}
                        isSelected={false}
                    />
                </tbody>
            </table>
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnChangeRow).toHaveBeenCalledWith(1, true);
    });

    it('Should call onChangeRow when checkbox is unchecked', () => {
        const mockOnChangeRow = jest.fn();
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={false}
                        textFirstCell="ES6"
                        textSecondCell="60"
                        id={1}
                        onChangeRow={mockOnChangeRow}
                        isSelected={true}
                    />
                </tbody>
            </table>
        );

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
        fireEvent.click(checkbox);
        expect(mockOnChangeRow).toHaveBeenCalledWith(1, false);
    });

    it('Should render checkbox with correct checked state', () => {
        render(
            <table>
                <tbody>
                    <CourseListRow
                        isHeader={false}
                        textFirstCell="ES6"
                        textSecondCell="60"
                        id={1}
                        isSelected={true}
                    />
                </tbody>
            </table>
        );

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
});
