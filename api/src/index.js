import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try{
        let alunos = await db.tb_matricula.findAll({ order: [['id_matricula', 'desc']] });
        resp.send(alunos);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/matricula', async (req, resp) => {
    try{
        let{ nome, chamada, curso, turma } = req.body;

        let r = await db.tb_matricula.create({
            nm_aluno: nome,
            nr_chamada: chamada,
            nm_curso: curso,
            nm_turma: turma
        })
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.put('/matricula/:id', async (req, resp) => {
    try{
        let{  nome, chamada, curso, turma } = req.body;
        let { id } = req.params;

        let r = await db.tb_matricula.update(
            {
                nm_aluno: nome,
                nr_chamada: chamada,
                nm_curso: curso,
                nm_turma: turma
            },
            {
                where: { id_matricula: id }
            }
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.delete('/matricula/:id', async (req, resp) => {
    try{
        let { id } =  req.params;

        let r = await db.tb_matricula.destroy({ where: { id_matricula: id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.listen(process.env.PORT,
    x => console.log(`Server up at port ${process.env.PORT}`))
    