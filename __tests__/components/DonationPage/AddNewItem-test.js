// eslint-disable
import React from 'react';
import renderer from 'react-test-renderer';
import AddNewItem from '../../../app/components/DonationPage/AddNewItem.jsx';

// needed because of this:
// https://github.com/facebook/jest/issues/1353
jest.mock('react-dom');

const mockFunc = (e) => e;

describe('<AddNewItem />', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <AddNewItem
        enableAddItem
        onUpdateItem={mockFunc}
        onAddItem={mockFunc}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
