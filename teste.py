print("Olá! Seja bem-vindo ao programa em Python.")

# Pede o nome do usuário
nome = input("Qual é o seu nome? ")

# Pede a idade do usuário
idade = input("Quantos anos você tem? ")

# Pede a cidade onde o usuário mora
cidade = input("Qual cidade você mora? ")

# Exibe uma mensagem personalizada
print()
print("Muito legal! Aqui está um resumo do que você me contou:")
print(f"Seu nome é {nome}, você tem {idade} anos e mora em {cidade}.")

# Adiciona um comentário divertido com base na idade
try:
    idade_num = int(idade)
    if idade_num < 18:
        print("Você ainda é jovem! Aproveite cada momento.")
    elif idade_num < 60:
        print("Você está na melhor fase da vida!")
    else:
        print("Com certeza você tem muitas histórias para contar!")
except ValueError:
    print("Idade inválida! Mas tudo bem, vamos continuar assim mesmo 😄")

# Finaliza com uma mensagem de agradecimento
print()
print("Obrigado por usar o programa. Até a próxima!")
