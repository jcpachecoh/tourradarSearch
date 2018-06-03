import * as React from 'react';
import { Table } from 'react-bootstrap';
import * as _ from 'lodash';
import { Destinations } from './Destinations';

interface TourContentProps {
    destinations: string[];
    age_from: number;
    age_to: number;
    country: string;
    operator: string;
}

export class TourContent extends React.Component<TourContentProps, {}> {
    constructor(props: TourContentProps) {
        super(props);
    }

    public render() {
        return (
            <Table striped={true} bordered={true} condensed={true} hover={true}>
                <tbody>
                    <tr>
                        <td>DESTINATIONS:</td>
                        <td><Destinations destinations={this.props.destinations} /></td>
                    </tr>
                    <tr>
                        <td>STARTS/END:</td>
                        <td>{_.first(this.props.destinations)} / {_.last(this.props.destinations)}</td>
                    </tr>
                    <tr>
                        <td>AGE RANGE:</td>
                        <td>{this.props.age_from} to {this.props.age_to} year old</td>
                    </tr>
                    <tr>
                        <td>COUNTRY:</td>
                        <td>{this.props.country}</td>
                    </tr>
                    <tr>
                        <td>OPERATOR:</td>
                        <td>{this.props.operator}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

}