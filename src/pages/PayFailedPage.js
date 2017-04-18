/**
 * Created by ssehacker on 2017/4/18.
 */
import { go } from '../util';

export default class PayFailedPage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.flag = setTimeout(() => {
      go('/');
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.flag);
  }

  render() {
    return (
      <div className="jse-pay-failed-page">支付失败，3秒之后将跳转到首页</div>
    )
  }
}
