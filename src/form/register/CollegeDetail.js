import React, { Component } from 'react';
import './reg-style/CollegeDetails.css';
import Helmet from 'react-helmet';
import LocationInput from '../components/LocationInput';

export class CollegeDetail extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
				<Helmet>
					<body className="form-bg-col" />
				</Helmet>

				<div className="login">
					<div className="reg-container">
						<div className="college-heading">Register With CFM</div>
						<div
							className="college-search"
							onChange={handleChange('CollegeName')}
							defaultValue={values.CollegeName}
						>
							Select Your College: 
							<LocationInput onChange={handleChange('CollegeName')}
							defaultValue={values.CollegeName} />
						</div>
						<div className="branch">
							Type your Branch:
							<input
								onChange={handleChange('Branch')}
								defaultValue={values.Branch}
								type="text"
								placeholder="CS,Mech,Civil,BCA,Medical,etc"
							/>
						</div>
						<div className="yoa">
							Year of Admission:
							<input
								onChange={handleChange('YearOfAdmission')}
								defaultValue={values.YearOfAdmission}
								type="tel"
								placeholder="In which year 2017,2019,2020?"
							/>
						</div>
						<button onClick={this.continue} className="col-form-next">
							<i class="fa fa-chevron-right" />
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default CollegeDetail;
