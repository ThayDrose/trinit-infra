export default async function handler(req, res) {
  // Apenas aceita método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // 1. Recebe os dados do formulário da LP
    const data = req.body;

    // 2. O servidor Vercel dispara o JSON para o n8n.
    // Como é um disparo Server-to-Server, o CORS não existe.
    const response = await fetch("https://thaydrose.app.n8n.cloud/webhook/e4d75ee6-4702-4246-8fef-eeff309c3e65", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`n8n recusou: ${response.status}`);
    }

    // 3. Devolve sucesso para a Landing Page
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Erro na API da Vercel:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
