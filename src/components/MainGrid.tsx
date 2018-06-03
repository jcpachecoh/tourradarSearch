import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Tour } from '../models/tour';
import { ImageLoader } from './ImageLoader';
import { TourHeader } from './TourHeader';
import { TourContent } from './TourContent';
import { Pricing } from './Pricing';
import { TourDays } from './TourDays';
import { Rating } from './Rating';
import DropdownFilter from '../containers/DropdownFilter';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export interface MainGridProps {
    setToursData: Function;
    tours: Tour[];
}

interface MainGridState {
    loading: boolean;
}

export class MainGrid extends React.Component<MainGridProps, MainGridState> {
    constructor(props: MainGridProps) {
        super(props);
        this.state = {
            loading: false
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        this.setState({
            loading: true
        });
        fetch('https://api.myjson.com/bins/18x6yt')
            .then((resp: any) => {
                if (!resp.ok) {
                    console.log(resp);
                } else {
                    return resp.json();
                }
            })
            .then((data: any) => {
                this.props.setToursData(data);
                this.setState({
                    loading: false
                });
            });
    }

    public render() {
        return (
            <Grid className="main-grid">

                <Segment>
                    <Dimmer active={this.state.loading} inverted={false}>
                        <Loader>
                            <div className="loader">
                                <h1>Loading...</h1>
                            </div>
                        </Loader>
                    </Dimmer>
                    <Row className="dropdown-filter">
                        <DropdownFilter />
                    </Row>
                    {this.props.tours &&
                        this.props.tours.map((item, index) => {
                            return <Row className="show-grid" key={index}>
                                <Col xs={4} >
                                    <ImageLoader
                                        tourImage={item.tour_image}
                                        tourName={item.tour_name}
                                        mapImage={item.map_image}
                                    />
                                </Col>
                                <Col xs={4} >
                                    <TourHeader country={item.country} description={item.description} />
                                    <TourContent
                                        destinations={item.destinations}
                                        age_from={item.age_from}
                                        age_to={item.age_to}
                                        country={item.country}
                                        operator={item.tour_operator}
                                    />
                                </Col>
                                <Col xs={4} className="right-side-elements">
                                    <Pricing
                                        currency={item.currency}
                                        price={item.price}
                                        saving={item.saving}
                                    />
                                    <TourDays tourDays={item.length} />
                                    <Rating stars={item.rating} />
                                </Col>
                            </Row>;
                        })
                    }
                </Segment>
            </Grid>
        );
    }
}