import { Box, CssBaseline, TextField, Typography, Button, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "./todoSlice";
import Todos from "./Todos";

const AddTodo = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();


    const handleClickOpen = () => {
        setError(true);
    };

    const handleClose = () => {
        setError(false);
    };

    const submit = (event) => {
        event.preventDefault();
        if (value.length !== 0) {
            dispatch(addTodo(value));
            setValue("");
        }

        else {
            setError(true);
        }
    }
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center py-5 bg-gray-200 ">
            <CssBaseline />


            <div className="w-full md:w-8/12 lg:w-6/12 flex flex-col justify-center items-center ">
                <Box className="flex flex-col items-center w-full" >
                    <Typography variant="h2" className="font-bold" gutterBottom>
                        To-Do
                    </Typography>
                    <Box className="flex w-full justify-center gap-2 mb-2 ">
                        <TextField id="fullWidth" className="w-2/3" label="Add Task" value={value} onChange={e => setValue(e.target.value)} />
                        <Button variant="contained" onClick={submit}>
                            <AddBoxIcon />
                        </Button>
                    </Box>
                    <Todos />
                </Box>
            </div>


            <Dialog
                open={error}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" color={"red"}>
                    {"Task is empty"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" fontWeight={"bold"} >
                        Task can not be empty
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus className="">
                        <span className="bg-blue-400 py-1 px-4 rounded-sm text-gray-200">OK</span>
                    </Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}

export default AddTodo