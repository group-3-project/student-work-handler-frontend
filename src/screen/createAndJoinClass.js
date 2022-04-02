import React from 'react';
import { useState,useEffect } from 'react';
import { Slide, Stack, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios'
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
import { margin } from '@mui/system';

//Dialog Animation
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function CreateAndJoin() {

    const [openCreateClassroomDialog, setCreateClassroomOpen] = React.useState(false);
    const [openJoinClassroomDialog, setJoinClassOpen] = React.useState(false);
    let [classroomOwner, setClassroomOwner] = useState(" ");
    const [classroomData, setClassroom] = useState({
        classroomName: '',
    })


    useEffect(()=>{
        let userid=JSON.parse(localStorage.getItem("user"))
         //class owner 
         setClassroomOwner(classroomOwner=userid.id)
    })


    let navigate = useNavigate();

    const createClassroom = (className) => {
       


        //Conditions for a valid class name
        if (className.length > 0) {

            console.log("Creating Classroom with name: ", className);
            console.log(" Classroom owner id: ", classroomOwner);


            axios.post('http://localhost:3001/classrooms', {classroomData,classroomOwner}).then((recievedResponse) => {

                setCreateClassroomOpen(false);

                console.log("Successfully created classroom!");

                EnterClassroom(navigate, recievedResponse);
            })
        }
        else {
            return (
                <div>{alert("Classroom name does not meet our requirments! Please enter a valid name!")}</div>
            );
        }
    }

    const joinClassroom = (classCode) => {
        console.log("Finding classroom of Code: ", classCode)

        //Sending classcode to backend to verify from database!
        axios.post('http://localhost:3001/classrooms/searchcode', { "code": classCode }).then((recievedResponse) => {

            setJoinClassOpen(false);

            console.log("Successfully Joined classroom!");

            EnterClassroom(navigate, recievedResponse);

        }).catch((error) => {
            console.log("ERROR OMG", error);

            return (
                <div>{alert("Invalid Code! Enter a valid classroom code!")}</div>
            );
        })
    }

    return (
        <div className="App">
            <h1>Student Work Handler</h1>
            <section style={styles.sectionStyle}>
                <div>
                    {/* <Stack
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        minHeight="30vh">

                        
                    </Stack> */}
                    <Stack direction="column" spacing={2}>
                        <Button variant="contained" size="large" color="secondary" onClick={() => setCreateClassroomOpen(true)}><b>CREATE CLASSROOM</b></Button>
                        <Button variant="contained" size="large" color="secondary" onClick={() => setJoinClassOpen(true)}><b>JOIN CLASSROOM</b></Button>
                    </Stack>
                    {/* <div>

                        <Button variant="contained" size="large" color="secondary" onClick={() => setCreateClassroomOpen(true)}><b>CREATE CLASSROOM</b></Button>

                        <Button variant="contained" size="large" color="secondary" onClick={() => setJoinClassOpen(true)}><b>JOIN CLASSROOM</b></Button>

                    </div> */}
                    <Dialog open={openCreateClassroomDialog} onClose={() => { setCreateClassroomOpen(false) }} TransitionComponent={Transition}>
                        <DialogTitle>Enter classroom name</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="classroomNameTextField"
                                label="Classroom Name"
                                type="default"
                                fullWidth
                                variant="outlined"

                                value={classroomData.classroomName} onChange={(event) => {
                                    setClassroom({ ...classroomData, classroomName: event.target.value })
                                }} />

                        </DialogContent>
                        <DialogActions>

                            <Button onClick={() => { createClassroom(document.getElementById('classroomNameTextField').value) }}>Create</Button>

                            <Button onClick={() => { setCreateClassroomOpen(false) }}>Cancel</Button>

                        </DialogActions>
                    </Dialog>

                    <Dialog open={openJoinClassroomDialog} onClose={() => { setJoinClassOpen(false) }} TransitionComponent={Transition}>
                        <DialogTitle>Enter classroom code</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="classroomCodeTextField"
                                label="Classroom Code"
                                type="default"
                                fullWidth
                                variant="outlined"
                            />
                        </DialogContent>
                        <DialogActions>

                            <Button onClick={() => { joinClassroom(document.getElementById('classroomCodeTextField').value); }}>Join</Button>

                            <Button onClick={() => { setJoinClassOpen(false) }}>Cancel</Button>

                        </DialogActions>
                    </Dialog>
                </div>
            </section>
        </div>
    );
}

const EnterClassroom = (navigate, classDetails) => {

    console.log("Entered classroom: ", classDetails.data);

    navigate("/home", { state: { classroomProp: classDetails.data } });

    //show all data in frontend of inside classroom
}