/**
 * Pricing
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// components
import PricingBlockV1 from 'Components/Pricing/PricingBlockV1';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';


export default class PricingPage extends Component {

	state = {
		monthlyPlan: true,
		businessPlan: 30,
		enterprisePlan: 59
	}

	// on plan change
	onPlanChange(isMonthly) {
		this.setState({ monthlyPlan: !isMonthly });
		if (!isMonthly) {
			this.setState({ businessPlan: 30, enterprisePlan: 59 });
		} else {
			this.setState({ businessPlan: 35, enterprisePlan: 70 });
		}
	}

	render() {
		return (
			<div className="pricing-wrapper">
				<Helmet>
					<title>Today's Rates</title>
					<meta name="description" content="Reactify Pricing" />
				</Helmet>
				<PageTitleBar title={<IntlMessages id="widgets.pricing" />} match={this.props.match} />
				<div className="pricing-top mb-50">
					<div className="row">
						<div className="col-sm-12 col-md-9 col-lg-7 mx-auto text-center">
							<h2 className="mb-20">Set Today's Rates</h2>
						</div>
					</div>
				</div>
				<div className="price-list">
					<div className="row row-eq-height">
						<PricingBlockV1
							planType="free"
							type="USDollar"
							color="primary"
							description="Secure file sharing and collaboration. Ideal for small teams."
							buttonText="widgets.startToBasic"
							price="widgets.free"
							users={1}
							features={[
								'100 GB secure storage',
								'2 GB file upload',
								'Minimum 3 users, max 10 users'
							]}
						/>
						<PricingBlockV1
							planType="premium"
							type="Euro"
							color="warning"
							description="More power & personalization"
							buttonText="widgets.upgradeToPro"
							price={this.state.businessPlan}
							users={1}
							features={[
								'Unlimited storage',
								'5 GB file upload',
								'Minimum 3 users, max 10 users'
							]}
						/>
						<PricingBlockV1
							planType="premium"
							type="Sweedish Korona"
							color="info"
							description="More power & personalization"
							buttonText="widgets.upgradeToAdvance"
							price={this.state.enterprisePlan}
							users={1}
							features={[
								'Unlimited storage',
								'20 GB file upload',
								'Minimum 13 users, max 20 users'
							]}
						/>
					</div>
					<div className="text-center py-40">
						<h2 className="mb-0"><IntlMessages id="widgets.comparePlans" /></h2>
					</div>
                </div>
			</div>
		);
	}
}
