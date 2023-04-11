const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
    };
    
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também!</button>
            </div>
        </div>
    )
}

export default Events;