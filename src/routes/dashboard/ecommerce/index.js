/**
 * Ecommerce Dashboard
 */

import React, { Component } from 'react'
import { Helmet } from "react-helmet";
// intl messages
import IntlMessages from 'Util/IntlMessages';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import {
	RecentOrdersWidget,
	AreaChartWidget,
} from "Components/Widgets";

// widgets data
import {
	visitorsData,
	salesData,
	ordersData,
} from './data';

export default class EcommerceDashboard extends Component {
	render() {
		const { match } = this.props;
		return (
			<div className="ecom-dashboard-wrapper">
				<Helmet>
					<title>Admin</title>
					<meta name="description" content="Reactify Ecommerce Dashboard" />
				</Helmet>
				<PageTitleBar title="Admin Panel" match={match} />
				<div className="row">
					<div className="col-sm-6 col-md-4 w-xs-half-block">
						<AreaChartWidget
							data={visitorsData}
							title="Total Amount of US$ Transactions"
							subtitle="Totally"
							colour="primary"
						/>
					</div>
					<div className="col-sm-12 col-md-4 w-xs-half-block">
						<AreaChartWidget
							data={ordersData}
							title="Total Amount of Euro Transactions"
							subtitle="Totally"
							colour="info"
						/>
					</div>
					<div className="col-sm-6 col-md-4 w-xs-full">
						<AreaChartWidget
							data={salesData}
							title="Total Amount of Swedish Korona Transactions"
							subtitle="Totally"
							colour="warning"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-4 w-xs-half-block">
						<AreaChartWidget
							data={visitorsData}
							title="Total Number of Customers"
							subtitle="Totally"
							colour="danger"
						/>
					</div>
					<div className="col-sm-12 col-md-4 w-xs-half-block">
						<AreaChartWidget
							data={ordersData}
							title="Total Number of Transactions"
							subtitle="Totally"
							colour="success"
						/>
					</div>
					<div className="col-sm-6 col-md-4 w-xs-full">
						<AreaChartWidget
							data={salesData}
							title="Total Number of Requests"
							subtitle="Totally"
							colour="yellow"
						/>
					</div>
				</div>
				<div className="row">
					<RctCollapsibleCard
						colClasses="col-sm-12 col-md-12 col-lg-12 d-sm-full"
						heading={<IntlMessages id="widgets.RecentOrders" />}
						collapsible
						reloadable
						closeable
						fullBlock
					>
						<RecentOrdersWidget />
					</RctCollapsibleCard>
				</div>
			</div>
		)
	}
}
