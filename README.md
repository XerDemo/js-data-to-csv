# js-data-to-csv
⚠️ 只能运行在浏览器环境下，支持typescript，1w条数据3s内下载完成(不同设备情况不一)
<p align="center">
  <a href="https://travis-ci.com/researchgate/react-intersection-list"><img alt="Build Status" src="https://travis-ci.com/researchgate/react-intersection-list.svg?branch=master"></a>
  <a href="https://codecov.io/gh/researchgate/react-intersection-list"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/researchgate/react-intersection-list.svg"></a>
  <a href="https://www.npmjs.com/package/@researchgate/react-intersection-list"><img alt="NPM version" src="https://img.shields.io/npm/v/@researchgate/react-intersection-list.svg"></a>
  <a href="https://github.com/prettier/prettier"><img alt="styled with prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
</p>



## 安装

```
$ npm install js-data-to-csv
```

## 使用
1.导入包
```js
import exportExcel from 'js-data-to-csv';
```
2.使用exportExcel函数
| prop| type | required | description|
| --- | --- | ---| --- |
|sourceData | 对象 | true | 要导出为.csv文件的对象|
|name| string| trye|.csv文件名|
```js
const sourceData = {
  // 表格头
  head: [
    { title: "时间", fieldName: "time" },
    { title: "成交价格", fieldName: "tradePrice" },
    { title: "手续费", fieldName: "fee" },
    { title: "成交金额", fieldName: "tradeAmount" }
  ],
  // 数据内容
  body: [
    {
      time: "2019-10-17 14:54:52",
      tradePrice: "30.0022.001.32 TWD",
      fee: "0 TWD",
      tradeAmount: "660.00"
    }
    // ... more
  ]
};
```


## example
```js
// 1.导入
import exportExcel from 'js-data-to-csv';

// 2.整理数据格式
const sourceData = {
  head: [
    { title: "时间", fieldName: "time" },
    { title: "成交价格", fieldName: "tradePrice" },
    { title: "手续费", fieldName: "fee" },
    { title: "成交金额", fieldName: "tradeAmount" }
  ],
  body: [
    {
      time: "2019-10-17 14:54:52",
      tradePrice: "30.0022.001.32 TWD",
      fee: "0 TWD",
      tradeAmount: "660.00"
    },
    {
      time: "2019-10-17 14:54:36",
      tradePrice: "30.0089.005.34 TWD",
      fee: "",
      tradeAmount: "2,670.00"
    },
    {
      time: "2019-10-17 14:54:07",
      tradePrice: "21.00500.0021 TWD",
      fee: "0 TWD",
      tradeAmount: "10,500.00"
    }
  ]
};

// 3.调用函数
exportExcel(sourceData,'cardTable')
```
