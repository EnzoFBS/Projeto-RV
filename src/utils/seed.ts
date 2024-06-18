import { config } from "dotenv";
import { MongoClient } from "../db/mongo";
import { Protein } from "../models/protein";
import { Broth } from "../models/broth"; // Asumindo que você tenha um modelo Broth semelhante ao Protein

// Carrega as variáveis de ambiente do arquivo .env
config();

const proteins: Omit<Protein, "id">[] = [
  {
    name: "Chasu",
    description:
      "A sliced flavourful pork meat with a selection of season vegetables.",
    imageActive: "https://tech.redventures.com.br/icons/Chasu/active.svg",
    imageInactive: "https://tech.redventures.com.br/icons/Chasu/active.svg",
    price: 10,
  },
  {
    name: "Yasai Vegetarian",
    description:
      "A delicious vegetarian lamen with a selection of season vegetables.",
    imageActive:
      "https://tech.redventures.com.br/icons/YasaiVegetarianInactive/active.svg",
    imageInactive:
      "https://tech.redventures.com.br/icons/YasaiVegetarianInactive/active.svg",
    price: 10,
  },
  {
    name: "Karaague",
    description:
      "Three units of fried chicken, moyashi, ajitama egg and other vegetables.",
    imageActive: "https://tech.redventures.com.br/icons/Karaague/active.svg",
    imageInactive: "https://tech.redventures.com.br/icons/Karaague/active.svg",
    price: 12,
  },
];

const broths: Omit<Broth, "id">[] = [
  {
    name: "Salt",
    description: "Simple like the seawater, nothing more",
    imageActive: "https://tech.redventures.com.br/icons/salt/active.svg",
    imageInactive: "https://tech.redventures.com.br/icons/salt/active.svg",
    price: 10,
  },
  {
    name: "Shoyu",
    description: "The good old and traditional soy sauce",
    imageActive: "https://tech.redventures.com.br/icons/shoyu/active.svg",
    imageInactive: "https://tech.redventures.com.br/icons/shoyu/active.svg",
    price: 10,
  },
  {
    name: "Miso",
    description: "Paste made of fermented soybeans",
    imageActive: "https://tech.redventures.com.br/icons/Miso/active.svg",
    imageInactive: "https://tech.redventures.com.br/icons/Miso/active.svg",
    price: 12,
  },
];

async function seed() {
  try {
    // Conecta ao MongoDB
    await MongoClient.connect();

    const db = MongoClient.db;

    // Coleção de proteínas
    const proteinsCollection = db.collection<Omit<Protein, "id">>("proteins");
    await proteinsCollection.deleteMany({});
    await proteinsCollection.insertMany(proteins);

    // Coleção de broths
    const brothsCollection = db.collection<Omit<Broth, "id">>("broths");
    await brothsCollection.deleteMany({});
    await brothsCollection.insertMany(broths);

    console.log("Database seeded successfully");
    process.exit(0); // Encerra o processo com sucesso
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // Encerra o processo com erro
  } finally {
    // Encerra a conexão com o banco de dados
    await MongoClient.client.close();
  }
}

// Executa o script de seed
seed();
