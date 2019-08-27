import './App.css';
import React, {Component} from 'react';
import {
	DailyMenuApiResponse,
	DailyMenuContainerApiEntry,
} from "./DailyMenuApiResponse";
import DailyMenuComponent from "./DailyMenuComponent";

export default class App extends Component<AppProps, AppState>
{
	constructor(props: AppProps)
	{
		super(props);

		this.state = {
			isLoaded: false,
			daily_menus: [],
		};
	}

	componentDidMount(): void
	{
		/*
		 fetch("https://developers.zomato.com/api/v2.1/dailymenu?res_id=16521942", {
		 headers: {"user_key": "xxx"},
		 })
		 */
		fetch("data.json")
		.then(res => res.json())
		.then((data: DailyMenuApiResponse): void => {
			this.setState({
				isLoaded: true,
				daily_menus: data.daily_menus,
			});
		});
	}

	render()
	{
		const dailyMenus = this.state.daily_menus;

		return (
			<div className="row">
				<div className="res-info-left col-l-11">
					<div className="restab_wrap">
						<div id="tabtop" className="tabcontent-wrapper brstd  daily-menu">
							<div className="ui segment">
								<div id="menu-container" className="relative">
									<div className="clear"/>
									<div className="daily-menu-container">
										<div className="menu-preview mt10" id="menu-preview">
											<div className="tmi-groups">
												<div className="tmi-group  mtop">
													{dailyMenus.map((dailyMenus: DailyMenuContainerApiEntry, i: number) => (
														<DailyMenuComponent key={i} dailyMenu={dailyMenus.daily_menu}/>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

interface AppProps
{
}

interface AppState
{
	isLoaded: boolean,
	daily_menus: DailyMenuContainerApiEntry[],
}
