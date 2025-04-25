import { render, screen, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    it('Should render a header row with one cell', () => {
        render(
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
        );
        const headerCell = screen.getByRole('columnheader', { name: 'Available courses' });
        expect(headerCell).toHaveAttribute('colSpan', '2');
    });

    it('Should render a header row with two cells', () => {
        render(
            <CourseListRow
                isHeader={true}
                textFirstCell="Course name"
                textSecondCell="Credit"
            />
        );
        const headerCell1 = screen.getByRole('columnheader', { name: 'Course name' });
        const headerCell2 = screen.getByRole('columnheader', { name: 'Credit' });
        expect(headerCell1).toBeInTheDocument();
        expect(headerCell2).toBeInTheDocument();
    });

    it('Should render a regular row', () => {
        render(
            <CourseListRow
                isHeader={false}
                textFirstCell="ES6"
                textSecondCell="60"
            />
        );
        const cell1 = screen.getByRole('cell', { name: 'ES6' });
        const cell2 = screen.getByRole('cell', { name: '60' });
        expect(cell1).toBeInTheDocument();
        expect(cell2).toBeInTheDocument();
    });

    it('Should not render checkbox if id is null', () => {
        render(
            <CourseListRow
                isHeader={false}
                textFirstCell="ES6"
                textSecondCell="60"
            />
        );
        expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
    });

    it('Should render checkbox if id is provided', () => {
        render(
            <CourseListRow
                isHeader={false}
                textFirstCell="ES6"
                textSecondCell="60"
                id={1}
            />
        );
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('Should call onChangeRow when checkbox is checked', () => {
        const mockOnChangeRow = jest.fn();
        render(
            <CourseListRow
                isHeader={false}
                textFirstCell="ES6"
                textSecondCell="60"
                id={1}
                onChangeRow={mockOnChangeRow}
                isSelected={false}
            />
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnChangeRow).toHaveBeenCalledWith(1, true);
    });

    it('Should call onChangeRow when checkbox is unchecked', () => {
        const mockOnChangeRow = jest.fn();
        render(
            <CourseListRow
                isHeader={false}
                textFirstCell="ES6"
                textSecondCell="60"
                id={1}
                onChangeRow={mockOnChangeRow}
                isSelected={true}
            />
        );

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
        fireEvent.click(checkbox);
        expect(mockOnChangeRow).toHaveBeenCalledWith(1, false);
    });

    it('Should render checkbox with correct checked state', () => {
        render(
            <CourseListRow
                isHeader={false}
                textFirstCell="ES6"
                textSecondCell="60"
                id={1}
                isSelected={true}
            />
        );

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });
});
