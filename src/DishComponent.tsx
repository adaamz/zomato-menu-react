import React, {Component} from "react";
import {DishApiEntry} from "./DailyMenuApiResponse";

export default class DishComponent extends Component<DishComponentProps>
{
	private readonly dish: DishApiEntry;

	constructor(props: DishComponentProps)
	{
		super(props);

		this.dish = props.dish;
	}

	render(): JSX.Element
	{
		const firstSpaceIndex = this.dish.name.indexOf(" ");

		let quantity: JSX.Element | string;
		let name: string;

		if (firstSpaceIndex > -1) {
			quantity = (
				<span className="tmi-qty">
					{this.dish.name.substr(0, firstSpaceIndex)}
				</span>
			);
			name = this.dish.name.substr(firstSpaceIndex);
		} else {
			quantity = '';
			name = this.dish.name;
		}

		return (
			<div className="tmi tmi-daily pb5 pt5  ">
				<div className="tmi-text-group col-l-14 col-s-14">
					<div className="row">
						<div className="tmi-name">
							{quantity}
							{name}
						</div>
					</div>
				</div>
				<div className="tmi-price ta-right col-l-2 col-s-2 bold600">
					<div className="row">
						{this.dish.price}
					</div>
				</div>
				<div className="clear"/>
			</div>
		);
	}
}

interface DishComponentProps
{
	dish: DishApiEntry,
}
