/**
 * Created by ssehacker on 2017/4/18.
 */
import { go, request } from '../util';

export default class PaySuccessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: 60,
    };
    this.holding = false;
  }

  componentDidMount() {
    // 60秒之后自动跳转到首页。
    this.flag = setInterval(() => {
      const { timeout } = this.state;
      if (timeout > 1) {
        this.setState({
          timeout: timeout - 1,
        });
      } else if (!this.holding) {
        go('/');
      }
    }, 1000)

    // 取咖啡操作完成，则跳转到首页.
    this.btnFlag = setInterval(() => {
      request.get('/status/checkout')
        .then((res) => {
          if (res.status === 'finished') {
            go('/');
          } else if (res.status === 'holding') {
            this.holding = true;
          }
        }) 
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.flag);
    clearInterval(this.btnFlag);
  }

  renderTips() {
    const { timeout } = this.state;
    if (this.holding) {
      return '正在接取咖啡...';
    }
    return `支付成功，请在 ${timeout} 秒之内点击下方按钮取咖啡。`;
  }

  render() {
    const me = this;
    const { timeout } = this.state;
    return (
      <div className="jse-pay-success-page">
        {me.renderTips()}
      </div>
    );
  }
}
