# 🔷 Alura Studies

Projeto desenvolvido no curso "Fundamentos de React: escrevendo com Typescript", é uma aplicação simples em React com intuito de criar tarefas que tem um timer, ao fim desse timer a aplicação atualiza automaticamente a tarefa para concluida.

<ul>
  <h2>Link: https://lucastoll.github.io/alura-studies/</h2>
  <img src="https://user-images.githubusercontent.com/86172649/165776500-7673d112-c102-443e-84c1-e2dd46a98416.png">
</ul>

# 💻 Tecnologias utilizadas
<ul>
  <li>React.js</li>
  <li>Typescript</li>
  <li>Styled Components</li>
  <li>UUID</li>
</ul>

# 📘 Estrutura do projeto

Essa seção do readme foi feita com objetivo de documentar a arquitetura e o funcionamento do projeto, para ajudar na fixação do entendimento do projeto e dos conteúdos estudados que ele aborda, principalmente os hooks e a parte do typescript.

## States

<ul>
  <h2> Tarefas </h2>
  <ul>
    É o state principal da aplicação, sendo um state que armazena objetos contendo todas as propriedades das tarefas que são criadas e executadas no projeto, esse state é tipado como InterfaceTarefa[ ], classificado como uma interface, que é uma feature do typescript que guarda os tipos das propriedades de um objeto (nesse caso), ele fica em uma pasta separada localizada na src, nomeada types:
    <img src="https://user-images.githubusercontent.com/86172649/165802947-3fa79516-9f99-4a2c-9427-1b84406644e4.png">
    O state é tipado com colchetes <InterfaceTarefa[]>, pois ele deve armazenar varios objetos do tipo da interface, fazendo uma array:
    <img src="https://user-images.githubusercontent.com/86172649/165806645-a2fb07cc-3b6a-497e-ae54-c2bed3d088e6.png">
  </ul>
</ul>

## Componentes 
<ul>
  <h2> App - componente principal</h2>
  <ul>
    É composto por uma div (styled-component) que engloba todos os outros componentes da aplicação
    <img src="https://user-images.githubusercontent.com/86172649/165780358-e508c5cd-b732-488b-bae8-819155ad53e1.png">
  </ul>
  
  <h2> ResetCss </h2>
  <ul>
      É um GlobalStyle, que consiste em uma função do styled-components para criar regras de estilo globais, as regras inseridas nesse caso são de um arquivo de reset.css que serve para definir todas as propiedades dos elementos do browser para 0, ele é o primeiro componente dentro do grupo para que regras inseridas nele sejam sobreescrevidas normalmente por outras regras escritas nos componentes seguintes.<br>
     <img src="https://user-images.githubusercontent.com/86172649/165783751-437cfa97-d4c6-4459-b5ac-51126a8f980a.png">
  </ul>
  
  <h2> Button </h2>
  <ul>
    Styled component simples exportado e usado em dois outros componentes, sendo eles o formulário e o cronômetro, aplicando o fundamento do react <b><i>DRY (Dont Repeat Yourself)</b></i>.
  </ul>
  
   <h2> Formulário </h2>
   <ul>
      <img src="https://user-images.githubusercontent.com/86172649/165812602-0a121ffa-84f6-4506-9a8e-d0c3b21afa79.png"><br>
      Comporta o papel padrão de um formulário e tem a <strong><i>função de setar novos objetos para o state Tarefas</i></strong>, ele é composto uma div (styled-component) com dois inputs e um botão dentro, a div mãe é um styled.form e contém uma função de onSubmit para mudar o comportamento do formulário<br>
     <img src="https://user-images.githubusercontent.com/86172649/165801293-08c8f04d-8b75-4344-a83b-7a0b3d632760.png"><br><br>
     essa função precisa ser tipada da seguinte maneira no TypeScript:<br>
     <img src="https://user-images.githubusercontent.com/86172649/165801646-9909a1ed-3e9c-4c76-a6ff-886da1a20b39.png">
     <br><br>
     Como a função desse componente é setar novas tarefas, a prop setTarefas foi passada a ele atráves do componente pai App, por isso, o typescript exige que esse componente seja tipado, para isso foi usado uma interface nomeada Props, que é escrita da seguinte maneira nesse caso de uso de setState: 
     <img src="https://user-images.githubusercontent.com/86172649/165811930-c7e79798-2cf0-461d-8d87-73aa59322182.png">
     <br><br>
     Os dois inputs encontrados nesse componente servem para captar o valor de duas propriedades das novas tarefas, sendo elas o nome (tarefa) e o tempo necessário para fazer aquela tarefa, dessa maneira, são feitos 2 states para mudar essas propriedades, pois um input sem state no react não é funcional, o valor padrão desses states é passado ao input com a propriedade value, e a função de set desses states é passada na propriedade onChange desses inputs com ajuda dos events:
     <img src="https://user-images.githubusercontent.com/86172649/165813373-26b8d15d-22d6-462f-84ed-c2ed876aad57.png">
     <br><br>
     Com isso, o valor desses inputs é passado a função de submit do formulário, que executa o setTarefas, state principal encontrado no App, basicamente a função de submit pega todos os valores antigos do state utilizando um <b><i>spread operator</i></b>, lembrando que os valores antigos são uma propriedade padrão dos states, dessa maneira, eles adotam qualquer nome que você colocar, o spread operator é feito da seguinte forma:<br>
     <img src="https://user-images.githubusercontent.com/86172649/165814907-26fc8747-2492-4866-9e16-a06248a13292.png">
     <br><br>
     Concluindo a seguinte função:
     <img src="https://user-images.githubusercontent.com/86172649/165815297-65636a2b-6ee5-443b-ab16-216d52cd4929.png">
     <br><br>
     a função <i><b>uuidv4()</b></i> é uma função importada de uma biblioteca para a criação de ids/hashs exclusivas automaticamente, para rodar ela foi feito os seguintes comandos:<br>
     <ul>
       <li>npm i uuid</li>
       <li>import { v4 as uuidv4} from 'uuid'</li>
     </ul>
  </ul>
</ul>


  




  
