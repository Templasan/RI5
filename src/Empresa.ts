import Funcionario from './Funcionario';
import Endereco from './Endereco';
import Telefone from './Telefone';

export default class Empresa {
    funcionarios: Funcionario[]
    endereco: Endereco
    nomeFantasia: string
    razaoSocial: string
    cnpj: string
    telefone: Telefone
    constructor(funcionarios: Funcionario[], endereco: Endereco, nomeFantasia: string, razaoSocial: string, cnpj: string, telefone: Telefone) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.nomeFantasia = nomeFantasia;
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
        this.telefone = telefone;
    }

    toString(): string {
    const funcionariosStr = this.funcionarios
        .map(f => f.toString())
        .join('\n\n');

    return (
`Razão social: ${this.razaoSocial}
Nome fantasia: ${this.nomeFantasia}
CNPJ: ${this.cnpj}
Endereço:
${this.endereco.toString()}

Funcionários:
${funcionariosStr}`
    );
}

}