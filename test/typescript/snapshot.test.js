/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { ESLint } = require('eslint');

it('rules snapshot', async () => {
  const result = await new ESLint().calculateConfigForFile(path.resolve(__filename));

  delete result.parser;

  expect(result).toMatchSnapshot();
});
