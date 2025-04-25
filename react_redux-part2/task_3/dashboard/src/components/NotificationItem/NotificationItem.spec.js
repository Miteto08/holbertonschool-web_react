import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    const markAsRead = jest.fn();

    it('Should render a default notification', () => {
        render(
            <NotificationItem
                type="default"
                value="New course available"
                markAsRead={markAsRead}
                id={1}
            />
        );
        const listItem = screen.getByRole('listitem');
        expect(listItem).toHaveTextContent('New course available');
        expect(listItem).toHaveAttribute('data-notification-type', 'default');
        expect(listItem).toHaveStyle('color: blue');
    });

    it('Should render an urgent notification', () => {
        render(
            <NotificationItem
                type="urgent"
                value="Urgent requirement"
                markAsRead={markAsRead}
                id={3}
            />
        );
        const listItem = screen.getByRole('listitem');
        expect(listItem).toHaveTextContent('Urgent requirement');
        expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
        expect(listItem).toHaveStyle('color: red');
    });

    it('Should call markAsRead when clicked', () => {
        render(
            <NotificationItem
                type="default"
                value="New course available"
                markAsRead={markAsRead}
                id={1}
            />
        );
        const listItem = screen.getByRole('listitem');
        fireEvent.click(listItem);
        expect(markAsRead).toHaveBeenCalledWith(1);
    });
});
