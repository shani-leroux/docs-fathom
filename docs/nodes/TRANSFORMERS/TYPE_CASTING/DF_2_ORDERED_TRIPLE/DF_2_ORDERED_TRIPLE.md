<!--- Add SEO here --->

[//]: # (Custom component imports)

import DocString from '@site/src/components/DocString';
import PythonCode from '@site/src/components/PythonCode';
import AppDisplay from '@site/src/components/AppDisplay';
import SectionBreak from '@site/src/components/SectionBreak';
import AppendixSection from '@site/src/components/AppendixSection';

[//]: # (Docstring)

import DocstringSource from '!!raw-loader!./a1-[autogen]/docstring.txt';
import PythonSource from '!!raw-loader!./a1-[autogen]/python_code.txt';

<DocString>{DocstringSource}</DocString>
<PythonCode GLink='TRANSFORMERS/TYPE_CASTING/DF_2_ORDERED_TRIPLE/DF_2_ORDERED_TRIPLE.py'>{PythonSource}</PythonCode>

<SectionBreak />

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.json';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='DF_2_ORDERED_TRIPLE'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />

[//]: # (Appendix)

## Appendix

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

<AppendixSection index={0} folderPath='nodes/TRANSFORMERS/TYPE_CASTING/DF_2_ORDERED_TRIPLE/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/TRANSFORMERS/TYPE_CASTING/DF_2_ORDERED_TRIPLE/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/TRANSFORMERS/TYPE_CASTING/DF_2_ORDERED_TRIPLE/appendix/'>{Media}</AppendixSection>