import Usuario from "../Model/Usuario";

export default class UsuarioController{
    constructor(){
        this.usuario = new Usuario();
        this.usuario.perfil.nome='Gabriel';
        this.usuario.perfil.CPF=45656134;
        this.usuario.perfil.Email='babydobaby@gmail.com';
        this.usuario.perfil.DataDeNascimento='18/08/2001';
        this.usuario.perfil.CartaoDeVacina=456665423321;
        this.usuario.Vacinas.push(
            {
                nome:'Vacina x',
                doses:[
                    {
                        nome:'1 Dose',
                        data:'28/08/2022'
                    },
                    {
                        nome:'2 Dose',
                        data:'27/09/2022'
                    },
                    {
                        nome:'3 Dose',
                        data:'30/11/2022'
                    }
                ]
            },
            {
                nome:'Vacina Y',
                doses:[
                    {
                        nome:'1 Dose',
                        data:'28/08/2022'
                    },
                    {
                        nome:'Reforço',
                        data:'27/09/2022'
                    },
                    
                ]
            },
            {
                nome:'Vacina Z',
                doses:[
                    
                    {
                        nome:'Dose Unica',
                        data:'30/11/2022'
                    }
                ]
            }
        )

    }
   

}