var DonationPage = React.createClass({
    displayName: "DonationPage",

    render: function () {
        return React.createElement(
            "div",
            { className: "donation" },
            React.createElement(Header, null),
            React.createElement(FoodBar, null),
            React.createElement("hr", null),
            React.createElement(FoodTable, null),
            React.createElement(Footer, null)
        );
    }
});

var BusinessName = React.createClass({
    displayName: "BusinessName",

    render: function () {
        return React.createElement(
            "h1",
            { className: "business-title text-center" },
            this.props.value
        );
    }
});

var FoodBar = React.createClass({
    displayName: "FoodBar",

    render: function () {
        return React.createElement(
            "div",
            { id: "donation-list" },
            React.createElement(BusinessName, { value: "Jane Doe Catering" }),
            React.createElement(
                "div",
                { id: "add-donation", className: "row" },
                React.createElement("input", { type: "text", placeholder: "Enter Donation Here", className: "donation-box col-xs-9", id: "new-donation" }),
                React.createElement("div", { className: "col-xs-1" }),
                React.createElement(FoodButton, null)
            )
        );
    }
});

var FoodButton = React.createClass({
    displayName: "FoodButton",

    render: function () {
        return React.createElement(
            "button",
            { className: "btn-add text-center col-xs-2" },
            "Add"
        );
    }
});

var FoodTable = React.createClass({
    displayName: "FoodTable",

    render: function () {
        return React.createElement(
            "div",
            { id: "past-donations well" },
            React.createElement(
                "h4",
                { className: "text-left" },
                "Past Donations"
            ),
            React.createElement(
                "ul",
                { id: "past-donations-list" },
                React.createElement(
                    "li",
                    { id: "template", className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-6" },
                        React.createElement(
                            "h4",
                            null,
                            "ST JUDE"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "March 22, 2016"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-6 foodtype" },
                        React.createElement(
                            "div",
                            { id: "food-item1" },
                            "4 trays of lasagne"
                        )
                    )
                ),
                React.createElement(
                    "li",
                    { id: "template", className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-xs-6" },
                        React.createElement(
                            "h4",
                            null,
                            "City Mission"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "March 21, 2016"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-xs-6 foodtype" },
                        React.createElement(
                            "div",
                            { id: "food-item1" },
                            "3 dozen bagels"
                        ),
                        React.createElement(
                            "div",
                            { id: "food-item2" },
                            "6 dozen donuts"
                        )
                    )
                )
            ),
            React.createElement(
                "button",
                { id: "view-more", className: "btn-small center-block", type: "button" },
                "View More"
            )
        );
    }
});