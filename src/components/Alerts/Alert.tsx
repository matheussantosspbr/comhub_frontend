import Swal from "sweetalert2";

interface AlertProps{
    title: string;
    text: string;
    icon: 'success' | 'error';
}

export default function Alert({title, text, icon}: AlertProps) {
    return Swal.fire({
                title: title,
                text: text,
                icon: icon
              });
}