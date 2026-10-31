import type { Endereco } from "../endereco/endereco";
import { Emprestimo } from "./emprestimo";
import type { UsuarioBiblioteca } from "./usuario-biblioteca";

class ProcessadorEmprestimo {
    // MÉTODOS DE INSTÂNCIA

    public processarEmprestimo(tituloLivro: string, usuario: UsuarioBiblioteca, enderecoUnidadeBiblioteca: Endereco, dataEmprestimo: Date, dataPrevistaDevolucao: Date): Emprestimo {
        if (!usuario.estarAptoParaNovoEmprestimo()) {
            throw new Error(`O usuário ${usuario.identificar()} não está apto para realizar um novo empréstimo.`);
        }

        return new Emprestimo(tituloLivro, usuario, enderecoUnidadeBiblioteca, dataEmprestimo, dataPrevistaDevolucao);
    }
}

export { ProcessadorEmprestimo }
