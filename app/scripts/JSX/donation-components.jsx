var DonationPage = React.createClass({
    render: function(){
        return (
            <div className="donation">
                <Header />
            {
            //  <DonateBar />
            }

                <h1 className="text-center">Jane Doe Catering</h1>
                <FoodBar />
            {
            //  <DonateTable />
            }
                <hr />
                <FoodTable />
                <Footer />
            </div>
            );
    }
});
{
// var DonateBar = React.createClass({
//  render: function(){
//      return (
//              <span>
//                  <DonateButton />
//              </span>
//          );
//  }
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
    render: function(){
        return (
                <div className="header text-flex">
                    <input type="text" placeholder="What would you like to donate?" />
                    <FoodButton />
                </div>
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
    render: function(){
        return (
            <button type="submit" className="btn btn-custom">Add</button>
            );
    }
});

var FoodTable = React.createClass({
    render: function(){
        return (
            <table>
            <tr>
                <th>Donations To Date</th>
                <th>Food Donated</th>
            </tr>
            <tr>
                <td>ST JUDE</td>
                <td rowSpan="2">4 Trays of Lasagna</td>
            </tr>
            <tr>
                <td>March 22nd, 2016</td>
            </tr>
            </table>
            );
    }
});