import Meta from "./Meta";
const listaMock = [
    {
        "id": "1",
        "detalles": "Esculpidas",
        "periodo": "mañana",
        "eventos": "04-04-2024",
        "icono": "💅",
        "disponible": 8,
        "plazo": "2030-01-01",
        "completado": 1
    },
    {
        "id": "2",
        "detalles": "Pedicura",
        "periodo": "pies",
        "eventos": 8,
        "icono": "🦶",
        "disponible": 4,
        "plazo": "2030-01-01",
        "completado": 0
    },
    {
        "id": "3",
        "detalles": "Manos y pies semi-permanente",
        "periodo": "manos/pies",
        "eventos": 8,
        "icono": "✍️",
        "disponible": 4,
        "plazo": "2030-01-01",
        "completado": 4
    },
];
function Lista() {
    return (
        listaMock.map(meta => <Meta {...meta}></Meta>)
    );
}

export default Lista;