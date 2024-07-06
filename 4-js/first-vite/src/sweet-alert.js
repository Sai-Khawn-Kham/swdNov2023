import Swal from "sweetalert2"

export const errorAlert = () => {
    Swal.fire(
        {
            title: "hello",
            text:  "san kyi tar par",
            icon: "error",
            showCancelButton: true
        }
    ).then((result) => {
        if(result.isConfirmed){
            Swal.fire({
                title: "hello 2",
                text: "san kyi tar par 2",
                icon: "warning"
            })
        }
    })
}