import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useChangePageAutomatic = (timevalue : number) => {
    const navigate = useNavigate();

    useEffect(() => {
        const tempoTransicao = timevalue;

        const setTimer = setTimeout(() => {
            navigate('/home');
        }, tempoTransicao);

        return () => clearTimeout(setTimer);
    }, [navigate, timevalue]);
}

export const useChangePage = (value : any) =>{
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/" + value);
    })
}