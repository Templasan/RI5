import Empresa from './Empresa';

export default class Descritor {
    static descrever(empresa: Empresa): string{
        return empresa.toString();
    }
}