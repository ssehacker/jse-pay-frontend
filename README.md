# JSE
jse-pay-frontend

### Api
1. 每分钟更新一次二维码
> 后端需要1分钟更新一次二维码图片。

2. 获取支付状态
```
get /status/payment
```

返回的数据格式： 
```js
{
    status: 'success',  // success, failed, init
}
```

> 注意: 
> 前端每1秒轮询一次支付状态，
> 当支付失败时， status为 "failed"， 之后3秒之内得重置其值为 "init"状态
> 如果支付成功， status为 "success"， 之后3秒之内得重置其值为 "init"状态

3. 获取 咖啡机是否接取完成状态
```
get /status/checkout
```

返回的数据格式：
```
{
    status: 'holding',  // holding, finished, init
}
```

接取完成则返回true， 否则返回false。

> 注意：
> 前端每1秒轮询一次状态，
> 当开始接取时，status为 "holding"
> 接取结束之后， status为 "finished"， 之后3秒之内得重置其值为 "init"状态

### Installation

1. 安装node
参考 [我的博客](http://firstblood.me/#/article/58e48894ca2837af04fbcc86?_k=0kydqj)
我们在这里使用nvm安装。
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
```
然后
```
$ source ~/.bashrc
```
在控制台输入:
```
$ node -v
```
如果能得到版本信息，则表示安装正确
2. 全局安装webpack

你可以直接使用淘宝的源，这样比npm官方的快很多：
```
npm config set registry http://registry.npm.taobao.org/
```

```
$ npm install webpack@1 --global
```

> 注意， 此后的操作需要在项目根目录下（这里假设是jse-pay-frontend）：
3. 安装所需的依赖
```
jse-pay-frontend$ npm install 
```

4. 编译JS代码
```
jse-pay-frontend$ webpack -d
```

### Get Start
在项目根目录下：
```
$ npm start
```

打开浏览器，访问 localhost:3004 就可以看到了。