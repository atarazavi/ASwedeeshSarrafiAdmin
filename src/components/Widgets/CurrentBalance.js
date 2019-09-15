
import React from 'react';
import CountUp from 'react-countup';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import { RctCardContent } from 'Components/RctCard';

const CurrentBalance = (props) => (
    <div className = {props.half == "true" ? "current-widget bg-primary col-sm-6 col-md-6 col-lg-6 w-8-half-block" : "current-widget bg-primary"}>
        <RctCardContent>
            <div className="d-flex justify-content-between">
                <div className="align-items-start">
                    <h3 className="mb-10">{props.ClientsName} Current Balance</h3>
                    <h2 className="mb-0"><CountUp separator="," start={0} end={props.balance} /></h2>
                </div>
                <div className="align-items-end">
                    {props.currency === "USD" && <i className="zmdi zmdi-money"></i>} 
                </div>
            </div>
        </RctCardContent>
    </div>
);


export default CurrentBalance;
