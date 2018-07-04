import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import QuotesPresentation from './QuotesPresentation';
import SingleQuote from './SingleQuote';

describe('The QuotesPresentation component', () => {
  describe('unit tests', () => {
    it('Can render', () => {
      const wrapper = shallow(<QuotesPresentation />);
    });

    it('Can render 2 jokes', () => {
      const wrapper = shallow(
        <QuotesPresentation jokes={[{ id: 1 }, { id: 2 }]} />
      );

      const jokes = wrapper.find(SingleQuote);
      expect(jokes.length).toBe(2);
    });
  });

  describe('intergration tests', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <QuotesPresentation jokes={[{ id: 1, joke: 'The joke' }]} />
      );
    });

    it('Can render a joke', () => {
      const jokes = wrapper.find(SingleQuote);
      const joke = jokes.dive();
      expect(joke.text()).toBe('The joke');
    });

    // for (let i = 0; i < 3; i++) {
    //   it(`Can render ${i} jokes`, () => {
    //     const jokes = wrapper.find(SingleQuote);
    //     expect(jokes.length).toBe(i);
    //   });
    // }
  });

  test('Link renders correctly', () => {
    const tree = renderer
      .create(<QuotesPresentation jokes={[{ id: 1, joke: 'The joke' }]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('The quotes', () => {
    const quotes = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(quotes).toMatchSnapshot();
  });
});
