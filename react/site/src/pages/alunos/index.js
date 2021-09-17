import Cabecalho from '../../components/cabecalho'
import Menu from '../../components/menu'

import { Container, Conteudo } from './styled'

import {useState, useEffect } from 'react'

import Api from '../../service/api';
const api = new Api();

export default function Index() {

    const [alunos, setAlunos ] = useState([]);

    async function listar() {
        let r = await api.listar();
        console.log(r);
        setAlunos(r);
    }

    useEffect(() => {
        listar();
    }, [])

    return (
        <Container>
            <Menu />
            <Conteudo>
                <Cabecalho />
                <div class="body-right-box">
                    <div class="new-student-box">
                        
                        <div class="text-new-student">
                            <div class="bar-new-student"></div>
                            <div class="text-new-student">Novo Aluno</div>
                        </div>

                        <div class="input-new-student"> 
                            <div class="input-left">
                                <div class="agp-input"> 
                                    <div class="name-student"> Nome: </div>  
                                    <div class="input"> <input /> </div>  
                                </div> 
                                <div class="agp-input">
                                    <div class="number-student"> Chamada: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                            </div>

                            <div class="input-right">
                                <div class="agp-input">
                                    <div class="corse-student"> Curso: </div>  
                                    <div class="input"> <input /> </div>  
                                </div>
                                <div class="agp-input">
                                    <div class="class-student"> Turma: </div>  
                                    <div class="input"> <input /> </div> 
                                </div>
                            </div>
                            <div class="button-create"> <button> Cadastrar </button> </div>
                        </div>
                    </div>

                    <div class="student-registered-box">
                        <div class="row-bar"> 
                            <div class="bar-new-student"> </div>
                            <div class="text-registered-student"> Alunos Matriculados </div>
                        </div>
                    
                        <table class ="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Nome </th>
                                    <th> Chamada </th>
                                    <th> Turma </th>
                                    <th> Curso </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>

                               {alunos.map(item =>
                                  <tr>
                                      <td> 1 </td>
                                      <td> Fulao da Silva Sauro</td>
                                      <td> 15 </td>
                                      <td> InfoX </td>
                                      <td> Informática </td>
                                      <td> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                      <td> <button> <img src="/assets/images/trash.svg" alt="" /> </button> </td>
                                  </tr>
                                )}

                               
                            
        
                            </tbody> 
                        </table>
                    </div>
                </div>
            </Conteudo>
        </Container>
    )
}
