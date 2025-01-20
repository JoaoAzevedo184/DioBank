import { DioAccount } from "./DioAccount"

export class SpecialCustomer extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    vip = (balance: number): number =>{
        return balance + 10

    }
    deposit = (balance: number): void => {
        if(this.validateStatus()){
          if(balance>0){
            this.setBalance(this.vip(balance))
            console.log('Depósito Concluído!')
          }
          console.log('Depósito Inválido! O valor não pode ser menor ou igual a zero!')
        }
        console.log('Depósito Inválido! Tente Novamente!')
      }
}