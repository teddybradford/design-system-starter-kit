import path from 'path';
import { Configuration } from 'webpack';

interface CustomConfig {
  config: Configuration;
}

export default async ({ config }: CustomConfig) => {
  if (config.module && config.module.rules) {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ['ts-loader', 'react-docgen-typescript-loader'],
      include: path.resolve(__dirname, '../src')
    });
  }

  if (config.resolve && config.resolve.extensions) {
    config.resolve.extensions.push('.ts', '.tsx');
  }

  return config;
};
