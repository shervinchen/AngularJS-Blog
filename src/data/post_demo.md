## aaa
Node.js 自带强大的加密功能 Crypto，它是基于 OpenSSL 库实现的加密技术。DES是一种对称加密算法，密匙长度必须是8的整数倍，在一些简单的应用场景经常被使用。
为了网络上信息传输的安全（防止第三方窃取信息看到明文），发送发和接收方分别进行加密和解密，这样信息在网络上传输的时候就是相对安全的。

## bbb
DES 加密模式有： Electronic Codebook (ECB) , Cipher Block Chaining (CBC) , Cipher Feedback (CFB) , Output Feedback (OFB)。这里以密文分组链接模式 CBC 为例，使用了相同的 key 和 iv (Initialization Vector)

[baidu](http://www.baidu.com)

游戏的界面是由一个一个圆圈组成的，所以游戏的基本要素之一就是这些“圆圈”了，不过我更喜欢叫它“格子”`Grid`这个名字。虽然更抽象了，但是从程序的角度来看，反而更利于我们去抽取它应该具有的属性和方法了。

一个格子要呈现在画面上，无论如何我们也要知道它的位置吧，所以它此时在整个画面上所处的行数`gridRow`和列数`gridCol`就是必不可少的了。（将画布上的坐标映射成行列数能大大简化后面的运算操作）

然后在游戏的进行过程中，格子会有猫和障碍这两种状态，如果再加上它自己默认的状态的话，就会有三种基本状态了。因此，必须为格子增加类型`type`这个属性。（还剩一个属性，在后面介绍搜索算法时再给出定义）

这样，程序中最重要的`Grid`对象就定义好了：
```javascript
/* 定义格子 */
var Grid = function(gridRow, gridCol, type, isWalkable) {
    this.gridRow = gridRow; // 格子所处行数
    this.gridCol = gridCol; // 格子所处列数
    this.gridType = type; // 格子类型 0默认 1障碍 2猫
    this.isWalkable = isWalkable; // 格子是否可行   true可行 false不可行
};
```
*This* **is** [markdown](https://daringfireball.net/projects/markdown/) in a include file.
