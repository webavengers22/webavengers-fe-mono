import { useState } from 'react';
import { Modal } from 'ui';

export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <article>
        <div>로그인</div>
        <button onClick={openModal}>모달열기</button>
        <Modal
          title={'title'}
          children={'body'}
          isOpen={isOpen}
          onClose={closeModal}
          disabledBackdrop={true}
        ></Modal>
      </article>
    </>
  );
}
