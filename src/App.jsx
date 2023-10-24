import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container, Row, Col, Form, Modal } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not Completed"); // Initial status
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTodoId, setEditTodoId] = useState(0);

  const addTodo = () => {
    if (taskName.trim() === "") {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      taskName,
      description,
      status,
    };
    setTodos([...todos, newTodo]);
    setTaskName("");
    setDescription("");
    setStatus("Not Completed");
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const openEditModal = (id) => {
    setEditTodoId(id);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const editTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editTodoId) {
        todo.taskName = taskName;
        todo.description = description;
        todo.status = status;
      }
      return todo;
    });
    setTodos(updatedTodos);
    closeEditModal();
  };

  return (
    <Container className="App">
      <h1 className="text-center">My Todo</h1>
      <Row>
        <Col xs={4}>
          <Form.Control
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </Col>
        <Col xs={6}>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
        
        <Col xs={2}>
          <Button variant="success" onClick={addTodo}>
            Add Todo
          </Button>
        </Col>
      </Row>
      <Row>
        {todos.map((todo) => (
          <Col xs={4} key={todo.id}>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Name: {todo.taskName}</Card.Title>
                <Card.Text>Description: {todo.description}</Card.Text>
                <Card.Text>Status: {todo.status}</Card.Text>

                <Button
                  variant="primary"
                  onClick={() => openEditModal(todo.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showEditModal} onHide={closeEditModal} >
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="mb-4"/>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4"/>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={editTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
