

export const FinanceCard = ({item}) => {
    return(
        
            <li className="container month">
                <div className="mini div one">
                <h3>{item.text}</h3>
                <p>{item.type}</p>
                </div>
                
                <div className="mini div two">
                    <p>R${item.value.toFixed(2)}</p>
                    <button>Excluir</button>
                </div>
            </li>
      

    )
}