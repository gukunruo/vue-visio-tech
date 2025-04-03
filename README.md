# vue-visio-tech

自我练习项目，包含很多新奇的技术以及实用功能，持续更新中...

## vben admin pro介绍

采用 Vue Vben Admin 版本`5.0` 一个免费开源的中后台模板，采用了最新的 Vue 3、Vite、TypeScript 等主流技术开发

[Vben使用文档地址](https://doc.vben.pro/guide/introduction/vben.html) 测试账号: starmap/123456

### 环境

- Node: v20及以上版本 `nvm use v20`

### 为什么使用 pnpm

1. 安装速度更快，占用的项目体积更小。
2. 解决幽灵依赖问题——不在根目录的 package.json 中列出的依赖包不允许直接引用。这样做存在风险，会增加排查问题的难度。

- 如果在安装依赖过程中遇到“Cannot read properties of null (reading ‘pickAlgorithm’)”的错误，可以尝试删除 package-lock.json 文件后重新安装依赖。

## 依赖安装（首次或者后续更新）

```bash
cd vue-visio-tech

corepack enable

pnpm install
```

- 运行

```bash
# 指令三选一
pnpm serve
pnpm dev 然后回车【选择`admin`启动】
pnpm dev:admin
```

- 构建

```bash
pnpm build
```

## 如何开发

### 如何新增页面 路由如何配置

<!-- markdown image -->

![如何开发](./如何开发.png '如何开发')

```
src/router/routes/modules/index.ts

使用Vite 独有的 import.meta.glob() 动态导入指定目录下的模块 下面配置（'./modules/**/*.ts'）是目录下的所有路由
也可以自己配置展示的路由，改为['./modules/{home,xxx}/*.ts']即可

const dynamicRouteFiles = import.meta.glob('./modules/**/*.ts', {
  eager: true,
});
```

## 代码规范

### Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

- 开发分支：feature
- 测试分支：release
- 灰度分支：pre
- 线上分支：master（构建需要通过新建Tag）

### 命名规范

- 文件夹：使用 kebab-case（短横线分隔命名法），例如 user-profile。
- 组件名称：使用 kebab-case（短横线分隔命名法），例如 user-profile.vue。
- 路由名称：使用 PascalCase（驼峰式命名法），例如 Project。
- Props：使用 camelCase（小驼峰式命名法），例如 isFollowing。
  - 方法：使用动词开头的 camelCase，例如 followUser。
- CSS 命名规范 **BEM (Block Element Modifier)**：

  Block：.user-profile Element：.user-profile**avatar, .user-profile**info Modifier：.user-profile--modifier-name（此示例中没有使用）Scoped Styles：

      使用 <style scoped> 确保样式仅应用于当前组件，避免全局污染。
      通过遵循这些命名和样式规范，可以确保代码结构清晰、易于理解和维护。

- 变量命名，特别是boolean 类型：is has can should 开头，如 isComponent, hasEnded, canShow,，有的是形容词，就不必了 visible, open

## 偏好设置

```
偏好设置在src下的performances.ts中配置，可以在系统设置中复制想要配置，然后粘贴到performances.ts中进行默认配置覆盖
```

## 浏览器支持

本地开发推荐使用`Chrome 80+` 浏览器

支持现代浏览器, 不支持 IE
