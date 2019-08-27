export interface DailyMenuApiResponse
{
	daily_menus: DailyMenuContainerApiEntry[],
	status: string,
}

export interface DailyMenuContainerApiEntry
{
	daily_menu: DailyMenuApiEntry
}

export interface DailyMenuApiEntry
{
	daily_menu_id: string,
	start_date: string,
	end_date: string,
	name: string,
	dishes: DishContainerApiEntry[],
}

export interface DishContainerApiEntry
{
	dish: DishApiEntry,
}

export interface DishApiEntry
{
	 dish_id: string,
	 name: string,
	 price: string,
}
