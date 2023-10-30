import React from 'react';
import { Query } from 'react-apollo';
import DATA_QUERY from './Data/index';
import Datadisplay from './Displaydata';
import Navbar from './Navbar';

function RetrievedData() {

    return (
      <Query query={DATA_QUERY}>
       {({ loading, error, data }) => {
        
          if (loading) return <div>Fetching Data.....</div>
          if (error)   return <div>Error Fetching Data</div>

          var items;

          for(let i in data.assets){
            if(data.assets[i].id === "clo408qil0itn0amp48g909ye"){
              items = data.assets[i];
            }
          }

          // console.log(items)
          return (
            <div>
              <Navbar />
              <Datadisplay key={items.id} product={items} />
            </div>
          )
        }}
      </Query>
    );
  

};
export default RetrievedData;