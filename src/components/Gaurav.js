import React,{useState ,useRef} from "react";
import "./gaurav.css";
import "../screens/prafull.css"
const Gaurav = () => {
  const [one, setOne] = useState();
  const [two, setTwo]   = useState();
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [six, setSix] = useState();
  const [seven, setSeven] = useState();
  const [eight, setEight] = useState();
  const [nine, setNine] = useState();
  const [ten, setTen] = useState();
  const [eleven, setEleven] = useState();
  const [twelve, setTwelve] = useState();
  const [thirteen, setThirteen] = useState();
  const [fourteen, setFourteen] = useState();
  const [fifteen, setFifteen] = useState();
  const [sixteen, setSixteen] = useState();
  const [seventeen, setSeventeen] = useState();
 
  const ref = useRef(null);
 
  const [data, setData] = useState([]);
  /// function to add data 
  const addd = ()=>{
    
    setData((prevData) => [
      ...prevData,
      {one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen}
      ,
  ]);
  console.log(data);
  };
  /// fucntion to change UI after adding a tuple
  const changeUi = (e) => {
   
    addd();
    // console.log(data); 
    let prev_table = ref.current ;
    console.log(prev_table);
    prev_table.innerHTML += `
    <br>
    <tr>
            <td>${one}</td>
            <td>${two}</td>
            <td>${three}</td>
            <td>${four}</td>
            <td>${five}</td>
            <td>${six}</td>
            <td>${seven}</td>
            <td>${eight}</td>
            <td>${nine}</td>
            <td>${ten}</td>
            <td>${eleven}</td>
            <td>${twelve}</td>
            <td>${thirteen}</td>
            <td>${fourteen}</td>
            <td>${fifteen}</td>
            <td>${sixteen}</td>
            <td>${seventeen}</td>
            
          </tr>
    `
  
   
   
};

  return (
    <div className="container tb1-container">
      <div className="row table-wrapper">
        <div className="column-wrapper">
          <table className="table" >
            <thead>
              <tr >
                <th className="header-label">SY</th>
                <th className="header-label">SM</th>
                <th className="header-label">Co32-</th>
                <th className="header-label">Ph</th>
                <th className="header-label">Alk</th>
                <th className="header-label">Hardness</th>
                <th className="header-label">TDS</th>
                <th className="header-label">Ca</th>
                <th className="header-label">Mg</th>
                <th className="header-label">K</th>
                <th className="header-label">Na</th>
                <th className="header-label">KNa</th>
                <th className="header-label">Cl</th>
                <th className="header-label">SO4</th>
                <th className="header-label">HCO3</th>
                <th className="header-label">NO3</th>
                <th className="header-label">F</th>
               
              </tr>
              <tr className="tr-inputs" >
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setOne(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setTwo(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setThree(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setFour(e.target.value)} />
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setFive(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setSix(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setSeven(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setEight(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setNine(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setTen(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setEleven(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setTwelve(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setThirteen(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setFourteen(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setFifteen(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setSixteen(e.target.value)}/>
                  </div>
                </th>
                <th>
                  <div>
                    <input type="number"  onChange={(e)=>setSeventeen(e.target.value)}/>
                  </div>
                </th>
               
              </tr>
            </thead>
            <tbody ref={ref}>
             
            </tbody>
          </table>
            <div className="sample cont">
            <button type="Submit" className="sample-add" onClick={changeUi}>Add Sample</button>
            </div>
      
        </div>
      </div>
    </div>
  );
};

export default Gaurav;
