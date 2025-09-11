import Endereco from "./Endereco";
import Funcionario from "./Funcionario";

export default class Empresa {
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: Funcionario[]
    constructor(funcionarios: Funcionario[])
}