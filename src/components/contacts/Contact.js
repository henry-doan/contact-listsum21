
const Contact = ({ id, firstName, phone, deleteContact }) => {
  return(
    <>
      <h1>{firstName} with id: {id}</h1>
      <p>{phone}</p>
      <button onClick={() => deleteContact(id)}>Delete</button>
      {/* <button onClick={deleteContact(id)}>Delete</button> */}
    </>
  )
}

export default Contact;