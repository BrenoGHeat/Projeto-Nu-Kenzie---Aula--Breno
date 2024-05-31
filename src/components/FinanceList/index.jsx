import { FinanceCard } from "./FinanceCard"

export const FinanceList = () => {
    return(
        <div className="container card">
            <ul className="mini card">
                <h3>Resumo Financeiro</h3>
                <FinanceCard />

            </ul>
        </div>
    )
}