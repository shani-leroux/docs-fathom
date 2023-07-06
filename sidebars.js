const unflatten = require('flat').unflatten;
const fs = require('fs');

const data = fs.readFileSync('nodeSidebar.json', 'utf8');
const nodesObj = JSON.parse(data);

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // nodesSidebar: [{type: 'autogenerated', dirName: '.'}],

  main: [
    {
      type: 'doc',
      id: 'getting-started/install',
      label: 'Installation',
    },
    {
      type: 'category',
      label: 'Node Examples',
      items: unflatten(nodesObj, { object: false, delimiter: '>' }),
    },
    {
      type: 'category',
      label: 'General Tutorials',
      items: ['nodes/introduction', 'nodes/ctrls'],
    },
    {
      type: 'category',
      label: 'Advanced Tutorials',
      items: [
        'advanced-usage/flojoy-python-library',
        'advanced-usage/small-memory',
        {
          type: 'category',
          label: 'Active Feedback Control',
          items: [
            'advanced-usage/feedback-control/active-feedback',
            'advanced-usage/feedback-control/model-systems',
            'advanced-usage/feedback-control/pid',
          ],
        },
        {
          type: 'category',
          label: 'Node Architecture',
          items: [
            'custom-nodes/custom-nodes',
            'custom-nodes/data-container',
            'custom-nodes/creating-custom-node',
            'custom-nodes/custom-category',
            'custom-nodes/contributing-nodes',
            'custom-nodes/node-api-reference',
          ],
        },
      ],
    },
  ],
};
module.exports = sidebars;
