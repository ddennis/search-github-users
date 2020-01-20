import React, {useState} from 'react';
import SearchBox from './components/SearchBox';
import FetchData, {stateProps} from './components/FetchData';

const App: React.FC = () => {


  const [query, setQuery] = useState("")

  /*const submit = (q:string) => {
    setQuery(q)
  }*/


  return (

    <div className="container-fluid h-100" style={{background:"red"}}>
      <div className="row h-100" style={{}}>
      	<div className="col">

          <SearchBox submit={setQuery}></SearchBox>

          <FetchData query={query}>
            {
              (fetchState:stateProps) => {

                console.log (" App > fetchState.data.items = " , fetchState.data.items);

                return (
                    <div>
                      {
                        fetchState.data.items.map( (item) => {
                          return <div key={item.id}>{item.login}</div>

                        })
                      }
                    </div>
                )
              }
            }
          </FetchData>


      	</div>
      </div>
    </div>

  );
};

export default App;
