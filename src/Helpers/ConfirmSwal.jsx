import Swal from 'sweetalert2'

function ConfirmSwal({text,api,id}) {
  return (
    
    Swal.fire({
  title: 'Are you sure?',
  text: text,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes'
}).then((result) => {
  if (result.isConfirmed) {
    api(id).then((res)=>{

        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your action has been saved',
            showConfirmButton: false,
            timer: 1000
        })
    })

  }
})
    
  )
}

export default ConfirmSwal