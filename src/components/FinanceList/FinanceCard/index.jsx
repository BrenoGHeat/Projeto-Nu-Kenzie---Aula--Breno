export const FinanceCard = ({item}) => {
    return(
        
            <li className="container month">
                <div className="mini div one">
                <h3>{item.text}</h3>
                <p>{item.type}</p>
                </div>
                
                <div className="mini div two">
                    <p>{item.value}</p>
                    <button>Excluir</button>
                </div>
            </li>
      

    )
}