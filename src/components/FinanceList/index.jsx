import { FinanceCard } from "./FinanceCard"

export const FinanceList = ({list}) => {
    return(
        <div className="container card">
            <ul className="mini card">
                <h3>Resumo Financeiro</h3>
               
            {list.length > 0 ? list.map(item => (
                <FinanceCard item={item} />
            )) : <p>Você não possui nenhum lançamento</p> }
            </ul>
        </div>
    )
}

