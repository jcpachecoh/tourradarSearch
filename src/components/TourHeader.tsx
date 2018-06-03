import * as React from 'react';

interface TourHeaderProps {
    country: string;
    description: string;
}

export class TourHeader extends React.Component<TourHeaderProps, {}> {
    constructor(props: TourHeaderProps) {
        super(props);
    }

    public render() {
        return (
            <div className="tour-header">
                <h1>{this.props.country}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}