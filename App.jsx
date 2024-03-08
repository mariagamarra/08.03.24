import React from 'react';
import './App.css';

function App(){
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    //preventDefault impede o comportamento padrao de recarregar a pagina ao clicar no botao.

    alert(`Nome: ${nome}, Email: ${email} Sobrenome: ${sobrenome} Senha: ${senha}`)
    //alert manda mensagem de 'erro
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forms</h1>

      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" value={nome}
      onChange={(e) => setNome(e.target.value)}/>
      <br/>

      <label htmlFor="sobrenome">Sobrenome:</label>
      <input type="text" name="sobrenome" id="sobrenome" value={nome}
      onChange={(e) => setSobrenome(e.target.value)}/>
      <br/>

      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" value={nome}
      onChange={(e) => setEmail(e.target.value)}/>
      <br/>

      <label htmlFor="senha">Senha:</label>
      <input type="password" name="senha" id="senha" value={nome}
      onChange={(e) => setSenha(e.target.value)}/>
      <br/>

    <div className='check'>
      <input type="checkbox" name="checkbox" id="check"/>
      <label htmlFor="checkbox">você aceita nossos termos?</label>
    </div>
      <button type="submit">Enviar</button>

    </form>

  );

}

export default App;
