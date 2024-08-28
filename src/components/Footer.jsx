const footerStyles = {
    backgroundColor: '#ccc',
    padding: '50px',
    color: '#555'
  }
  
  function Footer() {
    return (
      <footer style={footerStyles} className="main-footer row justify-between align-center">
        <p>Copyright 2024</p>
        <a href="https://github.com/6358cy2024">My Github Page</a>
        <p>Created By Christian Yanez</p>
      </footer>
    )
  }
  
  export default Footer