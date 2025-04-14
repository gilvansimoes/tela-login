import './Footer.css';
function Footer() {
  return (
    <>
      <div className='footer'>Desenvolvido por Gilvan Simoes &copy; <span>{new Date().getFullYear()}</span></div>
    </>
  )
}

export default Footer