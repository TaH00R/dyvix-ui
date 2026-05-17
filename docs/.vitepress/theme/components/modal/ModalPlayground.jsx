import { Modal } from 'dyvix-ui';
import Wrapper from '../Wrapper';
import React from 'react';
import {
  DYVIX_GLOBAL_THEME,
  DYVIX_GLOBAL_ANIMATION,
  DYVIX_MODAL_TYPE
} from 'dyvix-ui';

export default function ModalPlayground() {
  const [config, setConfig] = React.useState([
    {
      utility: 'theme',
      type: 'select',
      options: DYVIX_GLOBAL_THEME,
      current: DYVIX_GLOBAL_THEME.OCEAN,
      format: 'string',
      allowNull: false
    },
    {
      utility: 'animation',
      type: 'select',
      options: DYVIX_GLOBAL_ANIMATION,
      current: DYVIX_GLOBAL_ANIMATION.BUBBLE,
      format: 'string',
      allowNull: false
    },
    {
      utility: 'title',
      type: 'text',
      current: 'Register',
      format: 'string'
    },
    {
      utility: 'type',
      type: 'select',
      options: DYVIX_MODAL_TYPE,
      current: DYVIX_MODAL_TYPE.AUTH,
      format: 'string',
      allowNull: false
    },
    {
      utility: 'elements',
      type: 'config',
      'config-title': "Edit config",
      current: [
        {
          type: 'text',
          placeholder: ['First Name', 'Last Name'],
          id: 'name',
          name: ['firstName', 'lastName'],
          className: 'ex-text',
          amount: 2
        }
      ],
      format: 'object'
    }
  ]);

  const theme = config.find((e) => e['utility'] === 'theme').current;
  const animation = config.find((e) => e['utility'] === 'animation').current;
  const title = config.find((e) => e['utility'] === 'title').current;
  const type = config.find((e) => e['utility'] === 'type').current;
  const elements = config.find((e) => e['utility'] === 'elements').current;
  const probs = {
    ...(theme && { theme: theme }),
    ...(animation && { animation: animation }),
    ...(title && { title: title }),
    ...(type && { type: type }),
    ...(elements && { elements: elements })
  };
  return (
    <Wrapper
      componentConfig={config}
      componentCallback={setConfig}
      tag={'Modal'}
    >
      <Modal onClick={() => console.log('clicked')} {...probs}></Modal>
    </Wrapper>
  );
}
