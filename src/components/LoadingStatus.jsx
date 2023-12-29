import { Container } from "react-bootstrap";

function LoadingStatus() {
  return (
    <Container
      fluid
      className="loading-section d-flex align-items-center justify-content-center"
    >
      <i className="fas fa-circle-notch fa-spin"></i>
      <div className="loading-text">Loading...</div>
    </Container>
  );
}

export default LoadingStatus;
