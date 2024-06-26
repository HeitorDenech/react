import "../style.css";

function Saudacao({name}) {
    return (

        <h1 className="title">
            Olá, {name}!
        </h1>
    ) 
}

export default Saudacao;