import React from 'react'

function TableLocationAndSports({data,head,handleEdit,handleBlock,onClick}) {
  return (
    <>
    <div className='h-[27rem] overflow-auto'>

   
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                   {head}
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
            {data.map((value)=>{
              return  (<tr key={value._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    {value.name}
                  </th>

                  <td className="px-6 py-4 ">
                    <p onClick={()=>handleEdit(value._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </p>
                  </td>
                  <td className='px-6 py-4'>
                    {value.status?<p className='text-green-700'>Active</p>:<p className='text-red-700'>Blocked</p>

                    }
                  </td>
                  <td className="px-6 py-4 ">
                    {value.status?<p onClick={()=>handleBlock(value._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Block
                    </p>:<p onClick={()=>handleBlock(value._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Un-Block
                    </p>}
                  </td>
                </tr>)
                })
                }
              </tbody>
            </table>
          </div>
          </div>
    </>
  )
}

export default TableLocationAndSports