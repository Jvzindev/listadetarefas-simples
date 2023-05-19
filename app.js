// Primeiro tenho que criar uma função com a ação do onclick lá do html
// Segundo eu preciso pegar os elementos e armazenar eles em uma variavel
// Terceiro preciso criar uma condição, si o taskInput(a caixa de texto) estiver vazia e o usuario clicar em "Adicionar" ele não consiga e
// apareça um alerta para ele.
function addTask() {
    let taskInput = document.querySelector('#taskInput');
    let taskList = document.querySelector('#taskList');

    // Si o valor de taskInput for igual a "" (uma string vazia / NADA), o usuario vai imitir um alerta na tela. Usei o return para encerrara
    // essa condição ali.
    if(taskInput.value == "") {
        alert("Por favor, insira sua tarefa!");
        return;
    }
    // Preciso criar um elemento 'li' para adicionar uma lista , quando o usuario digita a tarefa e clicar em "Adicionar";
    // newTask.textContent = taskInput.value;  = Quando o usuario escrever a tarefa no elemento taskInput, a tarefa dele vai ser armazenada
    // na newTask, depois que for armazenada. Eu vou adicionar a newTask no meu elemento taskList usando: taskList.appendChild(newTask); Assim
    // quando o usuario digitar a tarefa, será armazenada na newTask e adicionada na lista usando appendChild()
    let newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask)

    // Preciso criar um botão, para excluir a tarefa após o usuario completar essa tarefa.
    // Criei um elemento botão e armazenei na variavel buttonDel, depois adicionei uma classe nesse meu elemento criado para que eu possa mexer
    // no css ou puxar pra outra coisa que quero fazer dentro do js(usei: buttonDel.classList.add('btndel')). Depois adicionei um texto no meu
    // elemento button, para que o usuario posssa ver que é um botão para excluir, usei: (buttonDel.textContent = "Excluir"). Depois criei
    // um evento de click para o meu buttonDel (addEventListener) e dentro do bloco da função callback, removi a task quando clicar no botão
    // usei: taskList.removeChild(newTask) - Quero que remova a newTask do usuario que está na taskList
    
    // Fora do evento, adicionei o meu buttonDel na newTask para ficar do lado e aparecer o botão quando a task aparecer. Usei: newTask.appendChild(buttonDel);
    // Depois que o usuario adicionar uma tarefa quero que apague o input de text, para que ele possa adicionar mais task. Usei:
    // taskInput.value = "" - o taskInput.value vai armazenar uma String vazia

    let buttonDel = document.createElement('button');
    buttonDel.classList.add('btndel');
    buttonDel.textContent = "Excluir";

    buttonDel.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });
    newTask.appendChild(buttonDel);
    taskInput.value = ""

}