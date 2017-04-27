/**
 * Created by ssehacker on 2017/4/15.
 */
import './Page.less';
import { go, request } from '../util';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Date.now(),
    };
  }

  componentDidMount() {
    // 二维码1秒轮询一次
    this.flag = setInterval(() => {
      const now = Date.now();
      this.setState({
        now,
      });
    }, 1000);
    
    // 轮循付款结果
    this.resFlag = setInterval(() => {
      request.get('/status/payment')
        .then((res) => {
          const status = res.status;
          if (status === 'success') {
            go('success');
          } else if (status === 'failed') {
            go('failed');
          }
        });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.flag);
    clearInterval(this.resFlag);
  }

  render() {
    const { now } = this.state;
    return (
      <div className="jse-home">
        <div className="jse-home-header">
          <span>{new Date().toLocaleTimeString()}</span>
          <span>30摄氏度</span>
        </div>
        <div className="jse-home-main">
          <div className="jse-home-body">
            <div className="jse-home-content">
              这里是广告
            </div>
          </div>
          <div className="jse-home-sidebar">
            <p>微信扫码喝咖啡</p>
            <div className="jse-home-sidebar-pay-img">
              <div className="jse-home-sidebar-pay-img-item">
                <img src={`image/ali.png?t=${now}`} />
                <p>支付宝</p>
              </div>
              <div className="jse-home-sidebar-pay-img-item">
                <img src={`image/wechat.png?t=${now}`} />
                <p>微信支付</p>
              </div>
            </div>
            <cite>二维码一分钟更新一次</cite>
          </div>
        </div>
      </div>
    );
  }
}
