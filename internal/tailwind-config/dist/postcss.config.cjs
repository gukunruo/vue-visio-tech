'use strict';

const index = require('./index.cjs');
require('node:path');
require('@iconify/tailwind');
require('@manypkg/get-packages');
require('@tailwindcss/typography');
require('tailwindcss-animate');
require('tailwindcss/plugin.js');

const postcss_config = {
  plugins: {
    ...process.env.NODE_ENV === "production" ? { cssnano: {} } : {},
    // Specifying the config is not necessary in most cases, but it is included
    autoprefixer: {},
    // 修复 element-plus 和 ant-design-vue 的样式和tailwindcss冲突问题
    "postcss-antd-fixes": { prefixes: ["ant", "el"] },
    "postcss-import": {},
    "postcss-preset-env": {},
    tailwindcss: { config: index },
    "tailwindcss/nesting": {}
  }
};

module.exports = postcss_config;
