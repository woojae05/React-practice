import *  as React from 'react';
import {Row, Col, Divider, Button, Modal, Input, Rate} from 'antd';
import { observer } from 'mobx-react';
import { useStore } from './states/context';
import Card from "./card";

const MobxComponent = observer(() => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [newRate, setNewRate] = React.useState(0);
  const [newTitle, setNewTitle] = React.useState('');
  const {movieStore} = useStore();

  const onRateChange = (value) => {
    setNewRate(value);
  }

  const onModalOk = () => {
    movieStore.createMovie(newTitle, newRate);
    setNewRate(0);
    setNewTitle('');
    setIsModalOpen(false);
  }

  const onDelete = (id) => {
    movieStore.deleteMovie(id);
  }

  const onChangeRate = (id, rate) =>{
    movieStore.changeRate(id,rate);
  }
  return (
    <>
        <Row justify="center">
            <Button type="primary" danger onClick={() => setIsModalOpen(true)}>
                추가하기
            </Button>
        </Row>
        <Divider/>
        {
            movieStore.movies.map(
                (x) => (
                    <>
                        <Row justify="center">
                            <Card key={x.id}
                                  title={x.title}
                                  rate={x.rate}
                                  onChange={(value)=> onChangeRate(x.id, value)}
                                  onDelete={() => onDelete(x.id)}/>
                        </Row>
                        <Divider/>
                    </>
                )
            )
        }
        <Modal title="추가하기" visible={isModalOpen} onOk={onModalOk} onCancel={() => setIsModalOpen(false)}>
            <Input placeholder="영화의 이름을 입력 해주세요." value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
            <Rate onChange={onRateChange} value={newRate}/>
        </Modal>
    </>
)
});

export default MobxComponent;
