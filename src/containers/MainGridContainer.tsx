import { connect, Dispatch } from 'react-redux';
import { MainGridProps, MainGrid } from '../components/MainGrid';
import { setToursData, TourActions } from '../actions/index';
import { Tour } from '../models/tour';

export type ConnectedStateProps = Pick<MainGridProps, 'tours'>;

export function mapStateToProps({ toursReducer: { tours } }: any): ConnectedStateProps {
    return {
        tours
    };
}

export type ConnectedDispatchProps = Pick<MainGridProps, 'setToursData'>;
export function mapDispatchToProps(dispatch: Dispatch<TourActions>): ConnectedDispatchProps {
    return { setToursData: (experiences: Tour[]) => dispatch(setToursData(experiences)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGrid);