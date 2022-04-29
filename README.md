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

Nesse projeto, os states estão localizados no App e são passados como props para os componentes filhos.

<ul>
  <h2> Tarefas </h2>
  <ul>
    É o state principal da aplicação, sendo um state que armazena objetos contendo todas as propriedades das tarefas que são criadas e executadas no projeto, esse state é tipado como InterfaceTarefa[ ], classificado como uma interface, que é uma feature do typescript que guarda os tipos das propriedades de um objeto (nesse caso), ele fica em uma pasta separada localizada na src, nomeada types:
    <img src="https://user-images.githubusercontent.com/86172649/165802947-3fa79516-9f99-4a2c-9427-1b84406644e4.png">
    O state é tipado com colchetes <InterfaceTarefa[]>, pois ele deve armazenar varios objetos do tipo da interface, fazendo uma array:<br>
    <img src="https://user-images.githubusercontent.com/86172649/165806645-a2fb07cc-3b6a-497e-ae54-c2bed3d088e6.png">
  </ul>
    
  <h2> Selecionado </h2>
  <ul>
    State que serve para fazer a alteração da propriedade selecionada, contida nas tarefas do state tarefas, esse state é abordado nos componentes lista e cronômetro.
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
     Com isso, o valor desses inputs é passado a função de submit do formulário, que executa o setTarefas, state principal encontrado no App, basicamente a função de submit pega todos os valores antigos do state utilizando um <b><i>spread operator</i></b> e seta tarefas novas usando os dois states locais que mudam com os valores inseridos nos inputs, lembrando que os valores antigos são uma propriedade padrão dos states, dessa maneira, eles adotam qualquer nome que você colocar, o spread operator é feito da seguinte forma:<br>
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
     
  <h2> Lista </h2>
  <ul>
  <img src="https://user-images.githubusercontent.com/86172649/165820562-2bb0ea42-d5ee-439a-a96d-987dd8f5b568.png"><br>
    Esse componente tem como função fazer uma iteração com o .map sobre os dados de tarefas, do state tarefas, para então enviar os dados para o componente filho, nomeado Item, dessa maneira cada item é renderizado com um objeto da array de objetos de tarefas.
    <br><br>
    A lista recebe dois props, sendo eles a tarefa do state tarefas e a função seleciona tarefas, que apenas é repassada ao componente item, dessa maneira o componente foi tipado com uma interface props da seguinte maneira:<br>
    <img src="https://user-images.githubusercontent.com/86172649/165821856-5683829c-d93c-4330-adcc-1ad0d27ae145.png"><br>
    O componente é composto por um styled.div e o map a partir de tarefas, fazendo um componente item a cada iteração:
    <img src="https://user-images.githubusercontent.com/86172649/165823077-3e3cc030-b2f8-47e6-abbd-c00277721924.png"><br>
    
  <h2> Item </h2>
  <ul>
    Esse componente tem como função renderizar os dados enviados pela iteração de lista, aplicando o fundamento do react <b><i>SRP - Single Responsability Principle</b></i>, pois dessa maneira lista tem uma responsabilidade e item tem outra, esse componente recebe como props uma função que percorreu o seguinte caminho App -> Lista -> Item, além disso ele recebe toda a interfaceTarefa, pois ele manipula suas propriedades, então o componente foi tipado da seguinte maneira:
    <img src="https://user-images.githubusercontent.com/86172649/165826063-7681136b-3aed-4e5c-bd51-fe9354fca219.png"><br><br>
    A função executada nesse componente é a selecionaTarefa, ela possui o setSelecionado do state selecionado e o setTarefas do state tarefas, basicamente ela é executada no onClick de cada componente item,  essa função seta o selecionado do STATE SELECIONADO para true, então, é feito um map com o setTarefas percorrendo todas as tarefas, caso o id da tarefa seja igual ao id da tarefa selecionada, o selecionado do STATE TAREFA é setado para true, dessa maneira só pode ter um componente com selecionado = true.<br>
    <img src="https://user-images.githubusercontent.com/86172649/165829884-5204975c-6c5c-4105-8e77-0bd5a8fb45d6.png"><br><br>
    A logica do componente em si é simples, ele retorna a estrutura do item com os dados recebidos e possui ifs ternarios aplicando as seguintes logicas, no className, caso a propriedade selecionado daquele item (que vem de tarefas) seja true, ele adiciona a classe itemSelecionado, o mesmo processo acontece para a propriedade completado. Alem disso, ele conta com a função onClick já citada anteriormente, que só é executada caso completado seja == false, por fim, ele renderiza uma imagem no item caso completado seja == true, utilizando a seguinte lógica:
    <img src="https://user-images.githubusercontent.com/86172649/165966577-7cb8d1fa-8bf9-41e7-816c-c332f703bb03.png"><br><br>

  </ul>
  
  </ul>
  
  <h2> Cronômetro </h2>
  <ul>
     <img src="https://user-images.githubusercontent.com/86172649/165943089-1e290054-97b1-4b5c-8556-575e4a02e5a7.png"><br><br>
    Esse componente tem como funcão fazer a lógica para fazer o timer das tarefas decrescer, passando essa lógica para o seu componente filho relógio, que renderiza esse dados, o cronômetro recebe como props de app o selecionado do state selecionado e uma função nomeada finalizarTarefa, então sua tipagem ficou da seguinte maneira:
     <img src="https://user-images.githubusercontent.com/86172649/165946858-3873ba4f-7166-41a4-9897-9eea9dc52f32.png"><br><br>    
    Como o cronômetro manipula o tempo, ele tem uma state tempo, tipado como number, esse state entra em ação apenas quando o onClick do botão do componente executa, pois quando isso acontece é executada uma função nomeada regressiva, que é uma função em loop que seta a propriedade tempo do state para -1 a cada segundo, essa função tem um if que retorna ela mesmo com o contador - 1, dessa maneira ela é uma <b><i>função recursiva</b></i>, onde o tempo decresce ate 0 mudando no state tempo sempre, depois é executada a função finalizarTarefa, que foi passada por props.<br>
    <img src="https://user-images.githubusercontent.com/86172649/165953984-a58eb1cf-d1ac-47ff-aa05-7ac2c7994067.png"><br><br>
    A função finalizarTarefa basicamente seta o state selecionado daquela função para undefined e faz um map no setTarefas para trocar o completado daquele item para true.<br>
    <img src="https://user-images.githubusercontent.com/86172649/165959940-ff9688fb-1640-4c47-b1eb-bc355dbfd4c6.png"><br><br>   
    Para tudo isso funcionar, o componente possui um hook nomeado <b><i>useEffect</b></i>, que é executado cada vez que alguma coisa muda, ele foi utilizado para o componente saber qual item esta selecionado, então é um useEffect que é executa uma arrow function cada vez que o selecionado muda, executando a função setTempo do state tempo caso selecionado existir, dentro do setTempo existe uma função que troca todo o tempo do input do formulário para segundos.
    <img src="https://user-images.githubusercontent.com/86172649/165958697-ec10782d-201b-405d-9e5c-508677e0bdf2.png"><br><br>
    <h2> Relógio </h2>
    <ul>
      Esse componente tem como função receber a props tempo do componente cronômetro, tratar esses dados e renderizar eles de maneira correta, ele é tipado levando em conta que o tempo pode ser indefinido, isso é um comportamento que o typescript te obriga a fazer para previnir erros.<br>
      <img src="https://user-images.githubusercontent.com/86172649/165961512-6b2913c5-2e45-40e2-91e2-dcebf5a94fa4.png"><br><br>
      A lógica dele é bem simples, ele recebe o tempo em segundos e converte para minutos (arrendondado em inteiro) para mostrar nos 2 primeiros digitos, além disso, ele pega o resto desse tempo em segundos fazendo um mod % 60 nos segundos, dessa maneira os segundos são tratados e mostrados nos 2 últimos digitos do cronômetro. Por fim, mais um tratamento é aplicado nessas 2 variáveis, convertendo para string e utilizando a função .padStart, que basicamente coloca um 0 antes do primeiro digito caso esse numero só tenha uma casa decimal (1,2,3,4,5...), a estrutura dele é uma styled.div que engloba 5 divs, sendo 4 delas digitos e uma a divisão entre os digitos.<br>
      <img src="https://user-images.githubusercontent.com/86172649/165963424-de0d1c81-3f15-496e-8ef0-396621e6ad69.png"><br><br>
    </ul>       
  </ul>   
  </ul>
</ul>


  




  
