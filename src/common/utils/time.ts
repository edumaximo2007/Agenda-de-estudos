export function tempoParaSegundos(tempo: string) {
    const 
    [
        horas='0',
        minutos='0',
        segundos='0'
    ] = tempo.split(":");

    const horasPorSegundos = Number(horas) * 3600;
    const minutosPorSegundos = Number(minutos) * 60;
    return horasPorSegundos + minutosPorSegundos + Number
    (segundos);
}