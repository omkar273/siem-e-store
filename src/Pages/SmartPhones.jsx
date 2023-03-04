import Header from "../Components/header";
import React, { useState, useEffect } from 'react'
import { TextField, Stack, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LeftIcon from '@mui/icons-material/ChevronLeft';
import RightIcon from '@mui/icons-material/ChevronRight';

const SmartPhones = () => {

    const [query, setQuery] = useState("")
    const [dataSet, setData] = useState([])
    let url = `https://dummyjson.com/products/search?q=${query}&limit=100`
    let index = 0
    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            getResponse(url)
            ignore = true
        }
    }, [index])

    const getResponse = async (url) => {
        try {
            const response = await fetch(url)
            const jsonData = await (response.json());
            setData(jsonData.products)

            if (jsonData.limit === 0) {

                document.getElementById('response-status').innerText = `No related products Found`
                document.getElementById('response-status').style.textAlign = "center"
                document.getElementById('response-status').style.fontSize = "2rem"
            } else {
                document.getElementById('response-status').style.textAlign = "left"
                document.getElementById('response-status').style.fontSize = "1.2rem"
                document.getElementById('response-status').innerText = `Search Among ${jsonData.limit} products `
            }
            document.getElementById('response-status').style.display = 'block'

        } catch (error) {
            alert("error in fetching data")
        }
    }

    const handlePress = (event) => {
        if (event.key === 'Enter') {
            console.log(`enter pressed with query ${query}`)
            url = `https://dummyjson.com/products/search?q=${query}&limit=100`
            console.log(`url : ${url}`)
            getResponse(url)

        }
    }

    // const leftArrowClicked = () => {
    //     alert(`arrow ${(dataSet.images).length} `)
    //     if (index === 0) {
    //         index = (dataSet.images).length - 1
    //     }
    // }

    // const RightArrowClicked = () => {
    //     index = (index + 1) % (dataSet.images).length
    // }

    return (

        <div className="bg-[whitesmoke] h-max min-h-screen overflow-auto">
            <Header />
            <div className='flex flex-col gap-4 items-center '>

                <Stack
                    marginTop={'20px'}
                    direction={"row"}
                    style={{ width: '100%' }}
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <TextField
                        onChange={(event) => setQuery(event.target.value)}
                        onKeyDown={(event) => handlePress(event)}
                        value={query}
                        label="Name"
                        variant="outlined"
                        style={{ width: '70%', }} />
                    <span className="bg-orange-500 inline-block"
                        onClick={(event) => getResponse(url)}>
                        <IconButton
                            aria-label="search"
                            className="bg-orange-600"
                            size="large">
                            <SearchIcon fontSize="inherit" />
                        </IconButton></span>
                </Stack>
                <Stack
                    direction={'column'}
                    gap={2}
                    marginTop={"40px"}
                    width={"100%"}
                    flexWrap={'nowrap'}
                    padding={"30px"}
                    height={"400px"}
                >
                    <p id="response-status" className="hidden"></p>
                    {dataSet.map((element, index) => {
                        return (
                            <Stack direction={'row'} className='p-4  data-box bg-[white]' gap={2} >
                                <div className="w-[25%] relative" >
                                    <LazyLoadImage
                                        loading="lazy"
                                        height="auto"
                                        width='100%'
                                        src={element.images[0]}
                                        className="border-[2px]" alt="" />
                                    <LeftIcon className="top-[50%] absolute hover:scale-[1.80] transition-all cursor-pointer" />
                                    <RightIcon className="top-[50%] absolute right-0 hover:scale-[1.8] cursor-pointer" />
                                </div>
                                <Stack direction={"column"} >

                                    <p className='break-words font-medium text-2xl text-left'>{element.title}</p>

                                    <p className='text-left font-serif break-words'>{element.description}</p>

                                    <p className='text-left font-serif break-words mt-1'>{`rating : ${element.rating}`}</p>

                                    <Stack direction={"row"} gap={2}>
                                        <p className='text-left font-serif text-4xl break-words mt-2'>{element.price} <span>&#8377;</span>
                                        </p>
                                        <p className='text-left break-words mt-2'>{`M.R.P :`} <span className="line-through">{Math.floor(element.price * (element.discountPercentage + 100))}</span> {`(${element.discountPercentage}% off) `}</p>
                                    </Stack>

                                    <p className='text-left break-words mt-8'>{`Hurry up only ${element.stock} LEFT`}</p>
                                </Stack>
                            </Stack >
                        )
                    })}
                </Stack>
            </div>
        </div >
    )
}

export default SmartPhones







