document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos
    const email = document.getElementById('email').value; // Mudado de username para email
    const password = document.getElementById('password').value;

    // Montando o objeto de dados para o envio
    const data = {
        email, // Usando email ao invés de username
        password
    };

    try {
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Verifica se a resposta é bem-sucedida
        if (response.ok) {
            const result = await response.json();
            alert(result.message); // Mensagem de sucesso
            // Redirecionar para a página principal ou outra ação após o login
            window.location.href = '/'; // Redirecionar para a página inicial
        } else {
            const errorData = await response.json();
            alert(errorData.message); // Mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro ao fazer login. Tente novamente.');
    }
});
