# webpack5-guide

learn

## 预获取

> 将来某些导航下可能需要的资源

```javascript
import(/* webpackPrefetch: true */ './path/xxx')
```

## 预加载

> 当前导航下可能需要的资源

```javascript
import(/* webpackPreload: true */ 'xxx')
```

## 环境变量

> 要使用 env 变量，你必须将 module.exports 转换成一个函数

```javascript
npx webpack --env goal=local --env production --progress
```

## 在内存中编译

- webpack-dev-server
- webpack-hot-middleware
- webpack-dev-middleware

## 避免额外的优化任务

webpack 通过执行额外的算法任务，来优化输出结果的体积和加载性能。这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能：

```javascript
module.exports = {
  // ...
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
}
```

## 输出结果不携带路径信息

webpack 会在输出的 bundle 中生成路径信息。然而，在打包数千个模块的项目中，这会导致造成垃圾回收性能压力。在 options.output.pathinfo 设置中关闭：

```javascript
module.exports = {
  // ...
  output: {
    pathinfo: false,
  },
}
```
