import React from 'react';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AccountInfor from '../components/UserDashboardPages/AccountInformation';
import DeliveryAddress from '../components/UserDashboardPages/DeliveryAddress';
import MyOrders from '../components/UserDashboardPages/PreviousOrders';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

export const UsersDashboardControl = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="flex flex-col items-center bg-gray-100 ">
            <div className=" flex my-8 ">
                <div>
                    <div className="bg-white h-96 py-5 pl-4 pr-4 mr-8 rounded">
                        <div className="flex flex-col text-primary-dark">
                            <h1 className="font-bold text-lg py-1">
                                <i className="mr-2">
                                    <AccountCircleOutlinedIcon />
                                </i>
                                My Profile
                            </h1>
                            <Link
                                to={`${url}/My Account Info`}
                                className="pl-8 text-sm py-1"
                            >
                                Account Information
                            </Link>
                            <Link
                                to={`${url}/Delivery Address`}
                                className="pl-8 text-sm py-1"
                            >
                                Delivery Address
                            </Link>
                            <div className="border-b border-gray w-56 my-2"></div>
                            <h1 className="font-bold text-lg py-1">
                                <i className="mr-2">
                                    <ShoppingBasketOutlinedIcon />
                                </i>
                                My Orders
                            </h1>
                            <Link
                                to={`${url}/My Orders`}
                                className="pl-8 text-sm py-1"
                            >
                                Buy27.com
                            </Link>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact={true} path={path}>
                        <AccountInfor />
                    </Route>
                    <Route exact={true} path={`${path}/My Account Info`}>
                        <AccountInfor />
                    </Route>
                    <Route path={`${path}/Delivery Address`}>
                        <DeliveryAddress />
                    </Route>
                    <Route path={`${path}/My Orders`}>
                        <MyOrders />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default UsersDashboardControl;