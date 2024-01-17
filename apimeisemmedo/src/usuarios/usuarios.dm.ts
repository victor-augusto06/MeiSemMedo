import { Injectable } from "@nestjs/common";
import { UsuariosEntity } from "./usuario.entity";

@Injectable()
export class UsuariosArmazenados{
    #usuarios:UsuariosEntity[]=[]
    async AdicionarUsuarios(usuarios:UsuariosEntity){
        this.#usuarios.push(usuarios)
    }
    get Usuarios(){
        return this.#usuarios
    }
     ValidaEmail(email:string){
        const possivelUsuario=this.#usuarios.find(
            usuarios=>usuarios.email===email
        )
        return (possivelUsuario !==undefined)
    }
    atualizaUsuario(id: string, dadosAtualizacao: Partial<UsuariosEntity>){
        const usuario = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                usuario[chave] = valor;
            }
        )
        return usuario;
    }
    private buscaPorID(id:string){
        const possivelUsuario=this.#usuarios.find(
            usuarioSalvo=>usuarioSalvo.id===id
        )
        if(!possivelUsuario){
            throw new Error("Usuario não encontrado")
        }
        return possivelUsuario
    }
    
    async removeUsuario(id:string){
        const usuario=this.buscaPorID(id)
        this.#usuarios=this.#usuarios.filter(
            usuarioSalvo=>usuarioSalvo.id !==id
        )
        return usuario
    }
}