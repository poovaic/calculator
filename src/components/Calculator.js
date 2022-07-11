import React,{useState} from 'react';
function Calculator(){
        const[number1,setNumber1] = useState('');
        const[number2,setNumber2] = useState('');
        const [operations,setOperations]=useState(null);
        const [result,setResult] = useState('');
        
        
        function handleSubmit(){
             if(isNaN(number1)){
                alert('enter a number')
             }
            if(operations === '+'){
                setResult(parseInt(number1)+parseInt(number2))
    
            }else if(operations === '-'){
                setResult(parseInt(number1)-parseInt(number2))
            }else if(operations === '*'){
                setResult(parseInt(number1)*parseInt(number2))
            }else if(operations === '/'){
                setResult(parseInt(number1)/parseInt(number2))
            }
            
            
        }
    return(
        <div className="container">

            <h1>React Basic Calculator</h1>

                <div className="math">

                    <input type="number" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} value={number1} onChange={((e)=>setNumber1(e.target.value))}/>

                    <button onClick={()=>setOperations('+')}>+</button> 
                    <button onClick={()=>setOperations('-')}>-</button> 
                    <button onClick={()=>setOperations('*')}>*</button> 
                    <button onClick={()=>setOperations('/')}>/</button> 

                    <input type="number" onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} value={number2} onChange={((e)=>setNumber2(e.target.value))}/>

                    {/* <span>=</span> */}

                    <h2>Answer: {result}</h2>
                    <button onClick={handleSubmit}>Submit</button>
                </div>

        </div>
    )
}
export default Calculator