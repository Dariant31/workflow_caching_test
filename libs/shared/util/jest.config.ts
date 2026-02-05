/* eslint-disable */
import type { Config } from 'jest';
export default {
  displayName: 'common-nestjs-shared-util',

  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/common/nestjs/shared/util',
  preset: '../../../../../jest.preset.js',
  clearMocks: true,
  restoreMocks: true,
} satisfies Config;
