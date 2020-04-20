import React,{useState,useEffect} from "react";
import { Button, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import firebase from "../config/firebase";
import {questions} from "../utils/CONSTANTS";
import {result} from "../utils/result";
import {Link} from "react-router-dom";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useTimes =()=>{
  const [times, setTimes] = useState([]);

  useEffect(()=>{
    const unsubscribe = firebase.firestore().collection('times').onSnapshot((snapshot)=>{
      const newTimes = snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }))
      setTimes(newTimes);
    })
    return ()=>unsubscribe();
  },[])

  return times;
}

const Assessment = (props) => {
  const times = useTimes();
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const [state, setState]=useState({
    symptom1: 0,
    symptom2: 0,
    travel: 0,
    closeContact: 0,
    email: "",
  })

  const renderField =(type, field, label)=>{
    if(type==="boolean"){
      return (
          <RadioGroup
            aria-label="gender"
            name={field}
            value={state[field]}
            onChange={(e,v)=>setState({...state, [field]:parseInt(v)})}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel value={0} control={<Radio />} label="No" />
          </RadioGroup>
      );
    }else if(type==="input"){
      return (
        <TextField
          label={label}
          variant="outlined"
          value={state[field]}
          name={field}
          onChange={(e) => setState({ ...state, [field]: e.target.value })}
        />
      );
    }
  }
  const handleNext =()=>{
    setActiveQuestion(activeQuestion+1)
  }
  const onRetake =()=>{
    setOpen(false);
    setActiveQuestion(0);
  }

  const handleClose =()=>{
    setOpen(false);
    props.history.push("/");

  }

  const renderQuestion =()=>{
    const question = questions[activeQuestion];
    return(
    <div>
      {question.question}
      {renderField(question.type, question.field, question.label)}
    </div>
  )}
  const onSubmit=(e)=>{
    e.preventDefault();
    firebase.firestore().collection('assessment').add({
      ...state,
    })
    .then((response)=>{
      setOpen(true);
    }).catch(e=>{
      console.log("error", e)
    })
  }
  const lastQuestion = activeQuestion === questions.length - 1;

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <Link to="/" className="my-5">
        &larr; Back to Home
      </Link>
      <form onSubmit={onSubmit}>
        <FormControl component="fieldset">{renderQuestion()}</FormControl>
        {lastQuestion && (
          <div className="mt-4">
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          </div>
        )}
      </form>
      {!lastQuestion && (
        <Button
          className="mt-4"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            handleNext();
          }}
        >
          Proceed
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Self Assessment Result
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {result(state)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onRetake} color="primary">
            Retake
          </Button>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Assessment;
