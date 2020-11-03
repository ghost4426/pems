import { Modal } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import './style.css';

function useWindowWidth(): number {
  const [windowWidth, setWindowDimensions] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default function DocumentModal(props: {
  url: string;
  fileType: string;
  visible: boolean;
  onDismiss: () => void;
}): JSX.Element {
  const { url, fileType, visible, onDismiss } = props;

  const width = useWindowWidth();
  const modalWidth = width * 0.9;

  const handleDimiss = useCallback(() => {
    onDismiss();
  }, [onDismiss]);

  return (
    <Modal
      visible={visible}
      onOk={handleDimiss}
      onCancel={handleDimiss}
      width={modalWidth}
      closable={fileType !== 'pdf'}
      footer={null}
      className={'document_modal'}
      destroyOnClose={true}
    >
      <img
        style={{ width: '100%' }}
        alt={'document'}
        className={'no-event'}
        src={'/line-avatar/RGB_Line.png'}
        width={modalWidth}
      />
    </Modal>
  );
}
