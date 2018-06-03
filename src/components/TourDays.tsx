import * as React from 'react';

interface TourDaysProps {
    tourDays: number;
}

export class TourDays extends React.Component<TourDaysProps, {}> {
    public render() {
        return (
            <div className="tour-days">
                <h3>{this.props.tourDays} Days</h3>
            </div>
        );
    }
}