const Challenge = () => {
    const valor1 = 10
    const valor2 = 46
    const resultado = valor1 + valor2

    return (
        <div>
            <h1>Clique em resultado e some!</h1>
            {valor1} + {valor2} <br/>
            <button onClick={() => {console.log(resultado)}}>Resultado</button>
        </div>
    );
    
};

export default Challenge;
