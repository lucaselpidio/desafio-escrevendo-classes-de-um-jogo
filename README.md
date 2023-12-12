# desafio-escrevendo-classes-de-um-jogo
Desafio feito durante o bootcamp Potência Tech iFood na DIO.


## Objetivo:

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado `atacar` que deve atender os seguintes requisitos:

- Exibir a mensagem: "O {tipo} atacou usando {ataque}"
  - O `{tipo}` deve ser concatenado com o tipo que está na propriedade da classe.
  - No `{ataque}`, deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

    - Se mago -> no ataque exibir (usou magia)
    - Se guerreiro -> no ataque exibir (usou espada)
    - Se monge -> no ataque exibir (usou artes marciais)
    - Se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve-se exibir uma mensagem:

- "O {tipo} atacou usando {ataque}"
  - Exemplo: mago atacou usando magia
  - Exemplo: guerreiro atacou usando espada
