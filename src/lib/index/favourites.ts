export type Favourite = {
	src: string;
	title: string;
	description: string;
	stars: number
}

export const favourites: Favourite[] = [
	{
		src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png",
		title: "Customize your drink",
		description: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
		stars: 25
	},
	{
		src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png",
		title: "Brewed hot coffee, bakery item or hot tea",
		description: "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
		stars: 50
	},
	{
		src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png",
		title: "Handcrafted drink, hot breakfast or parfait",
		description: "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
		stars: 150
	},
	{
		src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
		title: "Salad, sandwich or protein box",
		description: "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
		stars: 200
	},
	{
		src: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
		title: "Select merchandise or at-home coffee",
		description: "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
		stars: 400
	},
]
