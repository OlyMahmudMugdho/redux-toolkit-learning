
import { Delete } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from './todoSlice';
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();


    return (
        <div className='w-11/12 lg:w-10/12 flex items-center justify-center mt-2 lg:mt-8'>
            <div className='flex flex-col gap-2 w-full'>
                {todos.map(item =>
                    <Card key={item.id}>
                        <CardActionArea >
                            <CardContent className='flex items-center justify-between'>
                                <Typography component="span">
                                    {item.task}
                                </Typography>
                                    <Delete aria-label="add"
                                        onClick={() => dispatch(removeTodo(item.id))} className='text-red-500' />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Todos