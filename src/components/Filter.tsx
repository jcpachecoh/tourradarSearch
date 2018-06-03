import * as React from 'react';
import { Form, FormControl, ControlLabel } from 'react-bootstrap';

export interface FilterProps {
    sortDataBy: Function;
    sortCriteria: string;
}

export class Filter extends React.Component<FilterProps, {}> {
    constructor(props: FilterProps) {
        super(props);
    }

    public render() {
        return (
            <Form inline={true}>
                <ControlLabel>Sort By </ControlLabel>
                <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={(e: any) => this.props.sortDataBy(e.target.value)}
                    value={this.props.sortCriteria}
                >
                    <option value="0">Lowest price first</option>
                    <option value="1">Highest price first</option>
                    <option value="2">Longest tour first</option>
                    <option value="3">Shortest tour first</option>
                </FormControl>
            </Form>
        );
    }
}