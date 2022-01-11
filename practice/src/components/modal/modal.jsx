import React, { useState } from 'react'
import Modal from 'react-modal'

const Notice = () => {
    const [modalState,setModalState] = useState(false)
    return (
        <>
        <button onClick={()=> setModalState(!modalState)}></button>
       <Modal isOpen={modalState} onRequestClose={() => setModalState(false)}>
           this is modal
       </Modal>
        </>
    )
}

export default Notice
