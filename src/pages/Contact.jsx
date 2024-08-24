import {useState} from 'react'

function Contact() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = userState('')
    const [message, setMessage] = useState('')//replace with formData, setFormData, unseState(initialFormData)

    const [alertMessage, setAlertMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const accessKey = '7eb217a1-fc7c-4e8b-ae64-33e646556c6b'
        const url = 'hhtps://api/web3forms.com/submit'

        const res = await axios.post(url, {//formData instade of object
            fullName,
            email,
            message,
            access_key: accessKey
        })
        setAlertMessage('Your Submission was received')
        setFullName('')
        setEmail('')
        setMessage('')

        setAlertMessage('Your submisison was received')

        setTimeout(() => {
            setAlertMessage('')

        }, 3500)
    }
    //const handleInputChange = (event) => {
    //  const dataProp = event.target.name   
    //  setFormData({
    //      ...formData,
    //      [dataProp]: event.target.value
        //})
    //}
    const handleFullNameChange = (event) => {
        setFullName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }

    return(
        <>
        <h1 className="text-center light-font">Contact</h1>

        {alertMessage && <p className="text-center alert-message"></p>}

        <form onSubmit={handleSubmit} className="contact-form column">
            <input type="text" onChange={handleFullNameChange} name="fullName" placeholder='Enter your name here'/>
            <input type="email" onChange={handleEmailChange} name="email" placeholder='Enter your email here'/>
            <label>Please choose the stack you are inquiring about</label>
            <select name="stack">
                <option value="none" defaultValue={true}>None</option>
                <option value="MERN">MERN</option>
                <option value="MEAN">MEAN</option>
                <option value="MEVN">MEVN</option>
            </select>
            <input type="message" onChange={handleMessageChange} name="message" placeholder='Enter your message here'/>
            <button>Send</button>
        </form>
        </>
    )
}

export default Contact
