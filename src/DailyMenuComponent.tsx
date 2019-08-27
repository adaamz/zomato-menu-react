import React, {Component} from "react";
import {
	DailyMenuApiEntry,
	DishContainerApiEntry
} from "./DailyMenuApiResponse";
import DishComponent from "./DishComponent";

export default class DailyMenuComponent extends Component<DailyMenuComponentProps>
{
	private readonly dailyMenu: DailyMenuApiEntry;

	constructor(props: DailyMenuComponentProps)
	{
		super(props);

		this.dailyMenu = props.dailyMenu;
	}

	render(): JSX.Element
	{
		const startDate = new Date(this.dailyMenu.start_date);

		return (
			<div className="tmi-group  mtop">
				<div className="tmi-group-name bold fontsize3 pb5 bb">
					{startDate.toLocaleDateString()}
				</div>

				{this.dailyMenu.dishes.map((dish: DishContainerApiEntry, i: number): JSX.Element => (
					<DishComponent dish={dish.dish} key={i}/>
				))}
			</div>
		);
	}
}

interface DailyMenuComponentProps
{
	dailyMenu: DailyMenuApiEntry
}
