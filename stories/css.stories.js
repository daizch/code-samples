import {document, console} from 'global';
import {storiesOf} from '@storybook/html';
import '../css/reset.css'
import '../css/global.less'
import '../css/flex.less'
import '../css/auto-fix.less'

import attrMd from './note.md'

storiesOf('[css] auto&fix', module)
  .add('flex auto&fix width', () => {
    return `<div class="flex-wrap">
  <div class="flex-auto-width-wrap">
    <ul>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
      <li>
        <div class="inner-wrap">
          <label>一个label</label>
          <div class="label-input">
            这是一个li标签这是一个li标签
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="flex-fix-width">
    <button>我是一个按钮</button>
    <button>我是一个按钮</button>
  </div>
</div>`
  })
  .add('inline auto', ()=>{
    return `<div class="clearfix inline-auto-wrap">
              <div class="float-wrap">
              <div>wrap</div>
              </div>
              testtesttesttesttesttest
            </div>`
  }, {
    notes: '基于float的自适应',
  })
  .add('float & inline', ()=>{
    return `<div class="clearfix auto-float-wrap">
              <div class="float-wrap">
              <div>wrap</div>
              </div>
              <div class="auto-wrap">
              <ul>
              <li>abcdefg</li>
              <li>abcdefg</li>
              <li>abcdefg</li>
</ul>
</div>
            </div>`
  });

storiesOf('[css] data-attr', module)
  .add('伪元素属性content之attr', () => {
    setTimeout(()=>{
      document.querySelector('.inner-text').dataset.text = 'changed text'
    },3e3)

    return `<style>
    .inner-text:before {
      content: attr(data-text);
      color: #333333;
    }
  </style>
  <div class="inner-text" data-text="inner text"></div>`
  }, {
    notes: {markdown: attrMd},
  });