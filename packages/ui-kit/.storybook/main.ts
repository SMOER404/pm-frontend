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
  staticDirs: ['../fonts', '../dist/fonts', '../image'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      };
    }

          // Remove existing CSS rules to avoid conflicts
      if (config.module && config.module.rules) {
        config.module.rules = config.module.rules.filter(rule => {
          if (rule && typeof rule === 'object' && 'test' in rule && rule.test) {
            return !rule.test.toString().includes('css');
          }
          return true;
        });

      // Add proper CSS rule with PostCSS for Tailwind CSS
      config.module.rules.push({
        test: /\.css$/,
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
                config: true, // Use postcss.config.mjs
              },
            },
          },
        ],
      });

      // Add rule for fonts
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      });
    }

    return config;
  },
};

export default config;
