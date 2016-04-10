var DonationPage = React.createClass({
	displayName: "DonationPage",

	render: function () {
		return React.createElement(
			"div",
			{ className: "donation" },
			React.createElement(Header, null),
			React.createElement(
				"h1",
				{ className: "text-center" },
				"Jane Doe Catering"
			),
			React.createElement(FoodBar, null),
			React.createElement("hr", null),
			React.createElement(FoodTable, null),
			React.createElement(Footer, null)
		);
	}
});
{
	// var DonateBar = React.createClass({
	// 	render: function(){
	// 		return (
	// 				<span>
	//					<DonateButton />
	//				</span>
	// 			);
	// 	}
	// });

	/*var DonateButton = React.createClass({
 	render: function(){
 		return (
 			<button></button>
 			);
 	}
 });*/
}
var FoodBar = React.createClass({
	displayName: "FoodBar",

	render: function () {
		return React.createElement(
			"div",
			{ className: "header text-flex" },
			React.createElement("input", { type: "text", placeholder: "What would you like to donate?" }),
			React.createElement(FoodButton, null)
		);
	}
});
{
	// To be used with the state and props based on user input.

	/*var DonateTable = React.createClass({
 	render: function(){
 		return (
 			<ul>
 				<li>
 					4 lbs of Beans
 				</li>
 				<li>
 					3 Cans of Soup
 				</li>
 			</ul>
 			);
 	}
 });*/
}
var FoodButton = React.createClass({
	displayName: "FoodButton",

	render: function () {
		return React.createElement(
			"button",
			{ type: "submit", className: "btn btn-custom" },
			"Add"
		);
	}
});

var FoodTable = React.createClass({
	displayName: "FoodTable",

	render: function () {
		return React.createElement(
			"table",
			null,
			React.createElement(
				"tr",
				null,
				React.createElement(
					"th",
					null,
					"Donations To Date"
				),
				React.createElement(
					"th",
					null,
					"Food Donated"
				)
			),
			React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					"ST JUDE"
				),
				React.createElement(
					"td",
					{ rowSpan: "2" },
					"4 Trays of Lasagna"
				)
			),
			React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					"March 22nd, 2016"
				)
			)
		);
	}
});