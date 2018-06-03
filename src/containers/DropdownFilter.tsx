import { connect, Dispatch } from 'react-redux';
import { Filter, FilterProps } from '../components/Filter';
import { TourActions, sortDataBy } from '../actions/index';

export type ConnectedStateProps = Pick<FilterProps, 'sortCriteria'>;

export function mapStateToProps({ toursReducer: { sortCriteria } }: any): ConnectedStateProps {
    return {
        sortCriteria
    };
}

export type ConnectedDispatchProps = Pick<FilterProps, 'sortDataBy'>;
export function mapDispatchToProps(dispatch: Dispatch<TourActions>): ConnectedDispatchProps {
    return { sortDataBy: (value: string) => dispatch(sortDataBy(value)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);