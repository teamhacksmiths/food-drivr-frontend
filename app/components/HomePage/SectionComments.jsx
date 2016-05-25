import React from 'react';
import Comment from './Comment.jsx';

class SectionComments extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "We're so happy you came in! We've been throwing away hundreds of cupcakes and it just makes us sick. Thank you for what you're doing.",
      author: 'CARLOS ESTRADA',
      company: 'Jones Brothers Cupcakes',
      item: 0
    };
  }

  selectItem(value) {
    this.setState({ item: value });
    if (value === 0) {
      this.setState({ text: "We're so happy you came in! We've been throwing away hundreds of cupcakes and it just makes us sick. Thank you for what you're doing.",
              author: 'CARLOS ESTRAD',
              company: 'Jones Brothers Cupcakes' });
    } else if (value === 1) {
      this.setState({ text: 'Some more text about someone from a random company 1 should go here!',
              author: 'NAME LASTNAME 1',
              company: 'Super Company 1' });
    } else {
      this.setState({ text: 'A different kind of text about someone from a random company 2 should go here!',
              author: 'NAME LASTNAME 2',
              company: 'Super Company 2' });
    }
  }

  isActive(value) {
    return (`${(this.state.item === value) ? 'comments__bullet--active' : ''} comments__bullet pointer-cursor`);
  }

  render() {
    return (
      <section className="comments text-center text-white">
        <Comment text={this.state.text} author={this.state.author} company={this.state.company} />
        <div className="comments__dots">
          <div className={this.isActive(0)} onClick={this.selectItem.bind(this, 0)} />
          <div className={this.isActive(1)} onClick={this.selectItem.bind(this, 1)} />
          <div className={this.isActive(2)} onClick={this.selectItem.bind(this, 2)} />
        </div>
    </section>
    );
  }
}

module.exports = SectionComments;
