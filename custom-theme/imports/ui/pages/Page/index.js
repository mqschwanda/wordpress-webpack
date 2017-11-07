import React from 'react';
import { ContentBox } from 'components';
import { pushPath } from 'modules';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

@connect(({ wordpress: { pages }, location }) => ({ pages, location }))
export default class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { page: {} };
    this.getPage = this.getPage.bind(this);
  }
  componentDidMount() {
    this.getPage();
  }
  componentDidUpdate() {
    this.getPage();
  }
  getPage() {
    const { pages } = this.props;
    const { slug } = this.props.match.params;

    for (let i = 0; i < pages.length; i += 1) {
      if (pages[i].slug === slug) {
        this.setState({ page: pages[i] });
        i = pages.length;
      } else if (i === pages.length - 1) pushPath('/not-found');
    }
  }
  render() {
    return (
      <div>
        {this.state.page.content ? (
          <ContentBox dangerouslySetInnerHTML={{ __html: this.state.page.content.rendered }} />
        ) : ''}
      </div>
    );
  }
}
