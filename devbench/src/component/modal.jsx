import { Modal, DYVIX_MODAL_THEME, DYVIX_GLOBAL_ANIMATION } from 'dyvix-ui';

export function ModalTest() {
  const testData = Array.from({ length: 9 }, (_, i) => ({
    type: 'text',
    name: `field_${i}`,
    placeholder: `Extended Field ${i + 1}`,
    amount: 1
  }));

  return (
    <Modal
      title="Register"
      Id="register-modal"
      Class="modal"
      theme="Aurora"
      animation="glitch"
      type="form"
      elements={[
        {
          type: 'text',
          placeholder: ['First Name', 'Last Name'],
          id: 'name',
          name: ['firstName', 'lastName'],
          className: 'ex-text',
          amount: 2
        },
        {
          type: 'email',
          placeholder: 'Email',
          validation: 'email',
          id: 'email',
          name: 'email',
          className: 'ex-text',
          amount: 1
        },
        {
          type: 'password',
          placeholder: 'Password',
          validation: 'password',
          id: 'password',
          name: 'password',
          className: 'ex-text',
          amount: 1
        }
      ]}
      onSubmit={(data) => console.log(data)}
      onChange={(data) => console.log(data)}
    />
  );
}
