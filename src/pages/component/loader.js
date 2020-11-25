import React,{useEffect , useState} from 'react'
import Skeleton from "react-loading-skeleton";
import api from '../api/api'

const  Card = () =>  {

  const [Data, setData] = useState([])

    useEffect(() => {
        api.getAll()
       .then(data => {
             setData(data)
           });
        })
    return (
        <div>
 <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

           
            
              
              


                    {Array(Data.length)
                        .fill()
                        .map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <span className="custom-checkbox">
                                            
                                            <Skeleton circle={true} height={30} width={30} /> 
                                        </span>
                                    </td>
                                    <td><Skeleton height={30}/></td>
                                    <td><Skeleton height={30}/></td>
                                    <td>
                                    <Skeleton height={20}/>
                                    <Skeleton height={20}/>
                                    </td>
                                </tr>
                            )
                        })}
                           </tbody>
                           </table>

            {/* <div className="row">
                <div className="col-md-12">
                    <div className="main-todo-input-wrap">
                        <div className="main-todo-input fl-wrap todo-listing">

                            {
                                 Array(9)
                                .fill()
                                .map((item, index) =>  {

                                    return (
                                        <ul id="list-items" >
                                            <li>
                                                <Skeleton height={20} />
                                            </li>




                                        </ul>

                                    )
                                })
                            

                                }
                            </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Card