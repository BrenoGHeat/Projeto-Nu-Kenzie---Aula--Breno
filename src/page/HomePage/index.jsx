import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { Header } from "../../components/Header"
import { Total } from "../../components/Total"

export const HomePage = () => {
    return(
        <>
            <Header/>
            <main>
                <FinanceForm />
                <FinanceList />
                <Total />

            </main>

        
        </>
    )
}