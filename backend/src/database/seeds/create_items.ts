import Knex from 'knex';

export async function seed(knex: Knex){
  await knex('items').insert([
      { title: 'Lâmpadas', image: 'lampadas.svg'},
      { title: 'Pilhas e baterias', image: 'baterias.svg'},
      { title: 'Papés e Papelão', image: 'papeis-papelao.svg'},
      { title: 'Resíduos Eletrônico', image: 'eletronicos.svg'},
      { title: 'Resíduos Orgânicos', image: 'organicos.svg'},
      { title: 'Óleo de Cozinha', image: 'oleo.svg'},
    ])
}
