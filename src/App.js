import React, { useState } from 'react';
import '../src/App.css';
import Header from './components/Header';
import { getCompletion } from './api';
import { Button, Container, Form, Table } from 'react-bootstrap';

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState([]);

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const messages = await getCompletion(input);
      setResponse(prevResponse => prevResponse.concat(messages));
      setInput('');
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="input">
            <Form.Label>Enter your prompt:</Form.Label>
            <Form.Control
              type="text"
              value={input}
              onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </Container>
      <Table striped bordered>
        <tbody>
          {response.map((message, index) => (
            <tr key={index}>
              <td>
                <pre><code>{message}</code></pre>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
