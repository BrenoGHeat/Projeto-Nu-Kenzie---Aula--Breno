import { FinanceForm } from "../FinanceForm"
import { FinanceList } from "../FinanceList"
import { Total } from "../Total"

export const FinanceSection = () => {
    return(
        <section>
            <FinanceForm />
            <FinanceList />
            <Total />
        </section>
    )
}