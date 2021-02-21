---
id: hackathon-startup-guide
title: 黑客松入门指南
sidebar_label: 黑客松指南
---

欢迎使用NEAR!我们很高兴您来这这里.让我们投入其中吧：

1) 首先,您需要一个NEAR[`testnet`_(测试网)_账户](https://wallet.testnet.near.org/).如果您有任何问题,我们已经创建了一个[简单指南](https://docs.near.org.cn/docs/develop/basics/create-account)来帮助您.

2) 现在,您已经拥有了一个帐户,测试一个简单的`testnet`_(测试网)_应用程序并与区块链进行交互.尝试[Berry Club](https://test.berryclub.io/)或[Guest Book](https://near-examples.github.io/guest-book/).

3) 查看[NEAR Explorer](https://explorer.testnet.near.org/).在这里,您可以查找在NEAR上产生的所有交易和区块.尝试搜索您刚创建的帐户,并查看您使用Berry Club或Guest Book创建的交易.

4) 现在安装[`near-cli`](https://docs.near.org.cn/docs/tools/near-cli#setup).这是一个命令行界面,可让您与NEAR无缝交互.[此页面](https://docs.near.org.cn/docs/tools/near-cli)包含所有的`near-cli`命令示例.

5) 尝试运行第一个命令：[`near login`](https://docs.near.org.cn/docs/tools/near-cli#near-login).这会将您重定向到NEAR钱包,并将您的`testnet`_(测试网)_帐户密钥保存在本地.*您可以在HOME目录下的隐藏文件中看到它们(〜/ .near-credentials)*

6) 试试看`create-near-app`!在您的终端中运行`npx create-near-app your-awesome-project`.*(注：这需要[Node.js](https://nodejs.org/zh-cn/).)*这是5分钟内在NEAR区块链上启动全栈应用程序的最简方法.

7) 前往[NEAR示例](https://near.dev/)并测试一些示例应用程序.您可以克隆并使用代码,也可以单击Gitpod按钮启动在线实例!

8) 准备好了吗?在随附的视频演练中查看更多样板应用程序[[此处](https://github.com/near-apps/)].

## 了解智能合约

智能合约是您应用程序的后端,位于区块链上.一样的,该应用程序仍需要与您以前使用过的前端内容(HTML/CSS/JS),但是所有数据或"状态_(state)_"将存储*在链上*.

- 智能合约运行代码并将数据存储在区块链网络上.
- 前端使用API(JSON RPC接口)与智能合约进行交互.
- `near-api-js` 是我们创建的与NEAR交互的JavaScript库.
- 我们目前支持:
  - [Rust](https://www.rust-lang.org/)
  - [AssemblyScript](https://assemblyscript.org/introduction.html)

## 常见问题

### 1. 从前端向合约发送数据

假设您在合约中定义了一个Rust函数来获取数据:

```ts
pub fn some_method(&mut self, my_data: String) {
    [...]
}
```

在前端调用它时,您将很难发送数据,就像下面的错误所示：

```ts
"ABORT: unexpected string field null : 'YOUR DATA'".
```

您可以在前端调用合约时修复此问题.因为NEAR使用JSON-RPC-API,所有方法都使用**对象**_(objects)_调用.

不是这样调用:

```javascript
contract.someMethod("BAD"); // WRONG WAY TO CALL METHOD!
```

您需要发送带有将在后端使用的变量名的**对象**_(objects)_,就像调用REST API一样.

```javascript
// RIGHT WAY TO CALL METHOD!
contract.someMethod({
    myData: "GOOD"
})
```

### 2. 我尝试调用的函数在哪里?

为了使前端调用智能合约,您需要做两件事.

1. 定义您需要在合约中调用的方法,并确保它们是公开的.(您可能对此很擅长!)
2. 在前端的合约初始化时候,声明您需要调用的方法.(您可能会忘记了这个.)

```javascript
// Initializing our contract APIs by contract name and configuration.
window.contract = await near.loadContract(config.contractName, {
...
  // View methods are read only. They don't modify the state, but usually return some value.
  viewMethods: ["hello"],
  // Change methods can modify the state. But you don't receive the returned value when called.
  changeMethods: [],
...
});
```

调用`loadContract`实际上是使用您的函数创建一个对象,该对象已分配给该`window.contract`变量,以便以后可以调用`window.contract.myFunction`.请注意,`window`始终在范围内,因此您可以调用`contract.myFunction`.

### 3. 我如何将数据保存到区块链?

请查看我们的[数据存储/集合](https://docs.near.org.cn/docs/concepts/data-storage)以深入了解如何在链上存储数据.

上面的链接说明了使用我们的两个软件开发工具包(SDK)之一存储数据的方式：

* [`near-sdk-rs`](https://github.com/near/near-sdk-as) 使用[Rust](https://www.rust-lang.org/)
* [`near-sdk-as`](https://github.com/near/near-sdk-as) 使用[AssemblyScript](https://www.assemblyscript.org/)

> 遇到麻烦了吗?欢迎访问我们的[Discord频道](https://near.chat/),我们将为您提供帮助!
