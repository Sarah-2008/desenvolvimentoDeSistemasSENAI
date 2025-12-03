CREATE DATABASE IF NOT EXISTS lojinha;
USE lojinha;

CREATE TABLE IF NOT EXISTS Cliente (
	idCliente INT(255),
    cpf INT(10),
    email VARCHAR(120),
    telefone VARCHAR(40)
);
    
CREATE TABLE IF NOT EXISTS Produto (
	idProduto INT(255),
	nomeProduto VARCHAR (29),
    preco DECIMAL(56,9),
    estoque VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS Pedido (
	idPedido INT(255),
    IdCliente INT(255),
    idProduto INT(255),
    quantidade INT(255)
);
