import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  staticDirs: ['../fonts', '../dist/fonts'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      };
    }

          // Обновляем правила для CSS файлов
      if (config.module && config.module.rules) {
        // Удаляем существующие правила для CSS
        config.module.rules = config.module.rules.filter(rule => {
          if (typeof rule === 'object' && rule.test) {
            return !rule.test.toString().includes('css');
          }
          return true;
        });

        // Добавляем новое правило для CSS, исключая dist папку
        config.module.rules.push({
          test: /\.css$/,
          exclude: /dist/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                  ],
                },
              },
            },
          ],
        });

        // Отдельное правило для CSS файлов в dist папке
        config.module.rules.push({
          test: /\.css$/,
          include: /dist/,
          use: ['style-loader', 'css-loader'],
        });
      }

    return config;
  },
};

export default config;
