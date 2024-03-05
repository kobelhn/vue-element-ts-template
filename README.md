# vue-element-admin

一个简易的Vue3 + Vite + TypeScript + Element Plus 后台管理系统模板

## 启动项

```sh
pnpm install
```

### 开发模式

```sh
pnpm dev
```

### 打包

```sh
pnpm build
```

### 运行单元测试

```sh
pnpm test:unit
```

### 运行端到端测试

```sh
pnpm test:e2e:dev
```

发布生产前进行端到端测试

```sh
pnpm build
pnpm test:e2e
```

### 代码格式检验

```sh
pnpm lint
```


## 构建记录

- 根据[官方文档](https://cn.vuejs.org/guide/quick-start.html)的步骤构建基础框架
- 添加`husky`和`czg`
- 添加`tailwindcss`、`postcss`、`autoprefixer`
- 使用命令`npx tailwindcss init -p --ts --full`生成`tailwind.config.ts`文件和`postcss.config.js`文件
- 更换`tailwindcss.config.ts`文件中的`content`属性为`['./src/**/*.{html,js,vue,tsx,jsx}']`
- 添加`styles/main.css`文件并引入`tailwindcss`的基础样式
- 清理不需要的`router`、`store`和`views`文件，以及`components`文件夹和`assets`文件夹