import React, {useContext, useState} from 'react'
import { getUserData } from '../Cookies/cookies';
import { apiGetUserData } from '../axios/withToken';

const DataContext = React.createContext({
    data: [],
    changeData: () => {}
    }
);

const getBackendData = async () => {
    return apiGetUserData()
        .then(response=> {
            if (response.status === 200) {
                const token = response.headers.get('x-auth-token');
                return [response.data, token]
            }
        })
        .catch((reason) => {
            let response = reason.response
            if (response.status === 400) {
                if (response.data.message === 'Please authenticate.'){
                    return null
                }
            }
        })
}

const getData = () =>  {
    var userData = {
        userName:'',
        email:'',
        token:'',
        fridge: null,
        favorite: []
    }
    // if ( (localStorage.getItem('user') !== 'undefined' && localStorage.getItem('user') !== null) || (Object.keys(getUserData()).length !== 0) ){
    //     console.log("what wrong")
    //     const [response, token] = await getBackendData()
    //     let input = {userName: response.userName, email: response.email, fridge: response.fridge, token: token, favorite: response.favorite}
    //     localStorage.setItem("user", JSON.stringify(input))
    // }
    if (localStorage.getItem('user') !== 'undefined' && localStorage.getItem('user') !== null ){
        const dataString = localStorage.getItem('user');
        userData = JSON.parse(dataString);  // 字串轉換成物件
    } else if ( Object.keys(getUserData()).length !== 0){
        userData = getUserData();
    }
    console.log("getData", userData)
    return userData     
}

const DataContextProvider =  (props) => {
    const [data, setData] = useState( getData())
    const changeData = (input) => {
        console.log(input)
        localStorage.setItem('user',JSON.stringify(input));
        setData(input)
    }
    return (
        <DataContext.Provider value={{data, changeData}}>
            {props.children}
        </DataContext.Provider>
    );
}

const UseDataContext = () => {
    return useContext(DataContext)
}

export { DataContextProvider, UseDataContext };