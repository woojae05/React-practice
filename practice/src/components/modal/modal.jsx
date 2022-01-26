import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

const Notice = () => {
    const [modalState,setModalState] = useState(false);
    const [state , setState] = useState(1);

    useEffect(() => {    
      return () => {
        console.log(state)
      };
    }, [state]);
    
    return (
        <>
        <div onClick={() => {setState(2)}}>hi</div>
        <button onClick={()=> setModalState(!modalState)}></button>
       <Modal isOpen={modalState} onRequestClose={() => setModalState(false)}>
           this is modal
       </Modal>
        </>
    )
}

export default Notice
