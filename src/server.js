import express from 'express'
import cors from 'cors'
const App = express();

App.use(express.json())
App.use(cors())
const Dados = [];

App.get('/',(req,res)=>{
    res.json(Dados)
    
})
App.post('/',(request,response)=>{
    const {name,cpf,dia,quantidade} = request.body
    try {
       Dados.push({name,cpf,dia,quantidade})
    
        response.status(201).json(Dados)
    
        console.log("banco de dados em memoria....")
        console.log(Dados)
        
        
} catch (error) {
    
    response.status(500).json({mensagem:error.message})
    
}
    
})


App.listen(8080,()=>{
    console.log('Funcionando')
})