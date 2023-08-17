import React, {useState, useEffect} from "react";
import "./style.css";

const Quote_generator = () => {
    const [line, setLine] = useState("");
    const [line1, setLine1] = useState("");
    const [quote, setQuote] = useState(0);
   

    useEffect(() =>

    {
        const fetchApi = async (main) => {
            try{
            const url = `https://quote-garden.onrender.com/api/v3/quotes`;
            const response = await fetch(url);
            const resjson = await response.json();

            setLine(resjson.data[quote].quoteText)
            setLine1(resjson.data[quote].quoteAuthor)


            }
            catch (error){
                console.error("Error fetching data:",error);
            }
            
        }   
        fetchApi();

        // ---------** For autochange **-----------
        // setTimeout(() => {
        //     setQuote((count) => count + 1);
        //   }, 5000);

    },[quote]);

    const increment = ()=> {
        if(quote>=10){
            setQuote(0);
        }
        else{
            setQuote(quote+1)
        }
        
    };

   
    return(
        <div className="main">
            <div className="main_child">
            <h2>Quotation</h2>
            <p>{line}</p>
            <p className="author">{line1}</p>
            </div>
            <button onClick={increment}>Change Quotation</button>
        </div>
    )

}

export default Quote_generator;