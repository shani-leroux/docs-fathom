
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
<PythonCode GLink='AI_ML/TEXT_SUMMARIZATION/BART_LARGE_CNN/BART_LARGE_CNN.py'>{PythonSource}</PythonCode>

<SectionBreak />

    

[//]: # (Examples)

## Examples

import Example1 from './examples/EX1/example.md';
import App1 from '!!raw-loader!./examples/EX1/app.txt';
import appImg from './examples/EX1/app.jpeg'
import outputImg from './examples/EX1/output.jpeg'

<AppDisplay 
    nodeLabel='BART_LARGE_CNN'
    appImg={appImg}
    outputImg={outputImg}
    >
    {App1}
</AppDisplay>

<Example1 />

<SectionBreak />
  
    

[//]: # (Appendix)

import Notes from '!!raw-loader!./appendix/notes.md';
import Hardware from '!!raw-loader!./appendix/hardware.md';
import Media from '!!raw-loader!./appendix/media.md';

## Appendix

<AppendixSection index={0} folderPath='nodes/AI_ML/TEXT_SUMMARIZATION/BART_LARGE_CNN/appendix/'>{Notes}</AppendixSection>
<AppendixSection index={1} folderPath='nodes/AI_ML/TEXT_SUMMARIZATION/BART_LARGE_CNN/appendix/'>{Hardware}</AppendixSection>
<AppendixSection index={2} folderPath='nodes/AI_ML/TEXT_SUMMARIZATION/BART_LARGE_CNN/appendix/'>{Media}</AppendixSection>

