export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private debt: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
    this.debt = 0
  }

  //Função para Aumentar dívida
  setDebt = (debt: number): void =>{
    this.debt = this.debt - debt
    console.log(`Dívida Atualizada! O valor atual da dívida é :R$${this.debt}`)
  }

  //Função para Diminuir dívida
  improvingDebt = (debt: number): void =>{
    this.debt = this.debt + debt
    console.log(`Dívida atualizada! O valor atual da dívida é :R$${this.debt}`)
  }

  //Função para retornar nome
  getName = (): string => {
    return this.name
  }

  deposit = (balance: number): void => {
    if(this.validateStatus()){
      if(balance>0){
        this.setBalance(balance)
        console.log('Depósito Concluído!')
      }else{
        console.log('Depósito Inválido! O valor não pode ser menor ou igual a zero!')
      } 
    }else{
      console.log('Depósito Inválido! Tente Novamente!')
    }
  }

  withdraw = (balance: number): void => {
    if(this.validateStatus()){
      if(balance <= 0){
        console.log('Saque Inválido! O valor não pode ser menor ou igual a zero!')
      }else if(balance <= this.balance){
        this.balance = this.balance - balance
        console.log('Saque Concluído!')
      }else{
        console.log(`Saque Inválido! O valor solicitado excede o saldo disponível do contribuinte ${this.name}.`)
      }
    }else{
      console.log('Saque Inválido! Tente Novamente!')
    }
  }

  setBalance =(balance: number): void =>{
    this.balance = balance
    console.log(`Conta: R$${this.balance}`)
  }

  getBalance = (): void => {
    console.log(`Conta: R$${this.balance}`)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
