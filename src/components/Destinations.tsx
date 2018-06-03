import * as React from 'react';

interface DestinationsProps {
    destinations: string[];
}

export class Destinations extends React.Component<DestinationsProps, {}> {
    constructor(props: DestinationsProps) {
        super(props);
    }

    public render() {
        return (
            <ul className="destinations-list">
                {this.props.destinations &&
                    this.props.destinations.map((item, index) => {
                        return <li key="index">{item}</li>;
                    })
                }
            </ul>
        );
    }
}
