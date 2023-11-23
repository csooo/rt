import './App.css';
import { useEffect,useState } from 'react';
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [content,setContent] = useState('');
  const handlestars1 = ()=>{
    setCount(1)
  }
  const handlestars2 = ()=>{
    setCount(2)
  }
  const handlestars3 = ()=>{
    setCount(3)
  }
  const handlestars4 = ()=>{
    setCount(4)
  }
  const handlestars5 = ()=>{
    setCount(5)
    console.log(count,content)
  }
  const submithandle = async ()=>{
  if(content ===''){
    alert('wa ta kteb chi 7aja')
  }else{
    const data = {count,content}
    await axios.post('http://localhost:5000',data)
    .then(res => {
         console.log(res)
    })
    .catch(error => {
         console.log(error)
    })
  }
 
  }
  useEffect(() => {
    const btn = document.querySelector("button");
    const post = document.querySelector(".post");
    const widget = document.querySelector(".star-widget");
    const editBtn = document.querySelector(".edit");

    const handleClick = () => {
      widget.style.display = "none";
      post.style.display = "block";
    };

    const handleEditClick = () => {
      widget.style.display = "block";
      post.style.display = "none";
    };

    btn.addEventListener('click', handleClick);
    editBtn.addEventListener('click', handleEditClick);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      btn.removeEventListener('click', handleClick);
      editBtn.removeEventListener('click', handleEditClick);
    };
  }, []); 
  return (<>
  <div className='thepage'>

<div class="container">
  <div class="post">
    <div class="text">Thanks for rating us 🤝!</div>
    <div class="edit">EDIT</div>
  </div>
  <div class="star-widget">
    <input type="radio" name="rate" id="rate-5"/>
    <label for="rate-5" onClick={handlestars5} class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-4"/>
    <label for="rate-4" onClick={handlestars4} class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-3"/>
    <label for="rate-3" onClick={handlestars3} class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-2"/>
    <label for="rate-2" onClick={handlestars2} class="fas fa-star"></label>
    <input type="radio" name="rate" id="rate-1"/>
    <label for="rate-1" onClick={handlestars1} class="fas fa-star"></label>

    <form action="#" onsubmit="sendEmail() ; reset() ; return false; ">

      <header>

      </header>
      <div class="textarea">
        <textarea cols="30" onChange={(e)=>{setContent(e.target.value);}} placeholder="Describe your experience.."></textarea>
        
        
        
      </div>
      <div class="btn">
        <button type="submit" onClick={submithandle}>Submit</button>
      </div>
    </form>
  </div>
</div>

</div>

  
  </>)
}

export default App;
