module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|md|mdx)"],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-events',
    '@storybook/addon-options',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-postcss',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    },
  ],
};

