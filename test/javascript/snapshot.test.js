const path = require('path');
const { CLIEngine } = require('eslint');

it('rules snapshot', () => {
  const result = new CLIEngine().getConfigForFile(path.resolve(__filename));

  expect(result).toMatchSnapshot();
});
