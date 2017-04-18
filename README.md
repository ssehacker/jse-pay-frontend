# Aa
wisite aa

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