# eslint-config-za

众安健康**eslint**规则  
基于[airbnb](https://github.com/airbnb/javascript)提供的的eslint规则，进行二次定制。

## 使用
添加 `"extends": "za"` 或 `"extends": "za/es"` 到 .eslintrc/.eslintrc.json

```json
{
  "root": true,
  "extends": "za"
}

```

## 提示

**`eslint-config-airbnb peerDependencies`**  

不同规则依赖的模块有所不同，使用时按需选择。  

>`za` peerDependencies `eslint` `eslint-plugin-import` `eslint-plugin-react` `eslint-plugin-jsx-a11y`  
>`za/es` peerDependencies `eslint` `eslint-plugin-import`  


## 版本修订说明
项目版本不完全遵守语义化版本规则。  
>__参考__  
>主版本：eslint迭代  
>次版本：airbnb迭代  
>修订号：规则迭代  

## 规则链接
[eslint](https://github.com/eslint/eslint/tree/master/docs/rules)  
[import](https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules)  
[jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules)  
[react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)