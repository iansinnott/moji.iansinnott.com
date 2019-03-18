import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import lookup from '../components/lookup.js';

const Form = props => {
  return (
    <form className='Form' onSubmit={e => e.preventDefault()}>
      <input
        className='input'
        value={props.value}
        type='text'
        placeholder=''
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
    showHidden: false,
  };

  /**
   * NOTE: Replacement is done so that this input only takes a string of length
   * 1, without having to actually rely on the length property since that
   * requires additional attention when dealing with multi-byte characters like
   * emoji.
   */
  handleChange = value => {
    this.setState(() => ({
     value: value.trim().replace(this.state.value, '')
    }));
  };

  toggleShow = e => {
    this.setState(state => ({ showHidden: !state.showHidden }));
  };

  render() {
    const result = lookup(this.state.value);
    const resultCount = Object.keys(result).reduce((count, k) => count + result[k].length, 0);
    const keys = ['tw', 'cn', 'en'];
    const flagDict = {
      'tw': '🇹🇼',
      'cn': '🇨🇳',
      'en': '🇺🇸',
    };

    return (
      <Layout>
        <SEO title='Home' keywords={[`chinese`, `emoji`]} />
        <section className='inputArea'>
          <Form onChange={this.handleChange} value={this.state.value} />
          <div className='description'>
            <p>Enter an emoji on the left 👈</p>
          </div>
        </section>
        <div style={{ paddingBottom: '1em' }} className='emoji'>
          {!!resultCount && keys.map(k => (
            <AnnotationSection key={k} icon={flagDict[k]}>
              {result[k].map(text => <span key={text} className="item">{text}</span>)}
            </AnnotationSection>
          ))}
        </div>
        <button onClick={this.toggleShow} className='showHidden'>
          What is this?
        </button>
        <div className='hidden' style={{ opacity: this.state.showHidden ? 1 : 0 }}>
          <h1>Emoji in Chinese!</h1>
          <h3>What...?</h3>
          <p>
            The Chinese keyboards on iOS are great for inserting emoji into text.
            But how do you say those emotions in Chinese? Enter an emoji and find
            out!
          </p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
