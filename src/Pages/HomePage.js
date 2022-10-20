import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const reducer = (state,action) =>{
    switch (action.type) {
        case 'POSTS_REQUEST':
            return {...state,loading:true};
            break;
        case 'POSTS_SUCCESS':
            return {...state,loading:false,posts:action.payload,error:''};
            break;
        case 'POSTS_FAIL':
            return {...state,error:action.payload,loading:false};
            break
    
        default:
            return state
            break;
    }
}

function HomePage() {
    const [state,dispatch] = useReducer(reducer,{loading:false,error:'',posts:[]});
    const{loading,posts,error} = state;

    const loadPost= async () =>{
        dispatch({type:'POSTS_REQUEST'});
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch({type:'POSTS_SUCCESS',payload:data});
            
        } catch (error) {

            dispatch({type:'POSTS_FAIL',payload:error.message});
            
        }
    }
    useEffect(()=>{

        loadPost();

    },[])


  return (
    <div className='blog'>
    <div className='content'>

    <h1>Posts</h1>

    {
        loading?(<div>Loding...</div>):
        error?(<div>Error:{error}</div>):
        posts.length===0?(<div>No post Found</div>):
        (
            <ul>
            {posts.map((post)=>(
                <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </li>
            ))}
            </ul>
        )

    }
    
    </div>
   
      
    </div>
  )
}

export default HomePage
