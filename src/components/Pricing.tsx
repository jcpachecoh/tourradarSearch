import * as React from 'react';
import { formatPricing } from '../scripts/index';

interface PricingProps {
    currency: string;
    price: number;
    saving: number;
}

export class Pricing extends React.Component<PricingProps, {}> {
    constructor(props: PricingProps) {
        super(props);
    }

    public render() {
        return (
            <div className="pricing">
                <div className="saving">
                    <h3>Our Saving</h3>
                    <div>{this.props.saving} {this.props.currency}</div>
                </div>

                <div className="price">
                    <h3>From</h3>
                    <div>{formatPricing(this.props.price)} {this.props.currency}</div>
                </div>
            </div>
        );
    }
}