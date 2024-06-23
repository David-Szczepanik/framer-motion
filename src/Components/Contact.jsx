import React, {useState, useRef} from 'react';
import {useForm} from 'react-hook-form';
import {TextField, Button} from '@mui/material';
import {motion, useAnimation} from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import HikingIcon from '@mui/icons-material/Hiking';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const recaptchaRef = useRef();
  const animControls = useAnimation();
  const animControls2 = useAnimation();
  const animControls3 = useAnimation();
  const [, setIsRecaptchaVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    setIsRecaptchaVerified(!!value);
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
      await axios.post('https://szczepanik.cz:3000/recaptcha', {token, inputVal: data.message});
      await axios.post('https://szczepanik.cz:3000/send-email', emailData);
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };

  return (
    <>
      {/*Contact Me*/}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-72">
        <motion.div
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            border: '1px solid black',
            cursor: 'default',
            paddingTop: '1rem',
            width: '18%',
            paddingBottom: '1rem',
            maxWidth: '500px',
            minWidth: '320px',
            margin: '20px',
          }}
          className="relative rounded-lg flex flex-col justify-center items-center"
          onHoverStart={() => animControls.start({
            borderColor: 'rgb(11,142,157)', boxShadow: '0px 0px 10px 2px rgb(6,65,152)'
          })}
          onHoverEnd={() => animControls.start({borderColor: 'rgb(0,0,0)'})}
          animate={animControls}
        >
          <div style={{fontFamily: 'Bookerly Italic', fontSize: '22px', color: 'white', fontWeight: 'bold'}}>
            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
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
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
                className="mt-4"
              />
            </form>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center items-center">

          {/*About Me - Skills*/}
          <motion.div
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              border: '1px solid black',
              cursor: 'default',
              width: '100%',
              maxWidth: '500px',
              margin: '20px',
            }}
            className="relative rounded-lg flex flex-col justify-center items-center"
            onHoverStart={() => animControls3.start({
              borderColor: 'rgb(11,142,157)', boxShadow: '0px 0px 10px 2px rgb(6,65,152)'
            })}
            onHoverEnd={() => animControls3.start({borderColor: 'rgb(0,0,0)'})}
            animate={animControls3}
          >
            <h2 style={{
              fontFamily: 'Bookerly Italic',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '18px'
            }}>
              Six-Month Retraining Course</h2>
            <p className="font-bookerly">VŠB - Technical University of Ostrava</p>
            <div style={{fontFamily: 'Bookerly', fontSize: '18px', color: 'white', paddingTop: '15px', paddingBottom:'18px'}}>
              <ul className="list-none p-0 m-0">
                <li className="flex items-center mb-2">
                  <ComputerIcon style={{marginRight: '8px', color: 'white'}}/>HTML, CSS, JavaScript
                </li>
                <li className="flex items-center mb-2">
                  <BuildIcon style={{marginRight: '8px', color: 'white'}}/>React, Angular, Bootstrap
                </li>
                <li className="flex items-center mb-2">
                  <LanguageIcon style={{marginRight: '8px', color: 'white'}}/>SQL, PL/SQL
                </li>
                <li>
                  <LanguageIcon style={{marginRight: '8px', color: 'white'}}/>OOP in C#, Java
                </li>
              </ul>
            </div>
          </motion.div>

          {/*About Me - Hobbies*/}
          <motion.div
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              border: '1px solid black',
              cursor: 'default',
              width: '100%',
              maxWidth: '500px',
              margin: '20px'
            }}
            className="relative rounded-lg flex flex-col justify-center items-center"
            onHoverStart={() => animControls2.start({
              borderColor: 'rgb(11,142,157)', boxShadow: '0px 0px 10px 2px rgb(6,65,152)'
            })}
            onHoverEnd={() => animControls2.start({borderColor: 'rgb(0,0,0)'})}
            animate={animControls2}
          >
            <h2 style={{
              fontFamily: 'Bookerly Italic',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '18px'
            }}>
              Hobbies</h2>
            <div style={{fontFamily: 'Bookerly', fontSize: '18px', color: 'white', paddingTop: '15px', paddingBottom:'18px',textAlign:'left'}}>
              <ul className="list-none p-0 m-0">
                <li className="flex items-center mb-2">
                  <HikingIcon style={{marginRight: '8px', color: 'white'}}/>I like hiking
                </li>
                <li className="flex items-center mb-2">
                  <DriveEtaIcon style={{marginRight: '8px', color: 'white'}}/>I enjoy driving
                </li>
                <li className="flex items-center mb-2">
                  <MusicNoteIcon style={{marginRight: '8px', color: 'white'}}/>Playing guitar
                </li>
                <li className="flex items-center mb-2">
                  <CodeIcon style={{marginRight: '8px', color: 'white'}}/>Learning JavaScript, C++
                </li>
              </ul>
            </div>
          </motion.div>


        </div>
      </div>
    </>
  );
}

export default Contact;
