export const FinanceForm = () => {
    return(
        <section>
        <div>
            <label>Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição"/>
            <p>Ex:Compra de roupas</p>
        </div>
        <div>
            <label htmlFor="Valor">Valor (R$) </label>
            <input type="number" name="" id="" />
        </div>
        <div>
            <label htmlFor="">Tipo de Valor</label>
            <input type="text" name="" id="" />
        </div>

            <button class="btn">Inserir Valor</button>        
        </section>
    )
}