import axios from "axios";

// Definindo uma interface para os dados esperados da API
interface OrderIdResponse {
  orderId: string;
}

// Chave da API
const API_KEY = "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf";

// Função para buscar dados da API externa
export async function fetchOrderId(): Promise<string> {
  try {
    const response = await axios.post<OrderIdResponse>(
      "https://api.tech.redventures.com.br/orders/generate-id",
      {},
      {
        headers: {
          "x-api-key": process.env.EXTERNAL_API_KEY,
        },
      }
    );
    return response.data.orderId; // Retornando diretamente o orderId
  } catch (error) {
    console.error("Error fetching order ID:", error);
    throw new Error("Failed to fetch order ID");
  }
}
