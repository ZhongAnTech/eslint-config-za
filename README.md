# eslint-config-za

[![npm version](https://badge.fury.io/js/eslint-config-za.svg)](https://www.npmjs.com/package/eslint-config-za)

众安 **ESLint** 规则  
基于[airbnb](https://github.com/airbnb/javascript)的 ESLint 规则，进行二次定制。


## 使用

### JavaScrip

```
npm install --save-dev eslint babel-eslint eslint-plugin-import eslint-config-za
```

```json
{
  "root": true,
  "extends": "za"
}

```

### React

```
npm install --save-dev eslint babel-eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-za
```

```json
{
  "root": true,
  "extends": "za/react"
}

```

### Vue

```
npm install --save-dev eslint babel-eslint eslint-plugin-import eslint-plugin-vue eslint-config-za
```

```json
{
  "root": true,
  "extends": "za/vue"
}

```

### TypeScript

```
npm install --save-dev eslint typescript @typescript-eslint/eslint-plugin eslint-plugin-import eslint-config-za
```

```json
{
  "root": true,
  "extends": "za/typescript"
}

```

## VSCode 中使用
VSCode 的 ESLink 插件默认并不支持 `vue` `ts` `tsx`，需要自行修改插件配置。配置参考如下

```
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        ""vue"
    ]
}
```


## 提示

**eslint-config-za** 定义了相应的 `peerDependencies`。因此选择不同规则时需要自行安装对应的依赖。具体参考[使用](#使用)说明。  

```
npm info "eslint-config-za@latest" peerDependencies
npx install-peerdeps --dev eslint-config-za
```

### 打印规则

> npx eslint --print-config .eslintrc > /path/you/file

## 规则链接
[eslint](https://github.com/eslint/eslint/tree/master/docs/rules)  
[import](https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules)  
[jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules)  
[react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)  
[react-hooks](https://reactjs.org/docs/hooks-rules.html)  
[typescript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules)