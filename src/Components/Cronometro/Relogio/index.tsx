import React from "react";
import style from '../Relogio/Relogio.module.scss'

interface props{
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: props){
    
    const minutos = Math.floor( tempo / 60);
    const minutoDezena = Math.floor( minutos / 10);
    const minutoUnidade = minutos % 10;
  
    const segundos = tempo % 60;
    const segundosDezena = Math.floor( segundos / 10);
    const segundosUnidade = segundos % 10;

    /* console.log(minutoDezena, minutoUnidade)
    console.log(segundosDezena, segundosUnidade) */
    return(
        <React.Fragment>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundosDezena}</span>
            <span className={style.relogioNumero}>{segundosUnidade}</span>
        </React.Fragment>
    )
}