import React, { useState } from 'react'
import { TextField, Stack, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../Components/header';

const Data_collection = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState([])

    const addData = () => {
        if (name !== "") {
            setData([...data, { name, email }])
            setName("")
            setEmail("")
        } else {
            alert('data fields cannot be empty')
        }
    }

    const removeDataField = (index) => {
        let arr = data
        arr.splice(index, 1)
        setData([...arr])
    }

    const handlePress = (event) => {
        if (event.key === 'Enter') {
            addData()
        }
    }
    return (
        <div className='flex flex-col gap-4 p-9 items-center bg-[#7efff5] min-h-[100vh]'>
            <Header />
            <Stack direction={'row'} spacing={2} height={"auto"} flexWrap={'nowrap'}>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                >
                    <TextField
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        onKeyDown={handlePress}
                        label="Name"
                        variant="outlined" />

                    <TextField
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        onKeyDown={handlePress}
                        label="Email"
                        variant="outlined" />

                </Box>
                <div className='flex flex-col justify-center items-end'>
                    <Button
                        variant="contained"
                        onClick={addData}>
                        <AddIcon
                            style={{
                                width: "40px", height: "40px",
                                color: 'whitesmoke',
                            }} />Add</Button>
                </div>
            </Stack>

            <Stack
                id="data-field-container"
                direction={'column'}
                gap={2} marginTop={"40px"}
                width={"60%"}
                flexWrap={'nowrap'}
                padding={"30px"}
                borderRadius={"20px"}
                className='data-box'
                maxHeight={"400px"}
                height={"400px"}
                overflow={"scroll"}>
                <Data_Field name={"Name"} email={"Email"} />
                {data.map((element, index) => {
                    return (
                        <Stack direction={'row'} className='p-4  data-box' gap={2} >
                            <p className=' w-[38%] max-w-[38%] text-left'>{element.name}</p>
                            <p className=' w-[60%] max-w-[60% text-left break-words'>{element.email}</p>
                            <Button
                                variant="contained"
                                className='p-10'
                                startIcon={<DeleteIcon />}
                                onClick={() => removeDataField(index)}>
                                Delete
                            </Button>
                        </Stack >
                    )
                })}
            </Stack>

        </div >
    )
}

export const Data_Field = (props) => {

    return (
        <Stack direction={'row'} className='p-4  data-box' gap={2} >

            <p className=' w-[38%] max-w-[38%] text-left'>{props.name}</p>
            <p className=' w-[60%] max-w-[60% text-left break-words'>{props.email}</p>
            {/* <Button
                variant="contained"
                className='p-10'
                startIcon={<DeleteIcon />}>
                Delete
            </Button> */}
        </Stack >
    )
}


Data_Field.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    index: PropTypes.number
};




Data_Field.defaultProps = {
    name: "None",
    email: "none",
    index: 0
};

export default Data_collection