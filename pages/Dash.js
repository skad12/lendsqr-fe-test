import React from 'react';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import Cards from '../components/Cards';
import Tables from '../components/Tables';
import Pagination from '../components/Pagination'


const Dash = () => {
    return ( 

        <div className="antialiased min-h-screen" >

         <Nav />
          
          <div class="flex h-screen">
  <div class="w-64 h-full ">
   
    <SideNav/>
  </div>
  <div class="flex-1 bg-gray-100 ">
    <Cards />
    <Tables />
    <Pagination />
  </div>
</div>      
</div>
        
     );
}
 
export default Dash;

