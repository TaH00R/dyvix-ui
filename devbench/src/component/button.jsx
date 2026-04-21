import { DyvixButton } from 'dyvix-ui';

export function ButtonTest() {
  return (
    <>

      <DyvixButton onClick={() => console.log('clicked')} animation={'bubble'} theme={"Neon"}>
      Submit
    </DyvixButton>
    </>
  );
}
