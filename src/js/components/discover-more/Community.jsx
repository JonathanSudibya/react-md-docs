import React from 'react';

import Markdown from '../../containers/Markdown';

const markdown = `
# Community

If you want to see the progress of \`react-md\` or reach out to the community with a question,
you can chat with me on [gitter](https://gitter.im/mlaursen/react-md) or use the contact email.
`;

export default () => <Markdown markdown={markdown} className="container text-container" />;
