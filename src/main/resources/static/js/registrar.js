document.getElementById('registration-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtendo os valores dos campos
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validação simples da senha
    if (password !== confirmPassword) {
        alert('As senhas não correspondem.');
        return;
    }

    // Montando o objeto de dados para o envio
    const data = {
        username,
        email,
        password
    };

    try {
        const response = await fetch('http://localhost:3000/api/users/register', {
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
            // Redirecionar ou fazer outra ação após o cadastro
            window.location.href = '/login.html'; // Redirecionar para a página de login
        } else {
            const errorData = await response.json();
            alert(errorData.message); // Mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Ocorreu um erro ao cadastrar. Tente novamente.');
    }
});
