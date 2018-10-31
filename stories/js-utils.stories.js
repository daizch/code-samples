import {document, console} from 'global';
import {storiesOf} from '@storybook/html';
import {withConsole} from '@storybook/addon-console'

storiesOf('[js] utils', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    console.log('test')
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });
