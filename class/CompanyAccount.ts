import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  //Função para Solicitar Empréstimo
  getLoan = (balance: number): void => {
    if(this.validateStatus()){
      this.setDebt(balance)
      console.log('Empréstimo Concluído!')
    }else{
      console.log('Empréstimo Negado!')
    }
  }
}
