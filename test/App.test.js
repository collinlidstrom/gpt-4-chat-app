import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />)).to.exist;
  });
});
