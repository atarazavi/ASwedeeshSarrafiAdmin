/**
 * Bank Accounts Page
 */
import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {
	FormGroup,
	Form,
	Label,
	Input,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from 'reactstrap';
import { Collapse } from 'reactstrap';
import classnames from 'classnames';

import CircularProgress from '@material-ui/core/CircularProgress';
import { NotificationManager } from 'react-notifications';

// edit address from
import EditAddressForm from './EditAddressForm';

// intl messages
import IntlMessages from 'Util/IntlMessages';

import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// user addresses
import userAddresses from '../data/userAddresses';

export default class BankAccounts extends Component {

	state = {
		default: false,
		collapse: false,
		loading: false,
		addresses: userAddresses,
		addNewAddressDetail: {
			id: null,
			name: 'Admin',
			city: '',
			country: '',
			phone: '',
			email: '',
		},
		deleteAddress: null,
		editAddressModal: false,
		selectedAddress: null
	};

	handleChange = name => (event, checked) => {
		this.setState({ [name]: checked });
	};

	toggle = () => {
		this.setState({ collapse: !this.state.collapse });
	}

	/**
	 * Add New Address Hanlder
	 */
	addNewBankAccount() {
		const { city, country, state, addressLine2, addressLine1 } = this.state.addNewAddressDetail;
		if (city !== '' && country !== '' && state !== '' && addressLine1 !== '' && addressLine2 !== '') {
			let newAddress = {
				...this.state.addNewAddressDetail,
				id: new Date().getTime()
			}
			let addresses = this.state.addresses;
			if (newAddress.isDefault) {
				for (const address of addresses) {
					if (address.isDefault) {
						address.isDefault = false
					}
				}
			}
			addresses.push(newAddress);
			this.setState({ loading: true });
			let self = this;
			setTimeout(() => {
				self.setState({ loading: false, addresses });
			});
		}
	}

	/**
	 * Hanlde Change Default Address
	 */
	handleChangeDefaultAddress() {
		this.setState({
			selectedAddress: {
				...this.state.selectedAddress,
				isDefault: !this.state.selectedAddress.isDefault
			}
		});
	}

	/**
	 * On Delete Address
	 */
	onDeleteAddress(address) {
		this.refs.deleteConfirmationDialog.open();
		this.setState({ deleteAddress: address });
	}

	/**
	 * Delete Address
	 */
	deleteAddress() {
		let addresses = this.state.addresses;
		let indexOfDeleteAddress = addresses.indexOf(this.state.deleteAddress);
		addresses.splice(indexOfDeleteAddress, 1);
		this.refs.deleteConfirmationDialog.close();
		this.setState({ loading: true });
		let self = this;
		setTimeout(() => {
			self.setState({ addresses, loading: false });
			NotificationManager.success('Address Deleted!');
		}, 2000);
	}

	/**
	 * Edit Address
	 */
	onEditAddress(address) {
		this.setState({ editAddressModal: true, selectedAddress: address });
	}

	/**
	 * Toggle Edit Address Modal
	 */
	toggleEditAddressModal() {
		this.setState({ editAddressModal: false });
	}

	/**
	 * On Update Edit Address
	 */
	onUpdateEditAddressModal(key, value) {
		this.setState({
			selectedAddress: {
				...this.state.selectedAddress,
				[key]: value
			}
		});
	}

	/**
	 * On Update Address
	 */
	updateEditAddressModal() {
		let addresses = this.state.addresses;
		const { selectedAddress } = this.state;
		let indexOfUpdateAddress;
		for (let i = 0; i < addresses.length; i++) {
			const address = addresses[i];
			if (selectedAddress.isDefault) {
				address.isDefault = false
			}
			if (address.id === selectedAddress.id) {
				indexOfUpdateAddress = i;
			}
		}
		addresses[indexOfUpdateAddress] = selectedAddress;
		this.setState({ loading: true, editAddressModal: false });
		let self = this;
		setTimeout(() => {
			self.setState({ loading: false, addresses });
		}, 2000);
	}

	render() {
		const { addresses, addNewAddressDetail, loading, editAddressModal, selectedAddress } = this.state;
		return (
			<div className="address-wrapper">
				<h2 className="heading">Your frequent using bank accouns:</h2>
				<div className="row row-eq-height">
					{addresses.map((address, key) => (
						<div className="col-sm-6 col-md-4 col-lg-3" key={key}>
							<div className={classnames("card-base", { 'border-primary': true })}>
								<div className="d-flex justify-content-between">
									<h5 className="fw-bold">5022-2910-5738-4388</h5>
									<div className="list-action">
										<a href="javascript:void(0)" onClick={() => this.onEditAddress(address)}><i className="ti-pencil"></i></a>
										<a href="javascript:void(0)" onClick={() => this.onDeleteAddress(address)}><i className="ti-close"></i></a>
									</div>
								</div>
								<address>
									<span>PayPal</span>
									<span>ata.razavi89@gmail.com</span>
									<span>some descriptions about the account</span>
								</address>
							</div>
						</div>
					))}
				</div>
				<Button variant="raised" color="primary" className="text-white" onClick={this.toggle}>Add New Bank Account</Button>
				<div className="py-50 w-50">
					<Collapse isOpen={this.state.collapse}>
						<div className="mb-20">
							<h2 className="heading mb-5">Add a new Bank-Account</h2>
							<span>Make sure you write correct numbers and spells. </span>
						</div>
						<Form>
							<div className="row">
								<div className="col-md-6">
									<FormGroup>
										<Label className="col-form-label" for="city">City</Label>
										<Input
											type="text"
											name="city"
											id="city"
											className="input-lg"
											value={addNewAddressDetail.city}
											onChange={(e) => this.setState({
												addNewAddressDetail: {
													...addNewAddressDetail,
													city: e.target.value
												}
											})}
										/>
									</FormGroup>
									<FormGroup>
										<Label className="col-form-label" for="country">Country</Label>
										<Input
											type="text"
											name="country"
											id="country"
											className="input-lg"
											value={addNewAddressDetail.country}
											onChange={(e) => this.setState({
												addNewAddressDetail: {
													...addNewAddressDetail,
													country: e.target.value
												}
											})}
										/>
									</FormGroup>
								</div>
							</div>
							<FormGroup>
								<Label className="col-form-label" for="phone">Phone No.</Label>
								<Input
									type="tel"
									name="phone"
									id="phone"
									className="input-lg"
									value={addNewAddressDetail.phone}
									onChange={(e) => this.setState({
										addNewAddressDetail: {
											...addNewAddressDetail,
											phone: e.target.value
										}
									})}
								/>
							</FormGroup>
							<FormGroup>
								<Label className="col-form-label" for="email">Email Address</Label>
								<Input
									type="email"
									name="email"
									id="email"
									className="input-lg"
									value={addNewAddressDetail.emailAddress}
									onChange={(e) => this.setState({
										addNewAddressDetail: {
											...addNewAddressDetail,
											emailAddress: e.target.value
										}
									})}
								/>
							</FormGroup>
							<Button variant="raised" color="primary" className="text-white" onClick={() => this.addNewBankAccount()}>Save</Button>
						</Form>
					</Collapse>
				</div>
				<DeleteConfirmationDialog
					title="Are You Sure Want To Delete?"
					message="This will delete your address permanently."
					onConfirm={() => this.deleteAddress()}
					ref="deleteConfirmationDialog"
				/>
				<Modal isOpen={editAddressModal} toggle={() => this.toggleEditAddressModal()}>
					<ModalHeader toggle={() => this.toggleEditAddressModal()}>Edit Address</ModalHeader>
					<ModalBody>
						<EditAddressForm
							selectedAddress={selectedAddress}
							onUpdate={this.onUpdateEditAddressModal.bind(this)}
							handleChangeDefaultAddress={() => this.handleChangeDefaultAddress()}
						/>
					</ModalBody>
					<ModalFooter>
						<Button variant="raised" className="text-white btn-success" onClick={() => this.updateEditAddressModal()}>Update</Button>{' '}
						<Button variant="raised" className="text-white btn-danger" onClick={() => this.toggleEditAddressModal()}>Cancel</Button>
					</ModalFooter>
				</Modal>
				{loading &&
					<div className="d-flex justify-content-center loader-overlay">
						<CircularProgress />
					</div>
				}
			</div>
		);
	}
}
