import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import lookup from '../components/lookup.js';

const Form = props => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        className='input'
        value={props.value}
        type='text'
        placeholder='Emoji!'
        onChange={e => props.onChange(e.target.value)}
      />
    </form>
  );
};

const AnnotationSection = ({ icon, children }) => (
  <section className='annotations'>
    <h4>{icon}</h4>
    <div>{children}</div>
  </section>
);

class IndexPage extends React.Component {
  state = {
    value: '',
  };

  handleChange = value => {
    this.setState(() => ({ value }));
  };

  render() {
    const result = lookup(this.state.value);
    const resultCount = Object.keys(result).reduce((count, k) => count + result[k].length, 0);
    const keys = ['en', 'cn', 'tw'];
    const flagDict = {
      'tw': '🇹🇼',
      'cn': '🇨🇳',
      'en': '🇺🇸',
    };

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
          {!!resultCount && keys.map(k => (
            <AnnotationSection key={k} icon={flagDict[k]}>
              {result[k].map(text => <span key={text} class="item">{text}</span>)}
            </AnnotationSection>
          ))}
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
