import React,{useState} from 'react'
import DetailsForm from './DetailsForm'
import RuleAmenityModal from './RuleAmenityModal'
import { addAmenityApi, addRulesApi } from '../../Helpers/TurfApi,'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

function DetailsContainer() {
    const [amenityModal,setAmenityModal]=useState(false)
    const [rulesModal,setRulesModal]=useState(false)
    const [amenityData,setAmenityData]=useState([])
    const [rulesData,setRulesData]=useState([])
    const [updated,setUpdated]=useState(true)
    console.log(amenityData);
    const turfId=useSelector((state)=>state.turf)
    const amenityHandleSubmit=(e)=>{
        e.preventDefault()
        const amenity=[]
        for(let i=0;i<e.target.length-1;i++){
            if (e.target[i].value !== "") {
                console.log(e.target[i].value);
                amenity.push(e.target[i].value)
            }
        }
        const data={
            turfId:turfId,
            amenity:amenity
        }
        addAmenityApi(data).then((res)=>{
          if(res.data.success){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Amenities has been saved',
                showConfirmButton: false,
                timer: 1200
              }).then(()=>setAmenityModal(!amenityModal),setUpdated(!updated))
          }
        })
    }
    const rulesHandleSubmit=(e)=>{
        e.preventDefault()
        const rules=[]
        for(let i=0;i<e.target.length-1;i++){
            if (e.target[i].value !== "") {
                rules.push(e.target[i].value)
            }
        }
        const data={
            turfId:turfId,
            rules:rules
        }
        addRulesApi(data).then((res)=>{
            if(res.data.success){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Rules has been saved',
                    showConfirmButton: false,
                    timer: 1200
                  }).then(()=>setRulesModal(!rulesModal),setUpdated(!updated))
              }
        })
    }
  return (
    <>
<h1 className="font-bold text-xl md:text-2xl">Turf Datails</h1>
             <div className='flex justify-center items-center  w-full'>
       <DetailsForm amenityModal={amenityModal} setAmenityModal={setAmenityModal} rulesModal={rulesModal} setRulesModal={setRulesModal} setAmenityData={setAmenityData} setRulesData={setRulesData} updated={updated} setUpdated={setUpdated}/>
             </div>
            {amenityModal && <RuleAmenityModal title={"Amenity"} modal={amenityModal} setModal={setAmenityModal} handleSubmit={amenityHandleSubmit} data={amenityData}/>}
            {rulesModal && <RuleAmenityModal title={"Rules"} modal={rulesModal} setModal={setRulesModal} handleSubmit={rulesHandleSubmit} data={rulesData}/>}
    </>
  )
}

export default DetailsContainer