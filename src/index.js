import './App.less';
import './app/common.less';
import { HomePage, PaySuccessPage, PayFailedPage } from './pages';

let { Router, Route, Link, hashHistory, IndexRoute} = ReactRouter;

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <div className="jse-app">
        {children}
      </div>
    );
  }
}

/*<Route path="/" component={App}>
  <IndexRoute component={HomePage}/>
  <Route path="theme" component={ThemePage}/>
 <Route path="article/new" component={ArticleEditor} />
</Route>*/


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="success" component={PaySuccessPage} />
      <Route path="failed" component={PayFailedPage} />
    </Route>
  </Router>
), document.getElementById('app'));