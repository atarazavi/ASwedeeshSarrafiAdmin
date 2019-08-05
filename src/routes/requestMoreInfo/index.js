import React, { Component } from 'react';

import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Col,
} from 'reactstrap';

import FormGroupmaterial from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
// intl messages
import IntlMessages from 'Util/IntlMessages';
import { NotificationManager } from 'react-notifications';
// app config
import AppConfig from 'Constants/AppConfig';

export default class RequestMoreInfo extends Component {
	state = {
        RequestID: this.props.location.state.RequestID,
        RequestTitle: 'vaarize maahaaneye Amme!',
        RequestAccount: 'Amme - Pasargad',
        RequestAmount: 1000,
        RequestCurrency: 'Euro'
	}

	componentDidMount = () => {
    }
    handleChange = () => {
    }
	handleChangeRadio = (e, key) => {
		this.setState({ [key]: e.target.value });
	}
    handleSubmit = () => {
    }
	render() {
		return (
			<div className="formelements-wrapper">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-xl-6">
						<RctCollapsibleCard heading={"More about / Edit : " + this.props.location.state.RequestTitle}>
							<Form>
								<FormGroup row>
									<Label for="RequestTitle" sm={4}>Request Title</Label>
									<Col sm={8}>
										{this.state.RequestTitle}
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="RequestAccount" sm={4}>Request Destination Account</Label>
									<Col sm={8}>
										<Input value={this.state.RequestAccount} type="text" name="RequestAccount" id="RequestAccount" onChange={this.handleChange} placeholder="Request Account" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="RequestAmount" sm={4}>Request Amount of Money</Label>
									<Col sm={8}>
										<Input value={this.state.RequestAmount} type="text" name="RequestAmount" id="RequestAmount" onChange={this.handleChange} placeholder="Request Amount" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="RequestCurrency" sm={4}>Request Currency</Label>
									<Col sm={8}>
                                        <FormGroupmaterial className="mb-10 mr-sm-10 mb-sm-0">
                                            <RadioGroup row aria-label="RequestCurrency" name="RequestCurrency" value={this.state.RequestCurrency} onChange={(e) => this.handleChangeRadio(e, 'RequestCurrency')} >
                                                <FormControlLabel value="Euro" control={<Radio />} label="Euro" />
                                                <FormControlLabel value="USDollars" control={<Radio />} label="Dollars" />
                                                <FormControlLabel value="Koron" control={<Radio />} label="Koron" />
                                            </RadioGroup>
                                        </FormGroupmaterial>									
									</Col>
								</FormGroup>
                                <br></br>
								<FormGroup check className="p-0">
									<Button
										onClick={this.handleSubmit}
										variant="raised"
										color="primary"
										className="text-white mr-10 mb-10 btn-xs"
									>
										<IntlMessages id="Submit" />
									</Button>
									<Button
										onClick={() => this.props.history.push('requestsList')}
										variant="raised"
										color="secondary"
										className="text-white btn-xs mb-10"
									>
										<IntlMessages id="Return" />
									</Button>
								</FormGroup>
							</Form>
						</RctCollapsibleCard>
					</div>
				</div>
			</div>
		);
	}
}
