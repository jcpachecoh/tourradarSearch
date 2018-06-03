import * as React from 'react';

export interface ImageLoaderProps {
    tourImage: string;
    tourName: string;
    mapImage: string;
}

export class ImageLoader extends React.Component<ImageLoaderProps, {}> {
    constructor(props: ImageLoaderProps) {
        super(props);
    }

    public render() {
        return (
            <div className="tour-images">
                <img src={this.props.tourImage} alt={this.props.tourName} />
                <img src={this.props.mapImage} alt={this.props.mapImage} />
            </div>
        );
    }
}