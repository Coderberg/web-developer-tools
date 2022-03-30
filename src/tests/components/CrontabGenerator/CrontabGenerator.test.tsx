import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import CrontabGenerator
    from "../../../components/CrontabGenerator/CrontabGenerator";
import store from "../../../store/configureStore";

const setup = () => {
    render(<Provider store={store}><CrontabGenerator/></Provider>);
}

describe('<CrontabGenerator/> component', () => {

    it('should render all radio buttons', () => {
        setup();
        [
            'Every Minute',
            'Every 15 Minutes',
            'Every 12 Hours',
            'Even Days',
            'Every Half Month',
            'Every Month',
            'Even Months',
            'Every Half Year',
            'Monday-Friday',
            'Weekend Days',
        ].forEach((item) => {
            expect(screen.getByLabelText(item)).toBeVisible();
        });
    });

    it('should simulate radio button change', () => {
        setup();
        [
            'Odd Minutes',
            'Every 3 Hours',
            'Every 10 Days',
            'Odd Months',
            'Monday-Friday',
        ].forEach((item) => {
            const radioButton = screen.getByLabelText(item);
            expect(radioButton).not.toBeChecked();
            fireEvent.click(radioButton);
            expect(radioButton).toBeChecked();
        });
    });

    it('should generate crontab expression', () => {
        setup();
        [
            'Every 5 Minutes',
            'Odd Hours',
            'Every 5 Days',
            'Every 4 Months',
            'Every Weekday',
        ].forEach((item) => {
            const radioButton = screen.getByLabelText(item);
            fireEvent.click(radioButton);
        });

        const button = screen.getByText('Generate Crontab Line');

        expect(screen.queryByText('Please enter a command.')).not.toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.queryByText('Please enter a command.')).toBeVisible();

        const command = screen.getByLabelText('Command To Execute');
        fireEvent.change(command, {target: {value: 'df -P .'}});
        fireEvent.click(button);
        expect(screen.getByText('*/5 1-23/2 */5 */4 * df -P . >/dev/null 2>&1')).toBeVisible();
    });

    it('should render toast: Invalid Minutes', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Minutes'));
        fireEvent.click(button);
        expect(screen.getByText('Please choose at least one entry in minutes field.')).toBeInTheDocument();
    });

    it('should render toast: Invalid Hours', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Every Minute'));
        fireEvent.click(screen.getByLabelText('Hours'));
        fireEvent.click(button);
        expect(screen.getByText('Please choose at least one entry in hours field.')).toBeInTheDocument();
    });

    it('should render toast: Invalid Days', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Every Hour'));
        fireEvent.click(screen.getByLabelText('Days'));
        fireEvent.click(button);
        expect(screen.getByText('Please choose at least one entry in days field.')).toBeInTheDocument();
    });

    it('should render toast: Invalid Months', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Every Day'));
        fireEvent.click(screen.getByLabelText('Months'));
        fireEvent.click(button);
        expect(screen.getByText('Please choose at least one entry in months field.')).toBeInTheDocument();
    });

    it('should render toast: Invalid Weekday', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Every Month'));
        fireEvent.click(screen.getByLabelText('Weekday'));
        fireEvent.click(button);
        expect(screen.getByText('Please choose at least one entry in weekday field.')).toBeInTheDocument();
    });

    it('should render toast: Invalid Email', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Every Weekday'));
        fireEvent.click(screen.getByLabelText('Send output to Email:'));
        const command = screen.getByLabelText('Command To Execute');
        fireEvent.change(command, {target: {value: 'df -P .'}});
        fireEvent.click(button);
        expect(screen.getByText('Please enter a valid Email address.')).toBeInTheDocument();
    });

    it('should render toast: Invalid Path', () => {
        setup();
        const button = screen.getByText('Generate Crontab Line');
        fireEvent.click(screen.getByLabelText('Save output to file:'));
        const command = screen.getByLabelText('Command To Execute');
        fireEvent.change(command, {target: {value: 'df -P .'}});
        fireEvent.click(button);
        expect(screen.getByText('Please enter a file path for saving output.')).toBeInTheDocument();
    });
});
