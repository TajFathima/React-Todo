import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { Table, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

export const TodoContext = createContext();

const App = () => {
  const [todos, dispatchTodos] = useImmerReducer(
    todoReducer,
    FORM_INITIAL_STATE
  );
  return (
    <TodoContext.Provider value={[todos, dispatchTodos]}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={todos} columns={FORM_COLUMNS} />
        </Col>
      </Row>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <AddTodoForm />
        </Col>
      </Row>
    </TodoContext.Provider>
  );
};

export default App;