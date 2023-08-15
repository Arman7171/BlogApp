import { useLocation } from "react-router-dom";

export default function(){
    const location = useLocation();
    return location.pathname.split('/')[2];
}