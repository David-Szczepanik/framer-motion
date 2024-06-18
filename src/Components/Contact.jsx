import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {TextField, Button} from '@mui/material';
import {motion, useAnimation} from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

function Contact() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const recaptchaRef = React.createRef();
  const controls = useAnimation();
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  const handleRecaptchaChange = value => {
    if (value) {
      console.log('Recaptcha verified');
      setIsRecaptchaVerified(true);
    } else {
      setIsRecaptchaVerified(false);
    }
  };

  const onSubmit = async (data) => {
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please complete the ReCAPTCHA");
      return;
    }

    recaptchaRef.current.reset();
    setIsRecaptchaVerified(false);

    const emailData = {
      to: 'davidszczepanik@mail.com',
      from: 'davidszczepanik@mail.com',
      subject: `New message from ${data.name} - ${data.email}`,
      text: data.message,
      html: `
      <strong>${data.message}</strong>
      <br>
      <p>From: ${data.email}</p>
      `
    };

    try {
      await axios.post('http://localhost:3000/recaptcha', {token, inputVal: data.message});
      await axios.post('http://localhost:3000/send-email', emailData);
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  const watchFields = watch(["name", "email", "message"]);

  return (
    <motion.div
      style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: 'rgba(0,0,0,0.6)',
        border: '1px solid black',
        cursor: 'default'
      }}
      className="relative rounded-lg flex flex-col justify-center items-center"
      onHoverStart={() => controls.start({
        borderColor: 'rgb(11,142,157)', boxShadow: '0px 0px 10px 2px rgb(6,65,152)'
      })}
      onHoverEnd={() => controls.start({borderColor: 'rgb(0,0,0)'})}
      animate={controls}
    >
      <div style={{fontFamily: 'Bookerly', fontSize: '18px', color: 'white'}}>
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
          <br/>
          <h2>Contact me</h2>
          <TextField
            type="text"
            label="Name"
            variant="outlined"
            margin="normal"
            autoComplete="name"
            {...register("name", {required: true})}
            sx={{'& label': {color: 'white'}, input: {color: 'white', fontFamily: 'Bookerly'}}}
            className="mb-4"
          />
          {errors.name && <span style={{color: 'red', fontSize: 12}}>This field is required</span>}
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            autoComplete="email"
            {...register("email", {
              required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email address'
              }
            })}
            sx={{'& label': {color: 'white'}, input: {color: 'white', fontFamily: 'Bookerly'}}}
            className="mb-4"
          />
          {errors.email && <span style={{color: 'red', fontSize: 12}}>{errors.email.message}</span>}
          <TextField
            type="tel"
            label="Mobile number"
            variant="outlined"
            margin="normal"
            autoComplete="tel"
            {...register("mobile", {
              required: false,
              pattern: {
                value: /^[1-9]\d{5,11}$/,
                message: 'Invalid mobile number. This field must be between 6 and 12 characters'
              }
            })}
            sx={{'& label': {color: 'white'}, input: {color: 'white', fontFamily: 'Bookerly'}}}
            className="mb-4"
          />
          {errors.mobile && <span style={{color: 'red', fontSize: 12}}>{errors.mobile.message}</span>}
          <TextField
            multiline
            rows={4}
            label="Message"
            variant="outlined"
            margin="normal"
            {...register("message", {required: true})}
            sx={{
              '& label': {color: 'white'},
              '& .MuiInputBase-input': {color: 'white'},
              input: {color: 'white', fontFamily: 'Bookerly'}
            }}
            className="mb-4 w-11/12"
          />
          {errors.message && <span style={{color: 'red', fontSize: 12}}>This field is required</span>}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.RECAPTCHA_SITE_KEY}
            onChange={handleRecaptchaChange}
            className="mt-4"
          />
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
