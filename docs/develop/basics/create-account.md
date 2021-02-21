---
id: create-account
title: 创建NEAR账户
sidebar_label: 创建账户
---

在NEAR上创建帐户的最简单方法是使用[NEAR Wallet](https://wallet.near.org/). 
NEAR拥有多个[开发网络](/docs/concepts/networks),它们各自使用自己的账户ID彼此独立运行.
以下是在这两个网络中创建帐户的指南：

* [`testnet`](/docs/develop/basics/create-account#creating-a-testnet-account)_(测试网)_
* [`mainnet`](/docs/develop/basics/create-account#creating-a-mainnet-account)_(主网)_

---

## 创建一个 `testnet`_(测试网)_账户

以下指南将逐步指导您使用[NEAR Wallet](https://wallet.testnet.near.org/)创建`testnet`_(测试网)_帐户.

### 预留账户ID

> * 访问 https://wallet.testnet.near.org 并单击 "Create Account".

![mainnet wallet landing](/docs/assets/create-account/mainnet-wallet-landing.jpg)

> * 接下来,输入您喜欢的账户名称.

![mainnet create account](/docs/assets/create-account/testnet-create-account.jpg)

---

### 保存您的账户

> * 选择您的帐户恢复方法,建议使用“助记词"或[Ledger](https://www.ledger.com/)作为最安全的方法.

#### 使用助记词恢复账户

> * 当选择[助记词](https://en.bitcoin.it/wiki/Seed_phrase)方式恢复账户时候,**请务必将其按顺序保存在一个安全的地方!**如果没有助记词,我们也没有备份,并无法帮助您恢复帐户.

![recovery method selection](/docs/assets/create-account/security-method.jpg)

![setup seed phrase](/docs/assets/create-account/seed-phrase.jpg)

#### 电子邮箱/手机号恢复恢复账户

> * 选择电子邮件或文本时,将向您发送**一次性**恢复链接,该链接的URL中包含助记词.
> * **不要删除此消息!**我们无法重新发送此链接给您.如果您无法访问此帐户,除非启用了另一种恢复方法,否则将导致帐户丢失.

![e-mail recovery](/docs/assets/create-account/email-text-recovery.jpg)

---

### 成功!

> 您刚刚创建了一个`testnet`_(测试网)_帐户,并收到200Ⓝ!恢复方法确认后,您将被重定向到帐户仪表盘,类似于下图：

![testnet success](/docs/assets/create-account/testnet-success.jpg)

> * 在这里,您可以查看总余额,可用余额以及链上存储成本所需的最低余额.另外,您可以通过启用*(添加)*或禁用*(删除)*它们来查看和控制[访问密钥](https://docs.near.org.cn/docs/concepts/account#access-keys).

---

## 创建`mainnet`_(主网)_账户

创建一个`mainnet`_(主网)_帐户与`testnet`_(测试网)_<u>几乎</u>相同,但需要在账户中充值初始资金.以下是在`mainnet`_(主网)_创建帐户的指南.

### 预留账户ID

> * 访问 https://wallet.near.org 并单击"Create Account".

![mainnet wallet landing](/docs/assets/create-account/mainnet-wallet-landing.jpg)

> * 接下来,输入您喜欢的账户名称.

![mainnet create account](/docs/assets/create-account/mainnet-create-account.jpg)

---

### 保存您的账户

> * 选择您的帐户恢复方法,建议使用“助记词"或[Ledger](https://www.ledger.com/)作为最安全的方法.

#### 使用助记词恢复账户

> * 当选择[助记词](https://en.bitcoin.it/wiki/Seed_phrase)方式恢复账户时候,**请务必将其按顺序保存在一个安全的地方!**我们并没有备份,如果没有助记词,将无法帮助您恢复帐户.

![recovery method selection](/docs/assets/create-account/security-method.jpg)

![setup seed phrase](/docs/assets/create-account/seed-phrase.jpg)

#### 电子邮箱/手机号恢复恢复账户

> * 选择电子邮件或文本时,将向您发送**一次性**恢复链接,该链接的URL中包含助记词.
>* **不要删除此消息!**我们无法重新发送此链接给您.如果您无法访问此帐户,除非启用了另一种恢复方法,否则将导致帐户丢失.

![e-mail recovery](/docs/assets/create-account/email-text-recovery.jpg)

---

### 账户充值

> * 创建帐户并支付少量初始存储将需要1.1Ⓝ的初始资金.您将收到一个与以下地址类似的临时充值帐户地址.

![fund your account](/docs/assets/create-account/fund-your-account.jpg)

> * 复制该充值帐户地址,然后**打开一个新标签页**以为该帐户充值.在向帐户充值时,请保持此页面处于打开状态,这一点很重要.如果意外关闭,您可以按照以下格式重新打开链接：**wallet.near.org/fund-create-account/YOUR_ACCOUNT.near/FUNDING_ACCOUNT_ADDRESS**

![image](/docs/assets/create-account/url-breakdown.png)

> * 要向该帐户充值,请使用现有的NEAR帐户发送>=1.1Ⓝ到充值帐户地址,或单击“我在哪里可以购买NEAR"去交易所购买一些.然后,您需要向他们提供充值帐户地址.

![purchase near](/docs/assets/create-account/purchase_near.jpg)

> * 一旦账户充值完成,回到您之前打开的"Fund Your Account"标签页.该页面将会自动更新,通知您的帐户已被充值.要完成此过程,请选中确认*您已了解该一次性充值地址将被删除,发送到该地址的其他资产也将丢失*.

![image](/docs/assets/create-account/account-funded.png)

---

### 成功!

> * 您刚刚创建了一个`mainnet`_(主网)_帐户!

![image](/docs/assets/create-account/mainnet-success.jpg)

> * 现在,您应该打开帐户仪表盘,可以查看总余额,可用余额以及链上存储成本所需的最低余额.另外,您可以通过启用*(添加)*或禁用*(删除)*它们来查看和控制[访问密钥](https://docs.near.org.cn/docs/concepts/account#access-keys).

![image](/docs/assets/create-account/mainnet-wallet-dashboard.jpg)

## 访问密钥存储/登出

> **警告!**请确保您已启用恢复方法,并且在执行此操作之前可以正常使用!否则,您将**无法**恢复您的帐户!
>
> 您会注意到,NEAR钱包没有“登出"选项.这是因为您的[访问密钥](https://docs.near.org.cn/docs/concepts/account#access-keys)存储在浏览器的本地存储中.如果您迫切需要禁止浏览器访问帐户,请打开浏览器的开发者工具,然后清除您想要登出的帐户的键/值.

![local storage access key](/docs/assets/create-account/local-storage.png)

> 另外,如果要将[访问密钥](https://docs.near.org.cn/docs/concepts/account#access-keys)保存到硬盘,您可以使用[`near-cli`](https://docs.near.org.cn/docs/tools/near-cli)命令[`near login`](https://docs.near.org.cn/docs/tools/near-cli#near-login).

## 支持

> 您遇到问题了吗,还是您需要进一步的帮助来设置帐户?前往Discord中的[＃wallet-support](https://discord.gg/mGRcBpA8gN)频道.
