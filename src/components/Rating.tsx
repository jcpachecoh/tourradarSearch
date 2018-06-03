import * as React from 'react';

interface RatingProps {
    stars: number;
}

export class Rating extends React.Component<RatingProps, {}> {
    public render() {
        let stars = [];
        for (let i = 0; i < this.props.stars; i++) {
            stars.push(
                <label className="star">
                    ★
            </label>);
        }
        return (
            <div className="star-rating">
                <h2>Rating</h2>
                {stars}
            </div>
        );
    }
}