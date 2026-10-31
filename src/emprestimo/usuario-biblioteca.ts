// CONTRATO DOS USUÁRIOS QUE PODEM SOLICITAR EMPRÉSTIMOS
export interface UsuarioBiblioteca {
    // Cada usuário informa sua identificação e sua própria elegibilidade.
    identificar(): string;
    estarAptoParaNovoEmprestimo(): boolean;
}