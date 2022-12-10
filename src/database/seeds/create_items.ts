import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: "Papéis e Papelão", image: "papel.jpg" },
        { title: "Vidros e Lâmpadas", image: "vidro.jpg" },
        { title: "Óleo de Cozinha", image: "oleo.jpg" },
        { title: "Residuos Orgânicos", image: "organico.jpg" },
        { title: "Baterias e Pilhas", image: "bateria.jpg" },
        { title: "Eletrônicos", image: "eletronicos.jpg" },
    ]);
}
