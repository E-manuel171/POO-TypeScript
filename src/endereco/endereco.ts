class Endereco { 
    
    //////////////////////////
    //ATRIBUTOS DE INSTÂNCIA//
    //////////////////////////

    private _CEP: string = '';
    private _numero: number = 0;
    private _rua: string = '';
    private _bairro: string = '';
    private _cidade: string = '';
    private _estado: string = '';

    ///////////////
    //GETs E SETs//
    ///////////////
    public get CEP(): string {
        return this._CEP;
    }
    public set CEP(valor: string) {
        this._CEP = valor;
    }
    
    public get numero(): number {
        return this._numero;
    }
    public set numero(valor: number) {
        this._numero = valor;
    }

    public get rua(): string {
        return this._rua;
    }
    public set rua(valor: string) {
        this._rua = valor;
    }

    public get bairro(): string {
            return this._bairro;
    }
    public set bairro(valor: string) {
            this._bairro = valor;
    }

    public get cidade(): string {
            return this._cidade;
    }
    public set cidade(valor: string) {
            this._cidade = valor;
    }
    
    public get estado(): string {
            return this._estado;
    }
    public set estado(valor: string) {
            this._estado = valor;
    }
    //////////////
    //CONSTRUTOR//
    //////////////

    constructor (CEP: string, numero: number, rua: string, bairro: string, cidade: string, estado: string) {
        this.CEP = CEP;
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    
}

export { Endereco }