import Descritor from './Descritor';
import Empresa from './Empresa';
import Endereco from './Endereco';
import Funcionario from './Funcionario';
import Telefone from './Telefone';


let endereco = new Endereco( 123,'Av. Paulista', 'Jardim Paulista', 'São Paulo');
let telefone = new Telefone('011', '9-9999-9999');

let funcionario = new Funcionario(
  'Gerson Penha',
  '98788422',
  '90054377984',
  endereco,
  telefone
);
let funcionarios = [funcionario];
let empresa = new Empresa(
  funcionarios,
  endereco,
  'Fatec',
  'ABC LTDA',
  '999-999-999-999-99',
  telefone
);

console.log(Descritor.descrever(empresa));
