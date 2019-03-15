import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import lookup from './lookup.js';

const Form = props => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        value={props.value}
        type='text'
        placeholder='Emoji!'
        onChange={e => props.onChange(e.target.value)}
      />
    </form>
  );
};

class IndexPage extends React.Component {
  state = {
    value: '',
  };

  handleChange = value => {
    this.setState(() => ({ value }));
  };

  render() {
    return (
      <Layout>
        <SEO title='Home' keywords={[`chinese`, `emoji`]} />
        <h1>Emoji in Chinese!</h1>
        <h3>What...?</h3>
        <p>
          The Chinese keyboards on iOS are great for inserting emoji into text.
          But how do you say those emotions in Chinese? Enter an emoji and find
          out!
        </p>
        <Form onChange={this.handleChange} value={this.state.value} />
        <div style={{ paddingBottom: '1em' }} className='emoji'>
          {lookup(this.state.value).map(x => (
            <div key={x} class="item">{x}</div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
