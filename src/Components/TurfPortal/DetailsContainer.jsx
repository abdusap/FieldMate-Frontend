import React,{useState} from 'react'
import DetailsForm from './DetailsForm'
import RuleAmenityModal from './RuleAmenityModal'
import { addAmenityApi, addRulesApi } from '../../Helpers/TurfApi,'

function DetailsContainer() {
    const [amenityModal,setAmenityModal]=useState(false)
    const [rulesModal,setRulesModal]=useState(false)
    const amenityHandleSubmit=(e)=>{
        e.preventDefault()
        const amenity=[]
        for(let i=0;i<e.target.length-2;i++){
            if (e.target[i].value !== "") {
                amenity.push(e.target[i].value)
            // console.log(e.target[i].value)
            }
        }
        // const formData=FormData()
        // formData.append('amenity',amenity)
        addAmenityApi(amenity).then((res)=>{
          console.log(res);
        })
    }
    const rulesHandleSubmit=(e)=>{
        e.preventDefault()
        const rules=[]
        for(let i=0;i<e.target.length-2;i++){
            if (e.target[i].value !== "") {
                rules.push(e.target[i].value)
            }
        }
        addRulesApi(rules).then((res)=>{
            console.log(res)
        })
    }
  return (
    <>
<h1 className="font-bold text-xl md:text-2xl">Turf Datails</h1>
             <div className='flex justify-center items-center  w-full'>
       <DetailsForm amenityModal={amenityModal} setAmenityModal={setAmenityModal} rulesModal={rulesModal} setRulesModal={setRulesModal}/>
             </div>
            {amenityModal && <RuleAmenityModal title={"Amenity"} modal={amenityModal} setModal={setAmenityModal} handleSubmit={amenityHandleSubmit}/>}
            {rulesModal && <RuleAmenityModal title={"Rules"} modal={rulesModal} setModal={setRulesModal} handleSubmit={rulesHandleSubmit}/>}
    </>
  )
}

export default DetailsContainer