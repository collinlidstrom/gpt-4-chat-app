import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PromptForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formPrompt">
        <Form.Label>Enter Prompt: </Form.Label>
        <Form.Control type="text" placeholder="Enter prompt.." />
        <Form.Text className="text-muted">
          Please state your prompt as a question.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PromptForm;